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
import styles from "./Footer.module.scss";
// import { useEffect, useRef } from "react";

const Footer = ({ strangerToggle }: any) => {
  return (
    <div
      style={strangerToggle ? { background: "#1e328486" } : {}}
      className={styles.section}
    >
      <div className={styles.container}>
        @ 2025 Stranger Things. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
