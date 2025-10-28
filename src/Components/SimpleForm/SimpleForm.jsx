import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted");
    // console.log(e.target.name);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-2">
        <input
          className="border-2 p-2 rounded-lg w-[400px]"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <br />
        <input type="email" name="email" placeholder="Your Email" id="" />
        <br />
        <input
          className="bg-blue-500 text-white py-1.5 px-4 rounded-lg my-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SimpleForm;
