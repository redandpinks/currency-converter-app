import React from 'react';

function ReservationRow({ reservation }) {
  return (
    <div>
      <p><strong>Name:</strong> {reservation.name}</p>
      <p><strong>Timeslot:</strong> {reservation.timeSlot}</p>
    </div>
  );
}

export default ReservationRow;
