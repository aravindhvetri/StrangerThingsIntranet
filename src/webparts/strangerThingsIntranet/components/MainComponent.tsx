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
import {
  toastNotify,
  useScrollReveal,
} from "../../../CommonServices/CommonTemplates";
import QuickLinks from "./QuickLinks/QuickLinks";
import TopProjects from "./TopProjects/TopProjects";
import AllNews from "./AllNews/AllNews";
import PartyMembers from "./PartyMembers/PartyMembers";
import Documents from "./Documents/Documents";
import NewJoiners from "./NewJoiners/NewJoiners";
import Calendar from "./Calendar/Calendar";
import Leaves from "./LeavesAndEvents/Leaves";
import PrayerTimings from "./PrayerTimings/PrayerTimings";
import ThreeD from "./ThreeD/ThreeD";
import Footer from "./Footer/Footer";
import { InputSwitch } from "primereact/inputswitch";

const MainComponent = (props: any) => {
  const { ref, visible } = useScrollReveal();
  const [videoVisible, setVideoVisible] = useState(false);
  const view = require("../../../External/view.png");
  const mall = require("../../../External/shopping-center.png");
  const absoluteURL = props?.context?._pageContext?._web?.absoluteUrl;
  const leftEyeRef: any = useRef(null);
  const rightEyeRef: any = useRef(null);
  const ballRef: any = useRef(null);
  const toast = useRef<Toast>(null);
  const [visibles, setVisible] = useState(false);
  const [strangerToggle, setStrangerToggle] = useState<boolean>(true);
  const [threeDVisible, setThreeDVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [formData, setFormData] = useState<any>({});
  const [strangerThingsMasterData, setStrangerThingsMasterData] = useState<any>(
    []
  );
  const [
    strangerThingsMasterNormalWorldData,
    setStrangerThingsMasterNormalWorldData,
  ] = useState<any>([]);
  const tabs = ["All news", "Marketings", "Top organizers"];
  const [activeTab, setActiveTab] = useState("All news");
  const userDetails: IUserDetails = {
    name: props?.context._pageContext._user.displayName,
    email: props?.context._pageContext._user.email,
  };
  const redLogo = require("../../../External/fireLogoRemovebg.png");
  const whiteLogo = require("../../../External/whiteLogo.png");
  const audioRef = useRef<HTMLAudioElement>(null);

  // Preload audio once
  const clickSound = new Audio(`${absoluteURL}/SiteAssets/clickSound.mp3`);
  clickSound.preload = "auto";
  clickSound.load();

  // Reuse for instant play
  const playSound = () => {
    clickSound.currentTime = 0;
    void clickSound.play();
  };

  // Preload Hover audio once
  const clickHoverSound = new Audio(`${absoluteURL}/SiteAssets/hoverSound.mp3`);
  clickHoverSound.preload = "auto";
  clickHoverSound.load();

  // Reuse for Hover instant play
  const playHoverSound = () => {
    clickHoverSound.currentTime = 0;
    void clickHoverSound.play();
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
      Title: formData?.Name ?? "",
      Email: formData?.Email ?? "",
      FeedBack: formData?.FeedBack ?? "",
    };

    void handleAdd(jsonData);
  };

  //Control audio play/pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // const toggleMute = () => {
  //   if (!audioRef.current) return;

  //   audioRef.current.muted = !isMuted;
  //   setIsMuted(!isMuted);
  // };

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

  //Render components:
  const renderContent = () => {
    switch (activeTab) {
      case "All news":
        return (
          <div className={styles.newsContainers}>
            <AllNews
              playHoverSound={playHoverSound}
              strangerToggle={strangerToggle}
            />
          </div>
        );

      case "Marketings":
        return (
          <div className={styles.newsContainers}>
            <TopProjects strangerToggle={strangerToggle} />
          </div>
        );

      case "Top organizers":
        return (
          <div className={styles.newsContainers}>
            <NewJoiners strangerToggle={strangerToggle} />
          </div>
        );

      default:
        return null;
    }
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
    getStrangerThingsMasterNormalWorldDatas();

    // Set audio volume
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

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

  //fetch normal world master data:
  const getStrangerThingsMasterNormalWorldDatas = () => {
    SPServices.SPReadItems({
      Listname: Config.ListNames.StrangerThingsMasterNormalWorldList,
      Select: "*",
      Orderby: "Modified",
      Orderbydecorasc: true,
    })
      .then((res: any) => {
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
        setStrangerThingsMasterNormalWorldData([...strangerThingsMasterData]);
      })
      .catch((err) => {
        console.log(err, "err in getStrangerThingsMasterDatas");
      });
  };

  const normalWorldItem = strangerThingsMasterNormalWorldData?.find(
    (item: any) => (item?.Title ?? "").trim() !== ""
  );

  return (
    <>
      <div className={strangerToggle ? "normal-world" : "hero-container"}>
        <Toast ref={toast} position="top-right" className="stranger-toast" />
        <audio ref={audioRef} autoPlay loop>
          <source
            src={`${absoluteURL}/SiteAssets/strangerthings_remix.mp3`}
            type="audio/mpeg"
          />
        </audio>
        <div className={styles.section}>
          <div
            className={`${styles.headerSection} headerSection ${
              strangerToggle ? "headerSectionNormalWorld" : ""
            }`}
          >
            <div className={`${styles.headerContainer}`}>
              <div className={styles.logo}>
                <img
                  src={strangerToggle ? whiteLogo : redLogo}
                  alt="no image"
                ></img>
              </div>
              <div className={styles.navbar}>
                <ul>
                  <li
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                  >
                    Home
                  </li>
                  <li
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                  >
                    About <span className={styles.arrow}></span>
                  </li>
                  <li
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                  >
                    Services <span className={styles.arrow}></span>
                  </li>
                  <li
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                  >
                    Contact
                  </li>
                  <li
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                  >
                    Blog <span className={styles.arrow}></span>
                  </li>

                  <li
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                  >
                    Company & News <span className={styles.arrow}></span>
                  </li>
                </ul>
              </div>
              <div
                style={{ display: "flex", gap: "12px", marginRight: "24px" }}
              >
                <div className="inputToggleSwitch">
                  <InputSwitch
                    checked={strangerToggle}
                    title="change the world"
                    onChange={(e) => {
                      setStrangerToggle(e.value);
                      playSound();
                    }}
                  />
                </div>
                <div className={styles.profile_Image}>
                  <img
                    src={`/_layouts/15/userphoto.aspx?size=L&username=${userDetails?.email}`}
                    alt="User profile photo"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.contentContainer} ${
              strangerToggle
                ? "contentContainerNormalWorld"
                : "contentContainer"
            }`}
          >
            <div className={styles.welcomeContainer}>
              <h1
                className={
                  strangerToggle ? styles.titleNormalWorld : styles.title
                }
              >
                Welcome, {userDetails?.name}!
              </h1>
              <div
                title="This is a 360-degree view that contains everything from Stranger Things. You can click once and look around."
                className={styles.viewImageContainer}
                onClick={() => {
                  playSound();
                  setThreeDVisible(true);
                }}
              >
                <img src={strangerToggle ? mall : view}></img>
              </div>
            </div>
            <div className={styles.roboContainer}>
              <div
                className={
                  strangerToggle ? styles.roboBallNormalWorld : styles.roboBall
                }
                ref={ballRef}
              >
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
            <div
              ref={ref}
              className={`${styles.boxContainer} ${
                strangerToggle ? "boxContainerNormalWorld" : "boxContainer"
              } fadeLeft ${visible ? "visible" : ""}`}
            >
              <div className={styles.textSection}>
                <p className={styles.subtitle}>
                  {strangerToggle
                    ? normalWorldItem?.Title
                    : strangerThingsMasterData.find(
                        (item: any) => (item?.Title ?? "").trim() !== ""
                      )?.Title}
                </p>
                <div className={styles.description}>
                  {strangerToggle
                    ? normalWorldItem?.Description
                    : strangerThingsMasterData.find(
                        (item: any) => (item?.Description ?? "").trim() !== ""
                      )?.Description}
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
                  setVideoVisible(true);
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
                {(strangerToggle
                  ? strangerThingsMasterNormalWorldData
                  : strangerThingsMasterData
                )?.map((item: any, index: number) => (
                  <div className={styles.announceCard} key={index}>
                    <img src={item?.AnnouncementImage?.Url || ""} />
                    <div>
                      <h4>{item?.AnnouncementTitle}</h4>
                      <p>{item?.AnnouncementDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <QuickLinks
            playHoverSound={playHoverSound}
            strangerToggle={strangerToggle}
          />
          <div className={styles.partyMembersAndDocumentsSection}>
            <div className={styles.PartyMembersContainer}>
              <PartyMembers
                playHoverSound={playHoverSound}
                strangerToggle={strangerToggle}
              />
            </div>
            <div className={styles.DocumentContainer}>
              <Documents
                playHoverSound={playHoverSound}
                strangerToggle={strangerToggle}
              />
            </div>
          </div>
          <div className={styles.calendarSection}>
            <div className={styles.tilesContainer}>
              <PrayerTimings strangerToggle={strangerToggle} />
            </div>
            <div className={styles.calendarContainer}>
              <Calendar strangerToggle={strangerToggle} />
            </div>
            <div className={styles.shoutOuts}>
              <Leaves strangerToggle={strangerToggle} />
            </div>
          </div>
          <div className={styles.Layout}>
            <div className={styles.buttonsContainer}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${
                    activeTab === tab ? styles.activeTab : ""
                  }`}
                  onClick={() => {
                    playSound();
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>{renderContent()}</div>
            <div className="music-controller">
              <button
                title="Pause & Play"
                className="music-btn"
                onClick={() => {
                  playSound();
                  togglePlayPause();
                }}
              >
                <i className={`pi ${isPlaying ? "pi-volume-up" : "pi-play"}`} />
              </button>
            </div>
          </div>
          <div className={styles.footer}>
            <Footer strangerToggle={strangerToggle} />
          </div>
        </div>
      </div>
      {/* Stranger Things Popup */}
      <Dialog
        header="Send Feedback"
        visible={visibles}
        onHide={() => setVisible(false)}
        dismissableMask
        modal
        className="feedBackDialog"
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

      {/*stranger things 360 degree popup*/}
      <Dialog
        visible={threeDVisible}
        onHide={() => setThreeDVisible(false)}
        dismissableMask
        modal
        className="threeD"
      >
        <div>
          <ThreeD strangerToggle={strangerToggle} />
        </div>
      </Dialog>

      {/* Video popup */}
      <Dialog
        visible={videoVisible}
        onHide={() => setVideoVisible(false)}
        dismissableMask
        modal
        className="videoDialog"
      >
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Stranger Things Trailer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </Dialog>
    </>
  );
};

export default MainComponent;
