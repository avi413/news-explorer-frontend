import './PopupWithText.css';

function PopupWithText(props) {
  const open = props.isOpen ? " popup_opened" : "";

  return (
    <div className={`popup popup_type_${props.name} ${open}`}>
      <button
        aria-label="close popup"
        className="popup__close popup__close_place_profile button_opacity_m"
        onClick={props.onClose}
      />
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        
        <p className='popup__footer'><button className='popup__switch-button' onClick={props.handleSwitchPopupClick}>{props.footer}</button></p>
      </div>
    </div>
  );
}

export default PopupWithText;
