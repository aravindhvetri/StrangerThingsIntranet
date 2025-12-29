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
import styles from "./TopProject.module.scss";
import { Chart } from "react-google-charts";
import "../../../../External/style.css";
import { useScrollReveal } from "../../../../CommonServices/CommonTemplates";

const TopProjects = ({ strangerToggle }: any) => {
  const { ref, visible } = useScrollReveal();
  const salesData = [
    ["Month", "Sales"],
    ["January", 150],
    ["February", 200],
    ["March", 300],
    ["April", 500],
    ["May", 180],
    ["June", 280],
  ];

  const browserData = [
    ["Browser", "Users"],
    ["Chrome", 65],
    ["Firefox", 60],
    ["Safari", 80],
    ["Edge", 78],
    ["Opera", 50],
  ];

  const chartOptions = {
    curveType: "function",
    legend: { position: "bottom", textStyle: { color: "#ffffff" } },
    colors: ["#4e73df"],
    animation: {
      startup: true,
      duration: 1500,
    },
    backgroundColor: "transparent",
    hAxis: {
      textStyle: { color: "#ffffff" },
    },
    vAxis: {
      textStyle: { color: "#ffffff" },
    },
    titleTextStyle: {
      color: "#ffffff",
    },
  };

  const barOptions = {
    legend: { position: "none", textStyle: { color: "#ffffff" } },
    colors: ["#4e73df", "#1cc88a", "#f6c23e", "#e74a3b", "#8e44ad"],
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    backgroundColor: "transparent",
    hAxis: {
      textStyle: { color: "#ffffff" },
    },
    vAxis: {
      textStyle: { color: "#ffffff" },
    },
    titleTextStyle: {
      color: "#ffffff",
    },
  };

  const topCard = [
    {
      title: "Total Sales",
      count: "1,234",
    },
    {
      title: "New Users",
      count: "200",
    },
    {
      title: "Active Sessions",
      count: "89",
    },
  ];
  return (
    <div
      ref={ref}
      className={`${styles.topProjectsContainer} fadeLeft ${
        visible ? "visible" : ""
      }`}
    >
      <h2
        className={strangerToggle ? "normalWorlHeading" : "heading"}
        style={{ marginBottom: "0" }}
      >
        Latest status
      </h2>
      {/* Cards */}
      <div className={styles.cards}>
        {topCard.map((items, index) => (
          <div key={index} className={styles.card}>
            <h4>{items?.title}</h4>
            <p>{items?.count}</p>
            <span className={styles.ribbon}>TRUCS</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className={styles.charts}>
        <div className={`${styles.chart} chart`}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="300px"
            data={salesData}
            options={chartOptions}
          />
        </div>
        <div className={`${styles.chart} chart`}>
          <Chart
            chartType="BarChart"
            width="100%"
            height="300px"
            data={browserData}
            options={barOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
