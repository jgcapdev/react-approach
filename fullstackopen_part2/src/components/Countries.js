import React from 'react';

const Countries = ({ filtered, weather, handleShow }) => {
  return (
    <>
      {filtered.length === 1
        ? filtered.map((country) => (
            <div key={country.name.common}>
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <h3>Languages: </h3>

              <ul>
                {Object.keys(country.languages).map((lang) => (
                  <li key={lang}>{country.languages[lang]}</li>
                ))}
              </ul>

              <img src={country.flags.png} />

              <h2>Weather</h2>

              <img src={weather.iconURL} />
            </div>
          ))
        : filtered.length <= 10
        ? filtered.map((country) => (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
              <button onClick={() => handleShow(country.name.common)}>Show</button>
            </div>
          ))
        : ''}
    </>
  );
};

export default Countries;
