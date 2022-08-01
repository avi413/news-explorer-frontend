import './SignInPopup.css'
import React, { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignInPopup(props) {
  const inputEl = useRef(null);

  const handleSubmit = (event) => {
  };

  return (
    <PopupWithForm
      title="Sign In"
      name="SignIn"
      lable="Sign in"
      isOpen={props.isOpen}
      close={props.onClose}
      formName="SignInForm"
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
      <span className="popup__input-error password-input-error"/>
    </PopupWithForm>
  );
}

export default SignInPopup;
