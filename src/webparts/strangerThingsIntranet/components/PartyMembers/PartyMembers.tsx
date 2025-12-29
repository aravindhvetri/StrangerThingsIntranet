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
import styles from "./PartyMembers.module.scss";
import "../../../../External/style.css";
import { useScrollReveal } from "../../../../CommonServices/CommonTemplates";

const PartyMembers = ({ strangerToggle }: any) => {
  const { ref, visible } = useScrollReveal();
  const members = [
    {
      name: "Derek Swinton",
      desc: "Derek Swinton is a Director of Engineering. He is responsible for leading engineering operations and driving innovation.",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      comments: 2,
      likes: 5,
    },
    {
      name: "Emily Rodriguez",
      desc: "Emily Rodriguez is a Governance and Security Manager with over a decade of experience in the field and drivings.",
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      comments: 12,
      likes: 10,
    },
    {
      name: "Kayla Anderson",
      desc: "Kayla Anderson is a Contract Management Team Lead, ensuring compliance and strong vendor relationships.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      comments: 6,
      likes: 4,
    },
  ];
  return (
    <div
      ref={ref}
      className={`${styles.PartyMain} fadeUp ${visible ? "visible" : ""}`}
    >
      <h2
        className={`${styles.heading} ${
          strangerToggle ? "normalWorlHeading" : "heading"
        }`}
      >
        Meet your new party members
      </h2>

      <div className={styles.MemberFlex}>
        {members.map((m, i) => (
          <div
            className={`${styles.Card} ${
              strangerToggle ? "cardNormalWorld" : "card"
            }`}
            key={i}
          >
            <h3
              className={strangerToggle ? styles.NameNormalWorld : styles.Name}
            >
              {m.name}
            </h3>

            <p
              style={strangerToggle ? { color: "#394885e6" } : {}}
              className={styles.Desc}
            >
              {m.desc}
            </p>

            <div className={styles.ImgBox}>
              <img src={m.img} alt={m.name} />
            </div>

            <div className={styles.Footer}>
              <span>Comments ({m.comments})</span>
              <div className={styles.imageContainer}>
                <div className={styles.ImgDiv}>
                  <img src={require("../../../../External/like.png")}></img>
                </div>
                <span> {m.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartyMembers;
