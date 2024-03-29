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

import { newsApi } from '../../utils/NewsApi';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInData, setLoggedInData] = useState(null);

  const signInValidation = useFormWithValidation({
    password: '',
    email: '',
  });
  const signUpValidation = useFormWithValidation({
    password: '',
    email: '',
    username: '',
  });

  const getNews = async (q) => {
    return await newsApi.getNews(q);
  };

  const getSavedNews = async () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return await auth.getArticles(); 
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            const loggedInData = res;
            setLoggedIn(true);
            setLoggedInData(loggedInData.data);
            setCurrentUser({ jwt: res, isLoggedIn: true });
          }
        })
        .catch((err) => console.log(err));

    }
  }, [currentUser.isLoggedIn,loggedIn]);

  const handleSignInClick = () => {
    setIsSignInPopupOpen(true);
    setIsSuccessPopupOpen(false);
    setIsSignUpPopupOpen(false);
  };
  const handleSignUpClick = () => {
    setIsSignUpPopupOpen(true);
    setIsSuccessPopupOpen(false);
    setIsSignInPopupOpen(false);
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
        signInValidation.resetForm();
        setIsSignInPopupOpen(false);
      })
      .catch((err) => {
        signInValidation.setApiErr(err);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setLoggedInData(null);
    setCurrentUser({});
  };

  const handleSignup = ({ password, email, username }) => {
    auth
      .register(password, email, username)
      .then((res) => {
        signUpValidation.resetForm();
        setIsSignUpPopupOpen(false);
        setIsSuccessPopupOpen(true);
      })
      .catch((err) => {
        signUpValidation.setApiErr(err);
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
          formValidation={signInValidation}
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
          formValidation={signUpValidation}
          handleSignup={handleSignup}
          handleSwitchPopupClick={handleSignInClick}
        />

        <PopupWithText
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopups}
          name='success'
          title='Registration successfully completed!'
          lable='successful'
          footer='Sign in'
          handleSwitchPopupClick={handleSignInClick}
        />
        <Header
          onSignUpClick={handleSignUpClick}
          onSignInClick={handleSignInClick}
          isLoggedIn={currentUser.isLoggedIn}
          handleSignOut={handleSignOut}
          loggedInName={loggedInData && loggedInData.name}
        />

        <Routes>
          <Route exact path='/' element={<Main getNews={getNews}/>} />
          <Route
            exact
            path='/saved-news'
            element={
              <ProtectedRoute
                isLoggedIn={currentUser.isLoggedIn}
                redirectPath='/'
              >
                <SavedNews getSavedNews={getSavedNews}/>
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
