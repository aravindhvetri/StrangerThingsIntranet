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
import styles from "./Documents.module.scss";
import "../../../../External/style.css";
import { useScrollReveal } from "../../../../CommonServices/CommonTemplates";

const Documents = ({ strangerToggle }: any) => {
  const { ref, visible } = useScrollReveal();
  const requestForm = require("../../../../External/profiles.png");
  const applications = require("../../../../External/survey-form.png");
  const templates = require("../../../../External/layout.png");
  const projects = require("../../../../External/projectManagement.png");
  const employeeHandBook = require("../../../../External/strategy.png");
  const marketing = require("../../../../External/policyProgram.png");
  const Documents = [
    {
      imageUrl: requestForm,
      documentName: "Request forms",
    },
    {
      imageUrl: applications,
      documentName: "Applications",
    },
    {
      imageUrl: templates,
      documentName: "Templates",
    },
    {
      imageUrl: projects,
      documentName: "Projects",
    },
    {
      imageUrl: employeeHandBook,
      documentName: "Employee handbook",
    },
    {
      imageUrl: marketing,
      documentName: "Marketing collateral",
    },
  ];
  return (
    <div
      ref={ref}
      className={`${styles.DocumentsContainer} fadeRight ${
        visible ? "visible" : ""
      }`}
    >
      <h2
        className={`${styles.heading} ${
          strangerToggle ? "normalWorlHeading" : "heading"
        }`}
      >
        Party rules
      </h2>
      <div className={styles.DocumentSection}>
        {Documents.map((items, i) => (
          <div
            style={strangerToggle ? { background: "#ffffffc9" } : {}}
            className={styles.DocumentCard}
            key={i}
          >
            <div
              style={strangerToggle ? { background: "#1e3284e6" } : {}}
              className={styles.ImageContainer}
            >
              <img src={items?.imageUrl}></img>
            </div>
            <div
              style={strangerToggle ? { color: "#1e3284e6" } : {}}
              className={styles.documentName}
            >
              {items?.documentName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
