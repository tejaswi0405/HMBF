import React, { useState } from 'react';
import './room.css'; // Import CSS file for styling
import axios from 'axios';

function Book() {

    const [name, setName]= useState('');
    const [age, setAge]= useState('');
    const [address , setAddress]= useState('');
    const [aadhaarCard, setAadhaarCard]= useState('');
    const [email , setEmail]= useState('');
    const [roomType, setRoomType] = useState('');
    const [startDate, setStartDate]= useState('');
    const [endDate, setEndDate]= useState('');


//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     address: '',
//     aadhaarCard: '',
//     email: '',
//     roomType: 'Deluxe',
//     startDate: '',
//     endDate: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking submission logic here
    axios.post('http://localhost:8081/book',{
        name,
        age,
        address,
        aadhaarCard,
        email,
        roomType,
        startDate,
        endDate
    }).then((response)=>{
        console.log(response.data);
    })
    // console.log(formData);
  };

  return (
    <div className="booking-form-container">
      <h2>Hotel Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            // value="name"
            onChange={(e)=>setName(e.target.value)}
            // required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            // value="age"
            onChange={(e)=>setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            // value="address"
            onChange={(e)=>setAddress(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Aadhaar Card Number:
          <input
            type="text"
            name="aadhaarCard"
            // value="aadhaarCard"
            onChange={(e) => {
                setAadhaarCard(e.target.value);
              }}
            required
          />
        </label>
        <br />
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            // value="email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Room Type:
          <select
            name="roomType"
            value={roomType}
            onChange={(e)=>setRoomType(e.target.value)}
            required
          >
            <option value="">select-type</option>
            <option value="deluxe">Deluxe</option>
            <option value="non-Deluxe">Non-Deluxe</option>
          </select>
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            // value="startDate"
            onChange={(e)=>setStartDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            // value="endDate"
            onChange={(e)=>setEndDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Book;
