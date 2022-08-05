import { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './components/Note';
import Course from './components/Course';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import contactsService from './services/contacts';
import Notification from './components/Notification';

import Countries from './components/Countries';

import { notes } from './notes';
import { courses } from './courses';

function App() {
  const [myNotes, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newFilter, setFilter] = useState('');

  const [jsonPersons, setJsonPersons] = useState('');

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    contactsService.getAll().then((res) => {
      setPersons(res);
    });
  }, []);

  const addContact = (event) => {
    event.preventDefault();

    const newContact = {
      name: newName,
      number: newPhone,
    };

    if (persons.filter((persons) => persons.name === newName).length > 0) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with the new one?`)) {
        const personToUpdate = persons.filter((person) => person.name === newName);

        contactsService
          .update(personToUpdate[0].id, newContact)
          .then((res) => {
            newContact.id = res.id;

            setPersons(persons.map((person) => (person.name !== newContact.name ? person : newContact)));
          })
          .catch((err) => {
            setErrorMessage(`Error ${err.response.data.json}`);

            setTimeout(() => {
              setErrorMessage(null);
            }, 2000);
          });
      }
    } else {
      contactsService.create(newContact).then((res) => {
        setPersons(persons.concat(res));

        setErrorMessage(`Added ${newContact.name}`);

        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);

        setNewName('');
        setNewPhone('');
      });
    }
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (id) => {
    console.log('delete', id);

    if (window.confirm('Are you sure you want to delete this person?')) {
      contactsService
        .remove(id)
        .then((res) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((err) => {
          setErrorMessage(`Error ${err.response.data.json}`);

          setTimeout(() => {
            setErrorMessage(null);
          }, 2000);
        });
    }
  };

  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [weather, setWeather] = useState('');

  const handleCountry = (e) => {
    setCountryFilter(e.target.value);
  };

  const filtered = countries.filter((country) => country.name.common.includes(countryFilter));

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    if (countryFilter.length !== 0) {
      axios.get(`https://weatherdbi.herokuapp.com/data/weather/${countryFilter}`).then((res) => {
        if (res.data.currentConditions) {
          setWeather(res.data.currentConditions);
        }
      });
    }
  }, [countryFilter]);

  const handleShow = (name) => {
    setCountryFilter(name);
  };

  return (
    <>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      <hr />

      <Course courses={courses} />

      <hr />

      <h2>Phonebook</h2>

      <Notification message={errorMessage} />

      <Filter handleFilter={handleFilter} />
      <PersonForm
        addContact={addContact}
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        handlePhone={handlePhone}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} handleDelete={handleDelete} />

      <hr />

      <p>Find countries</p>
      <input onChange={handleCountry} />

      <Countries filtered={filtered} weather={weather} handleShow={handleShow} />
    </>
  );
}

export default App;
