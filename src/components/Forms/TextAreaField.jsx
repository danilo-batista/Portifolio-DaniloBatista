import styles from '../Forms/TextAreaField.module.scss';

export function TextAreaField(props) {
  return (
    <article className={styles.textAreaField__data}>
      <label className={styles.textAreaField__label} htmlFor={props.name}>
        {props.label}
      </label>

      <textarea
        className={styles.textAreaField__text}
        id={props.label}
        name={props.name}
        placeholder={props.placeholder}
        rows="5"
      />
    </article>
  );
}
