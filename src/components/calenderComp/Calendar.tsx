import React from "react";
import data from "../../assets/data.json";
import "./Calendar.css";

const Calendar = () => {
  // const [available, setAvailable] = useState(false);

  let dates = [];

  let availableDates = data.map((data) => data.Arnhem[2]);
  function gatherTopLevelNumbers(obj: any): string[] {
    return Object.keys(obj);
  }

  let dateArray = gatherTopLevelNumbers(availableDates[0]);
  let numberArray = [];
  for (var i = 0; i < dateArray.length; i++) {
    numberArray.push(parseInt(dateArray[i]));
  }

  for (let i = 1; i <= 28; i++) {
    dates.push({ day: i, available: numberArray.includes(i) });
  }
  console.log(dates);
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
