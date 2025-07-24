import styles from '../Forms/InputField.module.scss';

export function InputField(props) {
  return (
    <article className={styles.inputField__data}>
      <label className={styles.inputField__label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.inputField__text}
        type={props.type}
        id={props.label}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
    </article>
  );
}
