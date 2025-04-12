import style from "./Button.module.css";

export default function Button({ text, onClick, className = ''}) {
  return (
    <button
      className={`${style.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}