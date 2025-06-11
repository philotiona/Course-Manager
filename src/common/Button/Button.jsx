import style from "./Button.module.css";
import PropTypes from "prop-types"

export default function Button({ text, onClick, className}) {
  return (
    <button
      className={style[className]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
  className: PropTypes.string.isRequired
}