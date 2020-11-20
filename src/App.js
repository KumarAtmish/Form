import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [fullName, setFullName] = useState();
  const [lastNameNew, setLastNameNew] = useState();

  const handleInputEvent = (event) => {
    setName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };

  const handleInputEvenTwo = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {fullName} {lastNameNew}
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleInputEvent}
          />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            value={lastName}
            onChange={handleInputEvenTwo}
          />
          <button type="submit">Sumit</button>
        </div>
      </form>
    </div>
  );
}
