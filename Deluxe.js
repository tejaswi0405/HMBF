import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import './room.css'; // Import CSS file for styling
import Book from './Book';

export default function Deluxe() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/room')
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setRooms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching room data:', error);
      });
  }, []);

  return (
    <div className="rooms-container">
      {rooms.length > 0 ? (
        rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src="https://pmcaonline.org/wp-content/uploads/2019/10/hotel-1068x801.jpg" alt="Room" className="room-photo" />
            <div className="room-details">
              <div className="detail">Price: {room.price}</div>
              <div className="detail">Vacancy: {room.vacancy}</div>
              <div className="detail">Size: {room.size}</div>
              <a href='/book' element={<Book/>}><button className="book-button">Book Room</button></a> 
            </div>
          </div>
        ))
      ) : (
        <div>There are no rooms available.</div>
      )}
    </div>
  );
}
