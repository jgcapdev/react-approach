import React, { useState } from 'react';

const Togglable = ({ title, children, handleSubmit }) => {
  const [visible, setVisible] = useState(false);

  if (!visible) {
    return (
      <header>
        <h2>{title}</h2>

        <button onClick={() => setVisible(true)}>Show</button>
      </header>
    );
  }

  return (
    <header>
      <h2>{title}</h2>

      <button onClick={() => setVisible(false)}>Close</button>

      <form onSubmit={handleSubmit}>
        {children}
        <button type="submit">Save</button>
      </form>
    </header>
  );
};

export default Togglable;
