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
import styles from "./TopProject.module.scss";
import "../../../../External/style.css";

const TopProjects = () => {
  const sampleProjects = [
    {
      title: "AI Model Upgrade",
      desc: "New LLM pipeline integrated successfully",
      date: "Dec 5, 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/9435/9435355.png",
      color: "#ff2d55",
    },
    {
      title: "Frontend Revamp",
      desc: "Dashboard UI/UX updated",
      date: "Dec 4, 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/9435/9435355.png",
      color: "#00eaff",
    },
    {
      title: "Backend Optimization",
      desc: "Server performance improved by 40%",
      date: "Dec 1, 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/9435/9435355.png",
      color: "#ffb300",
    },
  ];
  return (
    <div className={styles.TopProjectSection}>
      <h2 className="heading">Top Projects</h2>

      <div className={styles.TopProjectContainer}>
        {sampleProjects.map((proj, index) => (
          <div key={index} className={styles.TopProjectBox}>
            <div className={styles.leftTimeline}>
              <span
                className={styles.timelineDot}
                style={{ boxShadow: `0 0 15px ${proj.color}` }}
              >
                <img src={proj.icon} alt="" />
              </span>
              <div className={styles.timelineLine}></div>
            </div>

            <div className={styles.contentBox}>
              <div className={styles.projectTitle}>{proj.title}</div>
              <div className={styles.projectDesc}>{proj.desc}</div>
            </div>

            <div className={styles.projectDate}>
              <div className={styles.calendarIcon}>
                <img src={require("../../../../External/calendar.png")}></img>
              </div>
              <div>{proj.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProjects;
