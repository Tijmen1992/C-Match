import React, { useState } from "react";
import data from "../../assets/data.json";
import "./Calendar.css";

const Calendar = () => {
  const [available, setAvailable] = useState(false);

  let dates = [];

  for (let i = 1; i <= 28; i++) {
    dates.push({ day: i });
  }

  return (
    <div className="calendar">
      <h3 className="calendar__month">Februari</h3>
      {dates.map((date) => (
        <a
          href="#"
          className={`calendar__day ${available ? "available" : ""}`}
        >
          <span>{date.day}</span>
        </a>
      ))}
    </div>
  );
};

export default Calendar;
