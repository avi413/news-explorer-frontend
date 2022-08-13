import './PopupWithForm.css';
import Button from '../Button/Button';

function PopupWithForm(props) {
  const open = props.isOpen ? " popup_opened" : "";
  const valid = props.isValid ? "button_type_blue" : "button_type_disable";
  return (
    <div className={`popup popup_type_${props.name} ${open}`}>
      <button
        aria-label="close popup"
        className="popup__close popup__close_place_profile button_opacity_m"
        onClick={props.close}
      />
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          action="#"
          className={`popup__form popup__form_type_${props.name}`}
          name={props.formName}
          onSubmit={props.onSubmit}
        >
          <fieldset className="popup__form-set">
            {props.children}
            <Button
              type="submit"
              className={`${valid} popup__button-submit`}
              title = {props.lable}
              disabled = {!props.isValid} 
            />
          </fieldset>
        </form>
        <p className='popup__footer'>or <button className='popup__switch-button' onClick={props.handleSwitchPopupClick}>{props.footer}</button></p>
      </div>
    </div>
  );
}

export default PopupWithForm;
