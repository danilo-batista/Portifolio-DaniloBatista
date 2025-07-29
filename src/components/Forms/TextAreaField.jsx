import styles from '../Forms/TextAreaField.module.scss';

export function TextAreaField(props) {
  return (
    <article className={styles.textAreaField__data}>
      <label className={styles.textAreaField__label} htmlFor={props.name}>
        {props.label}
      </label>

      <textarea
        className={styles.textAreaField__text}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        rows="5"
      />
    </article>
  );
}
