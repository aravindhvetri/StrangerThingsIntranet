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
  const rameshNaaGemini = require("../../../../External/rameshNaaGemini.png");
  const kaliNaaGemini = require("../../../../External/kaliNaaGemini.png");
  const meGemini = require("../../../../External/meGemini.png");
  const members = [
    {
      name: "Dustin Ramesh",
      desc: "Shadow Strategist Agent- Mastermind lurking where shadows meet reality pulling unseen strings and outwitting every challenge with precision.",
      img: rameshNaaGemini,
      comments: 2,
      likes: 5,
    },
    {
      name: "Billy Kali",
      desc: "Dimension Guardian — Standing at the edge of the unknown, protecting all realms with unbreakable courage and unwavering strength.",
      img: kaliNaaGemini,
      comments: 12,
      likes: 10,
    },
    {
      name: "Aari Mike",
      desc: "Portal Explorer Agent - Mapping unseen paths between worlds, driven by curiosity, courage, and the hunger to discover what lies beyond.",
      img: meGemini,
      comments: 6,
      likes: 4,
    },
  ];
  const normalWorldmembers = [
    {
      name: "Dustin Ramesh",
      desc: "Chief Strategy Officer - Guiding us through every challenge with clarity and standing as the calm force behind every critical decision we make.",
      img: rameshNaaGemini,
      comments: 6,
      likes: 4,
    },
    {
      name: "Billy Kali",
      desc: "Technology Head - Building the tools that make everything possible,working silently behind the scenes to keep every system alive.",
      img: kaliNaaGemini,
      comments: 2,
      likes: 5,
    },
    {
      name: "Aravindh Mike",
      desc: "Operations Lead - Keeping the gears turning smoothly, day by day,solving problems before they even surface with quiet efficiency.",
      img: meGemini,
      comments: 12,
      likes: 10,
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
        {(strangerToggle ? normalWorldmembers : members).map((m, i) => (
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
