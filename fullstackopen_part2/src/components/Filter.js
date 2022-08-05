import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <>
      <p>Filter</p>
      <input onChange={handleFilter} />
    </>
  );
};

export default Filter;
