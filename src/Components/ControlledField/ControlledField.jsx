import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    if (password.length < 6) {
      setError("Password must be at least 6 characters"), setPassword("");
    }
  };

  const handleNameOnChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmailOnChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);

    // check password length/error/validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleNameOnChange} defaultValue={name} />
        <br />
        <input
          onChange={handleEmailOnChange}
          defaultValue={email}
          type="email"
          name="email"
          placeholder="Email"
          required
          id=""
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
