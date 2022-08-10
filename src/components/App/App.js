import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SignInPopup from '../SignInPopup/SignInPopup';
import PopupWithText from '../PopupWithText/PopupWithText';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);


  
  const handleRegister = () => {
    setIsSignUpPopupOpen(false);
    setIsSuccessPopupOpen(true);
  };

  const handleonSignInClick = () => {
    setIsSignInPopupOpen(true);
    setIsSuccessPopupOpen(false);
    setIsSignUpPopupOpen(false);
  };
  const handleSignUpClick = () => {
    setIsSignUpPopupOpen(true);
    setIsSuccessPopupOpen(false);
    setIsSignInPopupOpen(false);
  };

  const handleSignIn = () => {
    setIsSignUpPopupOpen(false);
  };

  const handleSignUp = () => {
    setIsSignUpPopupOpen(false);
  };
  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  return (
    <div className='App'>
      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
        name='SignInPopup'
        title='sign in'
        formName='signInForm'
        lable='sign in'
        footer='sign up'
        onSignIn={handleSignIn}
        handleSwitchPopupClick={handleSignUpClick}
      />

      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        name='SignUpPopup'
        title='sign up'
        formName='signUpForm'
        lable='sign up'
        footer='sign in'
        onSignUp={handleSignUp}
        handleSwitchPopupClick={handleonSignInClick}
        handleRegister={handleRegister}
      />

      <PopupWithText
        isOpen={isSuccessPopupOpen}
        onClose={closeAllPopups}
        name='success'
        title='Registration successfully completed!'
        lable='successful'
        footer='Sign in'
        handleSwitchPopupClick={handleonSignInClick}
      />
      <Header
        onSignUpClick={handleSignUpClick}
        ononSignInClick={handleonSignInClick}
      />

      <Routes>
        <Route exact path='/saved-news' element={<SavedNews />} />
        <Route exact path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
