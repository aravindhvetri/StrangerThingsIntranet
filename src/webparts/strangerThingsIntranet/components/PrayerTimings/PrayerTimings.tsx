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
import "../../../../External/style.css";
import CommonHeaderStyles from "../PartyMembers/PartyMembers.module.scss";
import styles from "./PrayerTimings.module.scss";
import * as moment from "moment";
import { useScrollReveal } from "../../../../CommonServices/CommonTemplates";

const PrayerTimings = ({ strangerToggle }: any) => {
  const { ref, visible } = useScrollReveal();
  const moon = require("../../../../External/moon.png");
  const clock = require("../../../../External/clock.png");
  const upcommingTimings = [
    { name: "Shadow Gate Opens", time: "12:00 AM - 12:00 PM", left: "" },
    {
      name: "Secret Lab Access",
      time: "1:00 AM – 5:00 AM",
      left: "",
    },
    { name: "Dark Market Stalls", time: "2:00 AM - 03:00 AM", left: "" },
    { name: "Monster Patrol", time: "11:00 PM - 12:00 AM", left: "" },
  ];
  const upcommingTimingsNormalWorldData = [
    { name: "Gate Opens", time: "08:30 PM", left: "2 hours left" },
    { name: "Service desk", time: "05:32 AM", left: "12 hours left" },
    { name: "Food court", time: "10:00 AM", left: "20 hours left" },
    { name: "parking", time: "07:00 AM", left: "22 hours left" },
  ];
  return (
    <div
      ref={ref}
      className={`${styles.section} fadeLeft ${visible ? "visible" : ""}`}
    >
      <h2
        className={`${CommonHeaderStyles.heading} ${
          strangerToggle ? "normalWorlHeading" : "heading"
        }`}
      >
        {strangerToggle ? "Starcourt Mall timings" : "Shadow Bazaar Timings"}
      </h2>
      <div
        className={strangerToggle ? "starCourtNormalWorld" : "starcourtMall"}
      >
        <div className={styles.highlightContainer}>
          <div className={styles.circleContainer}>
            <div>
              <div className={styles.imageContainer}>
                <img src={moon} alt="no image"></img>
              </div>
              <div className={styles.time}>06:30 PM</div>
              <div className={styles.text}>
                {strangerToggle ? "Mall Starting" : "Dawn Portal"}
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.tagContainer}>
              <div>{moment().format("DD/MM/YYYY")}</div>
            </div>
            <div className={styles.tagContainer}>Timezone (GMT+4)</div>
            <div className={styles.tagContainer}>
              <div>Chennai, India</div>
            </div>
          </div>
        </div>
        <div className={styles.upCommingPrayersTimeContainer}>
          <h2
            style={{ fontSize: "13px", marginBottom: "14px" }}
            className={`${strangerToggle ? "normalWorlHeading" : "heading"}`}
          >
            upcoming timings
          </h2>

          {(strangerToggle
            ? upcommingTimingsNormalWorldData
            : upcommingTimings
          ).map((item, index) => (
            <div key={index} className={styles.prayerRow}>
              <div className={styles.left}>
                <div className={styles.clockCircle}>
                  <img src={clock} alt="no clock image"></img>
                </div>
                <div className={styles.prayerText}>
                  <span className={styles.prayerName}>{item.name}</span>
                  <span className={styles.prayerTime}> | {item.time}</span>
                </div>
              </div>

              <div className={styles.right}>{item.left}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayerTimings;
