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

const Leaves = () => {
  const AwardsData = [
    {
      award: "Elite Excellence",
      name: "Meghan Goyette",
      title: "Assurance Specialist",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      awardBy:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      awardByName: "Sabina Saetgareeva",
    },
    {
      award: "Silvar Spark",
      name: "Jodie Palmer",
      title: "Product Manager",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      awardBy:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      awardByName: "Sabina Saetgareeva",
    },
    {
      award: "Elite Excellence",
      name: "Meghan Goyette",
      title: "Assurance Specialist",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      awardBy:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=600&q=80",
      awardByName: "Sabina Saetgareeva",
    },
    {
      award: "Elite Excellence",
      name: "Meghan Goyette",
      title: "Assurance Specialist",
      discription:
        "Employee recognition is vital in creating a positive work environment. Giving recognition awards can significantly boost morale, enhance job satisfaction, and increase employee engagement. When employees feel appreciated, they are more likely to stay motivated, productive, and loyal to the company, The wording on these awards plays a key role in expressing genuine appreciation.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      awardBy:
        "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=600&q=80",
      awardByName: "Sabina Saetgareeva",
    },
  ];

  // Card Template for PrimeReact
  const cardTemplate = (item: any) => {
    return (
      <div className={styles.AwardsCard}>
        <div className={`${styles.AwardsNameContainer} AwardsNameContainer`}>
          {item?.award}
        </div>
        <div className={styles.AwardsImageAndNameContainer}>
          <div className={styles.imageContainer}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.NameContainer}>
            <div className={styles.name}>{item?.name}</div>
            <div className={styles.title}>{item?.title}</div>
          </div>
        </div>

        <div className={styles.discription}>{item.discription}</div>
        <div className={styles.AwardedByContainer}>
          <div>by {item?.awardByName}</div>
          <div className={styles.awardedByImageContainer}>
            <img src={item?.awardBy}></img>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.AwardsContainer}>
      <h2 className={`${commonHeadingSideBarStyle.heading} heading`}>Awards</h2>
      <Carousel
        value={AwardsData}
        itemTemplate={cardTemplate}
        numVisible={1} // show 1 card
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

export default Leaves;
