import './Button.css';

function Button(props) {
  const { title, className, onClick } = props;
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
