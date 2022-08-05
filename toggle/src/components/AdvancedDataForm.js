import React from 'react';

const AdvancedDataForm = () => {
  return (
    <>
      <div>
        <label htmlFor="dateInput">Your birthdate: </label>
        <input type="date" id="dateInput" />
      </div>
      <div>
        <label htmlFor="textInput">Your Comment: </label>
        <textarea placeholder="Write your comment here" rows="5" id="textInput"></textarea>
      </div>
    </>
  );
};

export default AdvancedDataForm;
