import './SignInPopup.css';

import React, { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";


function SignInPopup(props) {
  const inputEl = useRef(null);
  const { values, handleChange, errors, apiErr, isValid } = props.formValidation;

  const {password,email} = values;
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSignin({password,email});

  }
  return (
    <PopupWithForm
      title="Sign In"
      name="SignIn"
      lable="Sign in"
      isOpen={props.isOpen}
      close={props.onClose}
      formName="SignInForm"
      onSubmit={handleSubmit}
      footer={props.footer}
      handleSwitchPopupClick={props.handleSwitchPopupClick}
      isValid={isValid}
    >
       <label className="popup__label" htmlFor="Email">Email</label>
      <input
        ref={inputEl}
        id="signinemail"
        className="popup__input popup__input-text popup__input-text_type_email"
        required
        type="email"
        placeholder="Enter email"
        name="email"
        value={email || ''}
        onChange={handleChange}
      />
      <label className="popup__label" htmlFor="Password">password</label>
     <input
        ref={inputEl}
        id="signinpassword"
        className="popup__input popup__input-text popup__input-text_type_password"
        required
        type="password"
        placeholder="Enter password"
        value={password || ''}
        name="password"
        onChange={handleChange}
      />
      <span className='popup__input-error'>{errors.email || errors.password || apiErr}</span>
    </PopupWithForm>
  );
}

export default SignInPopup;
