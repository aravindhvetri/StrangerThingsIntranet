import * as React from "react";
import { IToaster } from "./interface";
import { useEffect, useState, useRef } from "react";
import "../External/style.css";

//Common Toast Notification setups:
export const toastNotify = (item: IToaster) => {
  return (
    <div className="flex flex-row align-items-center toastContainer">
      <div className={item.ClsName}>
        {
          <>
            {item.image ? (
              <img
                src={item.image}
                alt="toast icon"
                style={{ width: 40, height: 40 }}
              />
            ) : (
              <i className={`pi ${item.iconName}`}></i>
            )}
          </>
        }
      </div>
      <div>
        <div className="toast-heading">{item.type}</div>
        <div className="toast-message">{item.msg}</div>
      </div>
    </div>
  );
};

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 } // 20% visible then trigger
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};
