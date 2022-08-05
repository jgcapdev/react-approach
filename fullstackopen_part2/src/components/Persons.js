import React from 'react';

const Persons = ({ persons, newFilter, handleDelete }) => {
  return (
    <ul>
      {persons
        .filter((person) => person.name.includes(newFilter))
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
