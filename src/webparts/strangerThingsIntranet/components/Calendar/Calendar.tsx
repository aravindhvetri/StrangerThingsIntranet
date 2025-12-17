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
import { Calendar as PrimeCalendar } from "primereact/calendar";
import commonHeadingSideBarStyle from "../PartyMembers/PartyMembers.module.scss";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  // sample events data
  const eventsData = [
    {
      date: "2025-12-19",
      title: "New Hire Orientation",
      time: "3:00 PM - 4:00 PM",
      type: "Get-together",
    },
    {
      date: "2025-12-16",
      title: "Demo Call Org Level",
      time: "12:00 PM - 12:30 PM",
      type: "Get-together",
    },
    {
      date: "2025-12-17",
      title: "Month End Review",
      time: "11:00 AM - 12:00 PM",
      type: "Meeting",
    },
    {
      date: "2025-12-28",
      title: "Month End Review",
      time: "11:00 AM - 12:00 PM",
      type: "Meeting",
    },
  ];

  const selectedISO = selectedDate
    ? `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
    : "";

  const filteredEvents = eventsData.filter((e) => e.date === selectedISO);
  console.log(filteredEvents, selectedDate, "aari");

  const dateTemplate = (date: any) => {
    const iso = `${date.year}-${String(date.month + 1).padStart(
      2,
      "0"
    )}-${String(date.day).padStart(2, "0")}`;

    const hasEvent = eventsData.some((e) => e.date === iso);

    return <div className={hasEvent ? styles.hasEvent : ""}>{date.day}</div>;
  };

  return (
    <div className={styles.calendarWrapper}>
      <h2 className={`${commonHeadingSideBarStyle.heading} heading`}>
        Calendar Events
      </h2>
      <PrimeCalendar
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.value as Date)}
        inline
        dateTemplate={dateTemplate}
        showOtherMonths
      />

      <div className={styles.eventsSection}>
        {filteredEvents.length === 0 && (
          <p className={styles.noEvents}>No events for this date</p>
        )}

        {filteredEvents.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.dateBox}>
              <span>{new Date(event.date).getDate()}</span>
              <small>
                {new Date(event.date).toLocaleString("en-US", {
                  month: "short",
                })}
              </small>
            </div>

            <div className={styles.eventInfo}>
              <h4>{event.title}</h4>
              <p>{event.time}</p>
            </div>

            <span className={styles.badge}>{event.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
