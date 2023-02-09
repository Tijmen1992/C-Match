import React, { useState } from "react";

import "./Calendar.css";

const Calendar = () => {
  const [available, setAvailable] = useState(false);

  const dates = [
    { day: 1, available: true },
    { day: 2, available: false },
    { day: 3, available: true },
  ];

  return (
    <div className="calendar">
      <h3 className="calendar__month">Februari</h3>
      {dates.map((date) => (
        <a
          href="#"
          className={`calendar__day ${date.available ? "available" : ""}`}
        >
          <span>{date.day}</span>
        </a>
      ))}
    </div>
  );
};

export default Calendar;
