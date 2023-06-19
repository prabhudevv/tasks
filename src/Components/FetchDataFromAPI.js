import React, { useState, useEffect } from "react";
export default function FetchDataFromAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div>
      <h3>API Data:</h3>
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <p>Name: {user.name}</p> <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </div>
        );
      })}
    </div>
  );
}