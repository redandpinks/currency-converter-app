import React, { useState } from 'react';

function ReservationCreator({ addReservation }) {
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    timeSlot: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails({ ...reservationDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reservationDetails.name && reservationDetails.timeSlot) {
      addReservation(reservationDetails);
      setReservationDetails({ name: '', timeSlot: '' });
    }
  };

  return (
    <div>
      <h3>Make a Reservation</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={reservationDetails.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <select
          name="timeSlot"
          value={reservationDetails.timeSlot}
          onChange={handleChange}
        >
          <option value="">Select a time slot</option>
          <option value="9:00am - 12:00pm">9:00am - 12:00pm</option>
          <option value="12:00pm - 3:00pm">12:00pm - 3:00pm</option>
          <option value="3:00pm - 6:00pm">3:00pm - 6:00pm</option>
        </select>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationCreator;