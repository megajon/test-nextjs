'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div id="date-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<input readonly />}
      />
    </div>
  );
}
