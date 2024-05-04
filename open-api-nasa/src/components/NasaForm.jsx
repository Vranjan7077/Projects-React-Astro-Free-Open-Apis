/* eslint-disable react/prop-types */

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NasaForm = ({ fetchData }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClearDate = () => {
    setSelectedDate(null);
  };

  const handleButtonClick = () => {
    if (!selectedDate) {
      return;
    }
    const formattedDate = selectedDate.toISOString().split("T")[0];
    fetchData(formattedDate);
  };

  return (
    <section className="nasa-form">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
      />
      <button
        type="button"
        name="button"
        className="search"
        onClick={handleButtonClick}
        disabled={!selectedDate}
      >
        Search
      </button>
      <button
        type="button"
        name="button"
        className="reset"
        onClick={handleClearDate}
      >
        Clear
      </button>
    </section>
  );
};

export default NasaForm;
