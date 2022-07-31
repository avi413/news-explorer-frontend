import './Button.css';

function Button(props) {
  const { title, className, onclick } = props;
  return (
    <button className={`button ${className}`} onClick={onclick}>
      {title}
    </button>
  );
}

export default Button;
