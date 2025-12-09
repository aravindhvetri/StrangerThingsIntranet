import * as React from "react";
import { IToaster } from "./interface";

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
