import * as React from "react";
import "../../../../External/style.css";
import styles from "./NewJoiners.module.scss";

const NewJoiners = () => {
  const newJoinersData = [
    {
      id: 1,
      name: "Teagan",
      role: "Front-end Developer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Nick",
      role: "Agency Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Lisa",
      role: "Front-end Developer",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Sharon",
      role: "People & Culture",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Dan",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Phil",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      name: "Jodie Palmer",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      name: "Jasmine",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className="heading">Organizers</h2>

      <div className={styles.grid}>
        {newJoinersData.map((user, index) => (
          <div
            key={user.id}
            className={`${styles.card} ${
              index % 2 === 0 ? styles.offsetUp : styles.offsetDown
            }`}
          >
            <div className={styles.imageWrap}>
              <img src={user.image} alt={user.name} />
            </div>

            <div className={styles.info}>
              <span className={styles.name}>{user.name}</span>
              <span className={styles.role}>{user.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewJoiners;
