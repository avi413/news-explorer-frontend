import './Button.css';

function Button(props) {
  const { title, className, onClick, disabled } = props;
  return (
    <button className={`button ${className}`} onClick={onClick}  disabled={disabled}>
      {title}
    </button>
  );
}

export default Button;
