import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as auth from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SignInPopup from '../SignInPopup/SignInPopup';
import PopupWithText from '../PopupWithText/PopupWithText';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useFormWithValidation } from '../../hooks/useFormWithValidation/index.js';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInData, setLoggedInData] = useState(null);

  const formValidation = useFormWithValidation({
    password: '',
    email: '',
  });

  const handleLogedInUser = (loggedInData) => {
    setLoggedIn(true);
    setLoggedInData(loggedInData);
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            const loggedInData = res.data.email;
            setLoggedIn(true);
            setLoggedInData(loggedInData);
            setCurrentUser({ jwt: res, isLoggedIn: true });
          }
        })
        .then(() => {
          setLoggedIn(true);
        });
    } else {

    }
  }, [loggedIn]);

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

  const handleSignUp = () => {
    setIsSignUpPopupOpen(false);
  };
  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const handleSignin = ({ password, email }) => {
    auth
      .authorize(password, email)
      .then((res) => {
        setCurrentUser({ jwt: res, isLoggedIn: true });
        formValidation.resetForm();
        setIsSignInPopupOpen(false);
      })
      .catch((err) => {
        formValidation.setApiErr(err);
      });
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <SignInPopup
          isOpen={isSignInPopupOpen}
          onClose={closeAllPopups}
          name='SignInPopup'
          title='sign in'
          formName='signInForm'
          lable='sign in'
          footer='sign up'
          formValidation={formValidation}
          handleSignin={handleSignin}
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
          isLoggedIn={currentUser.isLoggedIn}
        />

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route
            exact
            path='/saved-news'
            element={
              <ProtectedRoute
                isLoggedIn={currentUser.isLoggedIn}
                redirectPath='/'
              >
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
