import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const [role, setRole] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            role: data.get('role')
        });
        //the request can be put get delete update
        //we will be using post
        //1st param is address, and 2nd param is data
        axios.post('http://localhost:8081/insert',{
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            role: data.get('role'),
        }).then((response)=>{
            console.log(response.data); //response is in dictionary format so we hav to parse it to 
        })
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }

    return (
        <>
        <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous"
            ></link>
            <script
                src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                crossOrigin="anonymous"
            ></script>
            <h3 align="center">Register with us</h3>
            <div className="page">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                            className="form-control"
                            name="role"
                            id="role"
                            defaultValue={0}
                            onChange={handleRoleChange}
                            value={role}
                        >
                            <option value={0}>Select Role</option>
                            <option value="client">Client</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="nameHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            aria-describedby="emailHelp"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                        />
                    </div>
                    
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
