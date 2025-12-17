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

const AllNews = () => {
  const newsData = [
    {
      author: "Sabina Saetgareeva",
      date: "July 30 2024",
      title: "Building Relationships with Partners and Communities",
      comments: 0,
      likes: 4,
      image:
        "https://images.pexels.com/photos/4355348/pexels-photo-4355348.jpeg",
    },
    {
      author: "Andrew Calston (Admin)",
      date: "January 4 2024",
      title: "Building Relationships with Partners and Communities",
      comments: 0,
      likes: 2,
      image:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    },
    {
      author: "Andrew Calston",
      date: "January 4 2024",
      title: "Building Relationships with Partners and Communities",
      comments: 0,
      likes: 0,
      image: "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg",
    },
    {
      author: "Sarah Wilson",
      date: "August 12 2024",
      title:
        "How Our Team is Transforming Collaboration and web based collaboration",
      comments: 1,
      likes: 3,
      image:
        "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg",
    },
  ];

  // Card Template for PrimeReact
  const cardTemplate = (item: any) => {
    return (
      <div className={styles.NewsCard}>
        <div className={styles.ImageBox}>
          <img src={item.image} alt={item.title} />
        </div>

        <div className={styles.AuthorRow}>
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
    <div className={styles.AllNewsSection}>
      <h2 className="heading">All news</h2>
      <Carousel
        value={newsData}
        itemTemplate={cardTemplate}
        numVisible={3} // show 3 cards
        numScroll={1} // move one card at a time
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
