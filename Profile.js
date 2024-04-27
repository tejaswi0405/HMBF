import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/show").then((response) => {
      setResult(response.data);
    });
  }, []);

  return (
    <>
      <style>
        {`
          body {
            background-image: url('https://static.vecteezy.com/system/resources/previews/021/104/573/non_2x/transparent-gradient-fade-free-png.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          table {
            margin: 0 auto; /* Center the table */
            border-collapse: collapse; /* Collapse table borders */
            width: 80%; /* Set table width */
          }
          th, td {
            border: 2px solid black; /* Set border for cells */
            padding: 10px; /* Add padding to cells */
            text-align: center; /* Center align text */
          }
          th {
            background-color: #2196F3; /* Set background color for table header */
            color: white; /* Set text color for table header */
          }
          tr:hover {
            background-color: #f2f2f2; /* Add hover effect */
          }
        `}
      </style>

      <div className="bg-blue-500 min-h-screen flex justify-center items-center">
        <div>
          <h2 className="text-white text-center">The data is given below</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {result &&
                result.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
