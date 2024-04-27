import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function View() {
  const [result, setResult] = useState(null);

  function handleDelete(event){
    axios.delete('http://localhost:8081/delete',{params: {
      "id": event.currentTarget.getAttribute("roomid"),
    }}).then((response) => {
      console.log(response.data);
    })
    toast("Room Removed successfully");
  }

  useEffect(() => {
    axios.get('http://localhost:8081/room').then((response) => {
      console.log(JSON.stringify(response.data));
      setResult(response.data);
    });
  }, []);

  // Object mapping room types to image URLs
  const roomTypeImages = {
    deluxe: 'https://pmcaonline.org/wp-content/uploads/2019/10/hotel-1068x801.jpg',
    non_deluxe: 'https://th.bing.com/th/id/OIP.I9OBthj87ntToaiqIW9ZigAAAA?rs=1&pid=ImgDetMain',
    suite: 'https://example.com/suite-room-image.jpg',
  };

  return (
    <>
      <style>
        {`
          body {
            background-image: url('https://lh3.googleusercontent.com/proxy/b0PyrTKx2U4Q-lsdUBgNWNvLqbzYru77XH1_utXcGKQp8pe8KM9rX28e5WO3VOX82nhLKFK7q73srYVTZCtpupbbTe_XnsvWXKgJXbOkGP7iUrWgCBIDdtu2WFvDDmBdzoaCbez2B6m6hGFxMf4S4c53l8Ik=s0-d');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          .container {
            background-color: #ffffff; /* Set the container background color to white */
            padding: 2rem; /* Add some padding to the container */
            margin-top: 2rem; /* Adjust the margin-top as needed */
          }
        `}
      </style>

      <div>
        {result ? (
          result.map((room) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                className="card text-white bg-info mb-3"
                style={{ maxWidth: '840px', maxHeight: '600px' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={room.roomType ? roomTypeImages[room.roomType.toLowerCase().replace('-', '_')] : ""}
                      className="card-img"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{room.roomType ? room.roomType.toUpperCase() : ""}</h5>
                      <h5 className="card-title"><b>Room ID: </b>{room.roomId}</h5>
                      <h5 className="card-title"><b>Price:</b> {room.price} INR</h5>
                      <h5 className="card-title"><b>Vacancy: </b>{room.vacancy}</h5>
                      <p className="card-text">
                        The room you are viewing can be accommodated by{' '}
                        {room.size} persons
                      </p>
                    </div>
                    <button type="button" id="" class="btn btn-dark" style={{marginLeft:'7rem', marginBottom:'1rem'}}
                      onClick={handleDelete} roomid={room.roomId}
                    >Remove</button>
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>There is no data to display...</div>
        )}
      </div>
    </>
  );
}
