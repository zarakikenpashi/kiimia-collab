import { useState } from "react";
import { DayPicker } from "react-day-picker";

export const MyDatePicker = () => {
  const [date, setDate] = useState();
  return (
    <>
      <button popoverTarget="rdp-popover" className="input input-border h-full" style={{ anchorName: "--rdp" }}>
        {date ? date.toLocaleDateString() : "Select a date"}
      </button>
      <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" }}>
        <DayPicker className="react-day-picker" mode="single" selected={date} onSelect={setDate} />
      </div>
    </>
  );
}