import React from 'react';

const PersonForm = ({ addContact, newName, newPhone, handleChange, handlePhone }) => {
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={handleChange} />
        phone: <input value={newPhone} onChange={handlePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
