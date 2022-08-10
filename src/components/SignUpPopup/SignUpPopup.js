import './SignUpPopup.css';
import * as auth from '../../utils/MainApi.js';
import { useFormWithValidation } from '../../hooks/useFormWithValidation/index.js';

import React, { useRef, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup(props) {
  const inputEl = useRef(null);
  const { values, handleChange, errors, apiErr, setApiErr, isValid, resetForm } = useFormWithValidation({
    username: '',
    password: '',
    email: '',
  });
  const {username,password,email} = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .register(password, email, username)
      .then((res) => {
        props.handleRegister();
        resetForm();
      })
      .catch((err) => {
        setApiErr(err);
      });
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
      <span className='popup__input-error'>{errors.email || errors.password || errors.username || apiErr}</span>
    </PopupWithForm>
  );
}

export default SignUpPopup;
