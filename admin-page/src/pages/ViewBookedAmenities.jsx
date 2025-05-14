import React, { useState, useEffect } from 'react';

const ViewBookedAmenities = () => {
  const [bookedAmenities, setBookedAmenities] = useState([]);

  useEffect(() => {
    // Assuming the booked amenities are saved in local storage
    const storedBookings = JSON.parse(localStorage.getItem('bookedAmenities')) || [];
    setBookedAmenities(storedBookings);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Booked Amenities</h2>
      {bookedAmenities.length > 0 ? (
        <ul>
          {bookedAmenities.map((booking, index) => (
            <li key={index}>
              <strong>Amenity:</strong> {booking.amenityName}
              <br />
              <strong>Booked By:</strong> {booking.userName}
              <br />
              <strong>Booking Time:</strong> {booking.bookingTime}
              <br />
              <strong>Booking Status:</strong> {booking.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default ViewBookedAmenities;
