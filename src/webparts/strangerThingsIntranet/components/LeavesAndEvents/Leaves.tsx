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
import styles from "./Leaves.module.scss";
import { Carousel } from "primereact/carousel";
import commonHeadingSideBarStyle from "../PartyMembers/PartyMembers.module.scss";
import { useScrollReveal } from "../../../../CommonServices/CommonTemplates";

const Leaves = ({ strangerToggle }: any) => {
  const { ref, visible } = useScrollReveal();
  const rameshNaaGemini = require("../../../../External/rameshNaaGemini.png");
  const kaliNaaGemini = require("../../../../External/kaliNaaGemini.png");
  const meGemini = require("../../../../External/meGemini.png");
  const AwardsData = [
    {
      award: "Elite Excellence",
      name: "Aari Mike",
      title: "Shadow Mastermind",
      discription:
        "Navigating the shadows with unmatched strategy, he anticipates dangers long before they surface, reading the silence, the patterns, and the unseen threats that others miss. Across shifting dimensions and unstable realities, he keeps the team protected through calculated moves, and the ability to turn chaos into control. When paths fracture and worlds collide, his strategy ensures everyone makes it back safely.",
      image: meGemini,
      awardBy: kaliNaaGemini,
      awardByName: "Billy Kali",
    },
    {
      award: "Silvar Spark",
      name: "Billy Kali",
      title: "Shadow Manager",
      discription:
        "Operating behind the scenes, the Shadow Manager controls every move without being seen.He reads the silence, predicts chaos, and guides the team before danger reveals itself.While others face the frontlines, he protects reality from slipping into darkness.Across dimensions and broken paths, his strategy keeps everyone alive.In the Normal World or the Upside Down, his presence is felteven when he's unseen",
      image: kaliNaaGemini,
      awardBy: rameshNaaGemini,
      awardByName: "Dustin Ramesh",
    },
    {
      award: "Elite Gold",
      name: "Dustin Ramesh",
      title: "Shadow Mastermind",
      discription:
        "Navigating the shadows with unmatched strategy, he anticipates dangers long before they surface, reading the silence, the patterns, and the unseen threats that others miss. Across shifting dimensions and unstable realities, he keeps the team protected through calculated moves, and the ability to turn chaos into control. When paths fracture and worlds collide, his strategy ensures everyone makes it back safely.",
      image: rameshNaaGemini,
      awardBy: meGemini,
      awardByName: "Aari Mike",
    },
  ];

  const NormalWorldAwardsData = [
    {
      award: "Elite Excellence",
      name: "Dustin Ramesh",
      title: "Assurance Specialist",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image: rameshNaaGemini,
      awardBy: kaliNaaGemini,
      awardByName: "Billy Kali",
    },
    {
      award: "Best Employee",
      name: "Aari Mike",
      title: "Technical Lead",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image: meGemini,
      awardBy: kaliNaaGemini,
      awardByName: "Billy Kali",
    },
    {
      award: "Gold Spark",
      name: "Billy Kali",
      title: "Technical Manager",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image: kaliNaaGemini,
      awardBy: rameshNaaGemini,
      awardByName: "Dustin Ramesh",
    },
  ];

  // Card Template for PrimeReact
  const cardTemplate = (item: any) => {
    return (
      <div
        style={strangerToggle ? { background: "#ffffffc9" } : {}}
        className={styles.AwardsCard}
      >
        <div
          className={`${styles.AwardsNameContainer} ${
            strangerToggle
              ? "AwardsNameContainerNormalWorld"
              : "AwardsNameContainer"
          }`}
        >
          {item?.award}
        </div>
        <div className={styles.AwardsImageAndNameContainer}>
          <div className={styles.imageContainer}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.NameContainer}>
            <div
              style={strangerToggle ? { color: "#1e2f73" } : {}}
              className={styles.name}
            >
              {item?.name}
            </div>
            <div
              style={strangerToggle ? { color: "#109d8e" } : {}}
              className={styles.title}
            >
              {item?.title}
            </div>
          </div>
        </div>

        <div
          style={
            strangerToggle
              ? { background: "#ffffffc9", color: "#1e3284e6" }
              : {}
          }
          className={styles.discription}
        >
          {item.discription}
        </div>
        <div className={styles.AwardedByContainer}>
          <div style={strangerToggle ? { color: "#1e3284e6" } : {}}>
            by {item?.awardByName}
          </div>
          <div className={styles.awardedByImageContainer}>
            <img src={item?.awardBy}></img>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className={`${styles.AwardsContainer} fadeRight ${
        visible ? "visible" : ""
      }`}
    >
      <h2
        className={`${commonHeadingSideBarStyle.heading} ${
          strangerToggle ? "normalWorlHeading" : "heading"
        }`}
      >
        Awards
      </h2>
      <Carousel
        value={strangerToggle ? NormalWorldAwardsData : AwardsData}
        itemTemplate={cardTemplate}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={4000}
        showNavigators={true}
        showIndicators={true}
        className={styles.NewsCarousel}
      />
    </div>
  );
};

export default Leaves;
