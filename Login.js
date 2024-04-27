import React, { useState } from "react";
import axios from 'axios';
import Alert from "./Alert";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [admin, setAdmin] = useState(false);
    const [client, setClient] = useState(false);

    function handleSubmit() {
        axios.post('http://localhost:8081/check', {
            un: username,
            pw: password
        }).then((response) => {
            if (response.data !== "fail") {
                alert(`Congrats!! you are signed in..as ${response.data.role}`);
                <Alert/>
                var role= response.data.role;
                if(role==="admin"){
                    setAdmin(true);
                }
                if(role==="client"){
                    setClient(true);
                }
            } else {
                setErrorMessage("Invalid username or password");
            }
        }).catch((error) => {
            setErrorMessage("An error occurred. Please try again later.");
            console.error(error);
        });
    }

    return (
        <>
            <div className="background" style={{ background: "url('https://cache.marriott.com/marriottassets/marriott/FLLOF/fllof-view-0051-hor-clsc.jpg?interpolation=progressive-bilinear&')", backgroundSize: "cover", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" , repeat:"none"}}>
                <div className="form-container" style={{ backgroundColor: "rgba(255, 255, 255, 0)", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", position: "relative" }}>
                    <label htmlFor="name" style={{ marginBottom: "5px", fontSize: "28px", fontWeight: "bold" }}>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="un"
                        id="idun"
                        aria-describedby="nameHelp"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: "10px", marginBottom: "10px", width: "90%", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", fontWeight: "bold" }}
                    />
                    <label htmlFor="password" style={{ marginBottom: "5px", fontSize: "28px", fontWeight: "bold" }}>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="pw"
                        id="idpw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: "10px", marginBottom: "10px", width: "90%", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", fontWeight: "bold" }}
                    />

                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        style={{ width: "100%", padding: "12px", backgroundColor: "#007bff", border: "none", borderRadius: "4px", color: "#fff", cursor: "pointer", transition: "background-color 0.3s", fontSize: "18px", fontWeight: "bold" }}
                    >
                        Login
                    </button>
                </div>
                <div className="view-controls" style={{ position: "absolute", bottom: "20px", textAlign: "center"}}>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    {admin && 
                        <a href='/admin'><button className="access-btn">View Admin Controls</button></a>
                    }
                    {client &&
                        <a href='/client'><button className="access-btn">View Hotels</button></a>
                    }
                </div>
            </div>
        </>
    );
}
