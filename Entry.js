import React, { useState } from "react";
import axios from "axios";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Entry() {

    const [roomType, setRoomType] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [vacancy, setVacancy] = useState("");
    const [roomId, setRoomId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            roomType,
            size,
            price,
            vacancy,
            roomId
        });
        axios.post('http://localhost:8081/entry', {
            roomType,
            size,
            price,
            vacancy,
            roomId
        }).then((response) => {
            console.log(response.data);
        })
        toast("Room Added successfully");
    }

    function renderRoomImage() {
        if (roomType === "deluxe") {
            return <img src="https://pmcaonline.org/wp-content/uploads/2019/10/hotel-1068x801.jpg" alt="Deluxe Room" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else if (roomType === "non-deluxe") {
            return <img src="https://th.bing.com/th/id/OIP.I9OBthj87ntToaiqIW9ZigAAAA?rs=1&pid=ImgDetMain" alt="Non-Deluxe Room" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else {
            return null;
        }
    }

    return (
        <>
            <style>
                {`
                body {
                    background-image: url('https://static.vecteezy.com/system/resources/previews/021/103/430/original/transparent-gradient-fade-free-png.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .container {
                    background-color: transparent;
                }
                `}
            </style>

            <div className="container">
                <div className="image" style={{ maxWidth: '100%', height: 'auto' }}>
                    {renderRoomImage()}
                </div>
                <div className="content">
                    <div className="type">
                        <p>Room Type
                            <select
                                className="form-control"
                                name="room"
                                id="room"
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                            >
                                <option value="">Select Room type</option>
                                <option value="deluxe">Deluxe</option>
                                <option value="non-deluxe">Non-deluxe</option>
                            </select>
                        </p>
                    </div>
                    <p>Room Id: <input type="number" className="inputbox" value={roomId} onChange={(e) => setRoomId(e.target.value)} /> </p>
                    <p>Price: <input type="number" className="inputbox" value={price} onChange={(e) => setPrice(e.target.value)} /></p>
                    <p>Size: <input type="number" className="inputbox" value={size} onChange={(e) => setSize(e.target.value)} /></p>
                    <p>Vacancy: <input type="number" className="inputbox" value={vacancy} onChange={(e) => setVacancy(e.target.value)} /></p>
                    <p id="description">You are viewing a room. It can accommodate guests. The price is according per night</p>
                    <button className="book-btn" onClick={handleSubmit}>Add Room</button>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}
