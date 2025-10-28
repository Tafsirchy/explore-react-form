import React, { useRef } from "react";

const UnControlledField = () => {
  const emailhref = useRef("");
  const passwordhref = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emailhref.current.value);
    const email = emailhref.current.value;
    console.log(email);
    const password = passwordhref.current.value;
    console.log(password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailhref}
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <br />
        <input ref={passwordhref} type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
