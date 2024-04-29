import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <div>
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
