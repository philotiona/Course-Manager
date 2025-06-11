import styles from "./Input.module.css"

export default function Input({
  classInput, 
  labelText, 
  className, 
  value,
  onChange,
  type = "text",
  placeholder = "Input text",
  name,
  error,
  required = false
}) {
  return (
    <div className={styles[classInput]}>
      <label className={styles.label}>{labelText}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className={`${styles[className]} ${error ? styles.error : ''}`}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  )
}