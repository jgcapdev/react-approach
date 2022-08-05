import React from 'react';

const BasicDataForm = () => {
  return (
    <>
      <div>
        <label htmlFor="nameInput">Your Name: </label>
        <input placeholder="Write your name here" type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="ageInput">Your Age: </label>
        <input placeholder="Write your age here" type="number" id="ageInput" />
      </div>
    </>
  );
};

export default BasicDataForm;
