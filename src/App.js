
import './App.css';
import FilmsList from './Components/FilmsList.jsx';
import Header from '../src/Components/Header.jsx';
import { useState } from 'react';

function App() {
  

  return (
    <div className="App">
      <Header />
      <FilmsList />
    </div>

  );
}

export default App;
