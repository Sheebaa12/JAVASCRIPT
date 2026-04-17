import React, { useState } from "react";
export default function App() {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    {
      name: "Christian",
      email: "chris@go.com",
      phone: "7418529639",
      company: "Hooks Group"
    },
    {
      name: "Ranveer",
      email: "raneee@go.com",
      phone: "7894561233",
      company: "Diva Group"
    },
    {
      name: "Archana",
      email: "achuu@go.com",
      phone: "753869421",
      company: "Aasique"
    }
  ]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortAZ = () => {
    const sorted = [...users].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sorted);
  };

  const sortZA = () => {
    const sorted = [...users].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setUsers(sorted);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h1>User Directory</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search user by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            margin: "5px"
          }}
        />
        <button
          onClick={sortAZ}
          style={{
            padding: "8px",
            margin: "5px"
          }}
        >
          A-Z
        </button>
        <button
          onClick={sortZA}
          style={{
            padding: "8px",
            margin: "5px"
          }}
        >
          Z-A
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px"
        }}
      >
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "220px",
              textAlign: "left"
            }}
          >
            <h3>{user.name}</h3>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
            <p>
              <b>Company:</b> {user.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}