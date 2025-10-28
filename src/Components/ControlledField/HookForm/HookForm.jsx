import React from "react";
import useInputField from "../../../Hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />
        <br />
        <input
          defaultValue={email}
          onChange={emailOnChange}
          type="email"
          name=""
          id=""
        />
        <br />
        <input
          defaultValue={password}
          onChange={passwordOnChange}
          type="password"
          name=""
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
