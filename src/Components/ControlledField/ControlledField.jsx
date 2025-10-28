import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    if(password.length < 6) {
        setError("Password must be at least 6 characters"),
        setPassword("")
    }

  };

  const handlePasswordOnchange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);

    // check password length/error/validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    }
    else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required id="" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnchange}
          defaultValue={password}
          required
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
