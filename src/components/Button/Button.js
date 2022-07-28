import './Button.css';

function Button(props) {
  const { title, type, onclick } = props;
  return (
    <button className={`button ${type}`} onClick={onclick}>
      {title}
    </button>
  );
}

export default Button;
