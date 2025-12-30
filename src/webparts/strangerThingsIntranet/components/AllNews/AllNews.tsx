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
import styles from "./AllNews.module.scss";
import { Carousel } from "primereact/carousel";
import "../../../../External/style.css";
import { useScrollReveal } from "../../../../CommonServices/CommonTemplates";

const AllNews = ({ strangerToggle }: any) => {
  const { ref, visible } = useScrollReveal();
  const anomaly = require("../../../../External/anomaly.jpg");
  const sightingReport = require("../../../../External/MonsterSightingReport.jpg");
  const firstShadow = require("../../../../External/firstShadow.jpg");
  const shadowTeam = require("../../../../External/shadowTeam.jpg");
  const menu = require("../../../../External/menu.jpg");
  const teamWorkshop = require("../../../../External/teamWorkshop.jpg");
  const employeeReg = require("../../../../External/employeeReg.jpg");
  const ourTeam = require("../../../../External/ourTeam.jpg");
  const newsData = [
    {
      author: "Aravindh Aari",
      date: "July 30 2025",
      title:
        "Strange dimensional shifts have been observed near the Shadow Bazaar. Stay alert!",
      comments: 0,
      likes: 4,
      image: anomaly,
    },
    {
      author: "Ramesh (Admin)",
      date: "January 4 2025",
      title:
        "The patrol team has reported sightings of unknown creatures in the northern tunnels.",
      comments: 0,
      likes: 2,
      image: sightingReport,
    },
    {
      author: "kali",
      date: "January 20 2025",
      title:
        "All members are invited to the secret gathering under the full moon to strategize next moves.",
      comments: 0,
      likes: 0,
      image: firstShadow,
    },
    {
      author: "Kali Aari",
      date: "August 12 2025",
      title:
        "How Our shadow team is Transforming Collaboration and shadow based collaboration",
      comments: 1,
      likes: 3,
      image: shadowTeam,
    },
  ];

  const NormalWorldnewsData = [
    {
      author: "Ramesh",
      date: "July 30 2024",
      title:
        "Discover the latest healthy and delicious options now available at the cafeteria.",
      comments: 0,
      likes: 4,
      image: menu,
    },
    {
      author: "Kali (Admin)",
      date: "January 4 2024",
      title:
        "Join us this Friday for a workshop on productivity and collaboration techniques.",
      comments: 0,
      likes: 2,
      image: teamWorkshop,
    },
    {
      author: "Aravindh Aari",
      date: "January 28 2025",
      title:
        "Celebrating the achievements of our outstanding employees this month",
      comments: 0,
      likes: 0,
      image: employeeReg,
    },
    {
      author: "Ramesh Aari",
      date: "August 02 2025",
      title:
        "How Our Team is Transforming Collaboration and web based collaboration",
      comments: 1,
      likes: 3,
      image: ourTeam,
    },
  ];

  // Card Template for PrimeReact
  const cardTemplate = (item: any) => {
    return (
      <div
        style={
          strangerToggle
            ? {
                background:
                  "linear-gradient(var(--white), rgba(0, 0, 0, 0.418))",
              }
            : {}
        }
        className={styles.NewsCard}
      >
        <div className={styles.ImageBox}>
          <img src={item.image} alt={item.title} />
        </div>

        <div
          style={strangerToggle ? { color: "white" } : {}}
          className={styles.AuthorRow}
        >
          {item.author}, {item.date}
        </div>

        <div className={styles.Title}>{item.title}</div>

        <div className={styles.FooterRow}>
          <span>Comments ({item.comments})</span>
          <span>Likes ({item.likes})</span>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className={`${styles.AllNewsSection} fadeUp ${visible ? "visible" : ""}`}
    >
      <h2 className={strangerToggle ? "normalWorlHeading" : "heading"}>
        All news
      </h2>
      <Carousel
        value={strangerToggle ? NormalWorldnewsData : newsData}
        itemTemplate={cardTemplate}
        numVisible={3}
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

export default AllNews;
