import './App.css';
import React from 'react';
import { Routes, Link, Router, Route } from 'react-router-dom';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <div className='App'>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/saved-news'>About</Link>
      </div>

      <Routes>
        <Route exact path='/saved-news' element={<SavedNews />} />
        <Route exact path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
