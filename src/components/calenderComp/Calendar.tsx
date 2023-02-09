import React, { EventHandler } from "react";
import data from "../../assets/data.json";
import "./Calendar.css";

const Calendar = () => {
  // const [available, setAvailable] = useState(false);

  let dates: any = [];

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

  const clickHandler = (e: any) => {
    e.preventDefault();
    let clickedDate = e.target.innerHTML;
    let availableDates = data.map((data) => data.Arnhem[2][clickedDate]);
  };

  return (
    <div className="calendar">
      <h3 className="calendar__month">Februari</h3>
      {dates.map((date) => (
        <a
          href="#"
          className={`calendar__day ${date.available ? "available" : ""}`}
          onClick={clickHandler}
        >
          <span>{date.day}</span>
        </a>
      ))}
    </div>
  );
};

export default Calendar;
