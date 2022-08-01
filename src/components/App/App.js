import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SignInPopup from '../SignInPopup/SignInPopup';
import PopupWithText from '../PopupWithText/PopupWithText';

function App() {
  return (
    <div className='App'>
      <SignInPopup
        name='SignInPopup'
        title='sign in'
        formName='signInForm'
        lable='lable'
      />

      <PopupWithText
       name='success'
       title='Registration successfully completed!'
       lable='successful'
       footer='Sign in'
      />
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
