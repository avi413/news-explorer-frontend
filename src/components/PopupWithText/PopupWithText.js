import './PopupWithText.css';

function PopupWithText(props) {
  const open = true ? " popup_opened" : "";

  return (
    <div className={`popup popup_type_${props.name} ${open}`}>
      <button
        aria-label="close popup"
        className="popup__close popup__close_place_profile button button_opacity_m"
        onClick={props.close}
      />
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        
        <p className='popup__footer'><button className='popup__switch-button'>{props.footer}</button></p>
      </div>
    </div>
  );
}

export default PopupWithText;
