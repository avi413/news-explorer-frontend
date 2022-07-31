import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';

window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});
function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route exact path='/saved-news' element={<SavedNews />} />
        <Route exact path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
