import * as React from "react";
import "./MainComponent.css";
import "../../../External/style.css";
import styles from "./MainComponent.module.scss";
import { IUserDetails } from "../../../CommonServices/interface";
import { Button } from "primereact/button";
import { useRef, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const MainComponent = (props: any) => {
  const absoluteURL = props?.context?._pageContext?._web?.absoluteUrl;
  const leftEyeRef: any = useRef(null);
  const rightEyeRef: any = useRef(null);
  const ballRef: any = useRef(null);
  const [visible, setVisible] = React.useState(false);

  const userDetails: IUserDetails = {
    name: props?.context._pageContext._user.displayName,
    email: props?.context._pageContext._user.email,
  };

  // Preload audio once
  const clickSound = new Audio(`${absoluteURL}/SiteAssets/clickSound.mp3`);
  clickSound.preload = "auto";
  clickSound.load();

  // Reuse for instant play
  const playSound = () => {
    clickSound.currentTime = 0;
    void clickSound.play();
    setVisible(true);
  };

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

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouse);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div className="hero-container">
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
            <div className={styles.profile_header_user}>
              <div className={styles.profile_name}>
                Hello {userDetails?.name}
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
        <div className={styles.contentContainer}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              Design Beyond Pixels. Build Beyond Limits.
            </h1>
            <p className={styles.subtitle}>
              Webflow sites that don’t just look stunning they think, scale, and
              convert.
            </p>
            <Button
              label="Send feedback"
              className={styles.glowButton}
              onClick={() => {
                playSound();
              }}
            />
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
        </div>
      </div>

      {/* Stranger Things Popup */}
      <Dialog
        header="Send Feedback"
        visible={visible}
        onHide={() => setVisible(false)}
        // className={styles.strangerDialog}
        dismissableMask
        modal
      >
        <div>
          <div className={styles.inputRow}>
            <div className={styles.inputField}>
              <InputText placeholder="Your Name" />
            </div>
            <div className={styles.inputField}>
              <InputText placeholder="Your Email" />
            </div>
          </div>
          <div className={styles.inputRowTextarea}>
            <InputTextarea
              maxLength={500}
              placeholder="Your Feedback"
              rows={5}
            />
          </div>
          <div>
            <Button
              label="Submit"
              className="strangerBtn"
              onClick={() => setVisible(false)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MainComponent;
