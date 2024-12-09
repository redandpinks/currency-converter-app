import './App.css';
import React, { useState } from 'react';
import ReservationBanner from './components/ReservationBanner'; // Import Banner
import ReservationCreator from './components/ReservationCreator'; // Import Creator
import ReservationRow from './components/ReservationRow'; // Import Row

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation]);
  };

  return (
    <div>
      <ReservationBanner /> {/* Render the Banner */}
      <ReservationCreator addReservation={addReservation} />
      <div>
        {reservations.map((reservation, index) => (
          <ReservationRow key={index} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}

export default App;
