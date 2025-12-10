/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @rushstack/no-new-null */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "./MainComponent.css";
import "../../../External/style.css";
import styles from "./MainComponent.module.scss";
import { IUserDetails } from "../../../CommonServices/interface";
import { Button } from "primereact/button";
import { useRef, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import SPServices from "../../../CommonServices/SPServices";
import { Config } from "../../../CommonServices/Config";
import { Toast } from "primereact/toast";
import { toastNotify } from "../../../CommonServices/CommonTemplates";
import Announcement from "./Announcement/Announcement";

const MainComponent = (props: any) => {
  const absoluteURL = props?.context?._pageContext?._web?.absoluteUrl;
  const leftEyeRef: any = useRef(null);
  const rightEyeRef: any = useRef(null);
  const ballRef: any = useRef(null);
  const toast = useRef<Toast>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [strangerThingsMasterData, setStrangerThingsMasterData] = useState<any>(
    []
  );
  console.log(strangerThingsMasterData, "strangerThingsMasterData");

  const userDetails: IUserDetails = {
    name: props?.context._pageContext._user.displayName,
    email: props?.context._pageContext._user.email,
  };
  console.log(userDetails, "userDetails in MainComponent.tsx");

  // Preload audio once
  const clickSound = new Audio(`${absoluteURL}/SiteAssets/clickSound.mp3`);
  clickSound.preload = "auto";
  clickSound.load();

  // Reuse for instant play
  const playSound = () => {
    clickSound.currentTime = 0;
    void clickSound.play();
  };

  //handle form data change
  const handleOnChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  //generate json on submit
  const generateJson = () => {
    if (!formData?.Email?.trim() || !formData?.FeedBack?.trim()) {
      showErrorToast();
      return;
    }

    const jsonData = {
      Name: formData?.Name ?? "",
      Email: formData?.Email ?? "",
      FeedBack: formData?.FeedBack ?? "",
    };

    void handleAdd(jsonData);
  };

  //show error toast
  const showErrorToast = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Error",
      content: (props) =>
        toastNotify({
          iconName: "pi-exclamation-triangle",
          ClsName: "toast-imgcontainer-warning",
          type: "Alert",
          msg: "Email and Feed back is required fields!",
          image: require("../../../External/errorImage.png"),
        }),
      life: 3000,
    });
  };

  //add item to list
  const handleAdd = (jsonData: any) => {
    SPServices.SPAddItem({
      Listname: Config.ListNames.FeedBack,
      RequestJSON: jsonData,
    })
      .then((res) => {
        //reset form data
        setFormData({
          Name: "",
          Email: "",
          FeedBack: "",
        });
        setVisible(false);
      })
      .catch((err) => {
        console.log(
          err,
          "Add Datas to FeedBack err in MainComponent.tsx component"
        );
      });
  };

  //initial render eye movement setup
  useEffect(() => {
    const ball = ballRef.current;
    const left = leftEyeRef.current;
    const right = rightEyeRef.current;
    if (!ball || !left || !right) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const maxMoveX = 25; // max px eyes can move horizontally
    const maxMoveY = 20; // max px eyes can move vertically

    const handleGlobalMouse = (e: MouseEvent) => {
      const rect = ball.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      targetX = dx / 7; // movement sensitivity
      targetY = dy / 7;
    };

    const handleLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animateEyes = () => {
      currentX += (targetX - currentX) * 0.25; // smooth easing
      currentY += (targetY - currentY) * 0.25;

      // clamp eyes so they never leave the ball
      const clampedX = Math.max(-maxMoveX, Math.min(maxMoveX, currentX));
      const clampedY = Math.max(-maxMoveY, Math.min(maxMoveY, currentY));

      left.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
      right.style.transform = `translate(${clampedX}px, ${clampedY}px)`;

      // subtle head tilt
      const rotY = Math.max(-25, Math.min(25, clampedX / 5));
      const rotX = Math.max(-15, Math.min(15, -clampedY / 5));
      ball.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;

      requestAnimationFrame(animateEyes);
    };

    window.addEventListener("mousemove", handleGlobalMouse);
    window.addEventListener("mouseout", handleLeave);

    requestAnimationFrame(animateEyes);
    getStrangerThingsMasterDatas();

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouse);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  //fetch master data:
  const getStrangerThingsMasterDatas = () => {
    SPServices.SPReadItems({
      Listname: Config.ListNames.StrangerThingsMasterList,
      Select: "*",
      Orderby: "Modified",
      Orderbydecorasc: true,
    })
      .then((res: any) => {
        console.log(res, "res in getStrangerThingsMasterDatas");
        let strangerThingsMasterData: any = [];
        res?.forEach((items: any) => {
          strangerThingsMasterData.push({
            Title: items?.Title,
            Description: items?.Description,
            AnnouncementTitle: items?.AnnouncementTitle,
            AnnouncementDescription: items?.AnnouncementDescription,
            AnnouncementImage: items?.AnnouncementImage,
          });
        });
        setStrangerThingsMasterData([...strangerThingsMasterData]);
      })
      .catch((err) => {
        console.log(err, "err in getStrangerThingsMasterDatas");
      });
  };

  return (
    <>
      <div className="hero-container">
        <Toast ref={toast} position="top-right" className="stranger-toast" />
        <div className="bg-layer">
          <img
            src={require("../../../External/tenor.gif")}
            className="bg-gif"
            alt="background"
          />
        </div>

        {/* Audio */}
        {/* <audio autoPlay loop>
          <source
            src={`${absoluteURL}/SiteAssets/strangerthings_remix.mp3`}
            type="audio/mpeg"
          />
        </audio> */}
        <div className={styles.section}>
          <div className={`${styles.headerSection} headerSection`}>
            <div className={`${styles.headerContainer}`}>
              <div className={styles.logo}>
                <img
                  src={require("../../../External/logo.png")}
                  alt="no image"
                ></img>
              </div>
              <div className={styles.navbar}>
                <ul>
                  <li>Home</li>
                  <li>
                    About <span className={styles.arrow}></span>
                  </li>
                  <li>
                    Services <span className={styles.arrow}></span>
                  </li>
                  <li>Contact</li>
                  <li>
                    Blog <span className={styles.arrow}></span>
                  </li>
                  <li>Careers</li>
                  <li>
                    Compnay & News <span className={styles.arrow}></span>
                  </li>
                  <li>Workspaces & Teams</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.contentContainer} contentContainer`}>
            <div className={styles.welcomeContainer}>
              <h1 className={styles.title}>Welcome, {userDetails?.name}!</h1>
            </div>
            <div className={styles.roboContainer}>
              <div className={styles.roboBall} ref={ballRef}>
                <div
                  className={`${styles.eye} ${styles.leftEye}`}
                  ref={leftEyeRef}
                ></div>
                <div
                  className={`${styles.eye} ${styles.rightEye}`}
                  ref={rightEyeRef}
                ></div>
              </div>
            </div>
            <div className={`${styles.boxContainer} boxContainer`}>
              <div className={styles.textSection}>
                <p className={styles.subtitle}>
                  {
                    strangerThingsMasterData.find(
                      (item: any) => (item?.Title ?? "").trim() !== ""
                    )?.Title
                  }
                </p>
                <div className={styles.description}>
                  {
                    strangerThingsMasterData.find(
                      (item: any) => (item?.Description ?? "").trim() !== ""
                    )?.Description
                  }
                </div>
                <Button
                  label="Send feedback"
                  className={styles.glowButton}
                  onClick={() => {
                    playSound();
                    setVisible(true);
                  }}
                />
              </div>
              <div
                className={`${styles.videoSection} videoSection`}
                onClick={() => {
                  playSound();
                  window.open(
                    "https://www.youtube.com/watch?v=b9EkMc79ZSU",
                    "_blank"
                  );
                }}
              >
                <div className={styles.videoOverlay}>
                  <i
                    style={{ fontSize: "34px" }}
                    className="pi pi-play playIcon"
                  ></i>
                </div>
              </div>
              <div className={styles.announcements}>
                {strangerThingsMasterData?.map((item: any, index: number) => (
                  <div className={styles.announceCard} key={index}>
                    <img
                      src={`${item?.AnnouncementImage?.Url}` || ""}
                      alt="no image"
                    />
                    <div>
                      <h4>{item?.AnnouncementTitle}</h4>
                      <p>{item?.AnnouncementDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Announcement />
      </div>
      {/* Stranger Things Popup */}
      <Dialog
        header="Send Feedback"
        visible={visible}
        onHide={() => setVisible(false)}
        dismissableMask
        modal
      >
        <div>
          <div className={styles.inputRow}>
            <div className={styles.inputField}>
              <InputText
                value={formData?.Name}
                onChange={(e) => handleOnChange("Name", e.target.value)}
                placeholder="Your Name"
              />
            </div>
            <div className={styles.inputField}>
              <InputText
                value={formData?.Email}
                onChange={(e) => handleOnChange("Email", e.target.value)}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className={styles.inputRowTextarea}>
            <InputTextarea
              value={formData?.FeedBack}
              onChange={(e) => handleOnChange("FeedBack", e.target.value)}
              maxLength={500}
              placeholder="Your Feedback"
              rows={5}
            />
          </div>
          <div>
            <Button
              label="Submit"
              className="strangerBtn"
              onClick={() => {
                playSound();
                generateJson();
              }}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MainComponent;
