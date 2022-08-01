import './SignUpPopup.css'
import React, { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignUpPopup(props) {
  const inputEl = useRef(null);

  const handleSubmit = (event) => {
  };

  return (
    <PopupWithForm
      title="Sign Up"
      name="SignUp"
      lable="Sign up"
      isOpen={props.isOpen}
      close={props.onClose}
      formName="SignUpForm"
      onSubmit={handleSubmit}
      footer="Sign up"
    >
       <label className="popup__label" htmlFor="Email">Email</label>
      <input
        ref={inputEl}
        id="Email"
        className="popup__input popup__input-text popup__input-text_type_email"
        required
        type="email"
        placeholder="Enter email"
        name="email"
      />
      <span className="popup__input-error password-input-error"/>
      <label className="popup__label" htmlFor="Password">password</label>
     <input
        ref={inputEl}
        id="Password"
        className="popup__input popup__input-text popup__input-text_type_password"
        required
        type="password"
        placeholder="Enter password"
        name="password"
      />
      <span className="popup__input-error username-input-error"/>
      <label className="popup__label" htmlFor="Username">Username</label>
      <input
        ref={inputEl}
        id="Username"
        className="popup__input popup__input-text popup__input-text_type_username"
        required
        type="text"
        placeholder="Enter your username"
        name="username"
      />
      <span className="popup__input-error username-input-error"/>
    </PopupWithForm>
  );
}

export default SignUpPopup;
