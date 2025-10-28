import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData) => {
        console.log(formData);
        // do something with the form data
        console.log(formData.get('name'));
        console.log(formData.get('email'));

    }

    return (
      <div>
        <form action={handleFormAction}>
          <input type="text" name='name' placeholder="Name" />
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
};

export default FormAction;