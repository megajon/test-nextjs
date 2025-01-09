'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    let inputElements = document.getElementsByTagName("input")
    let datePicker = inputElements[0]
    datePicker.setAttribute("readonly", "")
  }, [])

  return (
    <div id="date-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
