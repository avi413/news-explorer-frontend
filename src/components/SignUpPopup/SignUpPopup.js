import './SignUpPopup.css';

import React, { useRef } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup(props) {
  const inputEl = useRef(null);
  const { values, handleChange, errors, apiErr, isValid } = props.formValidation
  const {username,password,email} = values;

  const handleSubmit= (event) => {
    event.preventDefault();
    props.handleSignup({username,password,email});
  };

  return (
    <PopupWithForm
      title='Sign Up'
      name='SignUp'
      lable='Sign up'
      isOpen={props.isOpen}
      close={props.onClose}
      formName='SignUpForm'
      onSubmit={handleSubmit}
      footer={props.footer}
      handleSwitchPopupClick={props.handleSwitchPopupClick}
      isValid={isValid}
    >
      <label className='popup__label' htmlFor='Email'>
        Email
      </label>
      <input
        ref={inputEl}
        id='signupemail'
        className='popup__input popup__input-text popup__input-text_type_email'
        required
        type='email'
        placeholder='Enter email'
        name='email'
        value={email || ''}
        onChange={handleChange}
      />
      <label className='popup__label' htmlFor='Password'>
        password
      </label>
      <input
        ref={inputEl}
        id='signuppassword'
        className='popup__input popup__input-text popup__input-text_type_password'
        required
        type='password'
        placeholder='Enter password'
        name='password'
        minLength='2'
        value={password || ''}
        onChange={handleChange}
      />
      <label className='popup__label' htmlFor='Username'>
        Username
      </label>
      <input
        ref={inputEl}
        id='username'
        className='popup__input popup__input-text popup__input-text_type_username'
        required
        type='text'
        placeholder='Enter your username'
        name='username'
        value={username || ''}
        minLength='2'
        onChange={handleChange}
      />
      <span className='popup__input-error'>{apiErr || errors.email || errors.password || errors.username}</span>
    </PopupWithForm>
  );
}

export default SignUpPopup;
