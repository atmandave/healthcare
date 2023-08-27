import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss'; // Import the CSS file

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
      {selectedDate && (
        <p>
          Selected Date: {selectedDate.toLocaleDateString()} (Day: {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })})
        </p>
      )}
    </div>
  );
};

export default Calendar;
