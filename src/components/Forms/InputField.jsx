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
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
      />
    </article>
  );
}
