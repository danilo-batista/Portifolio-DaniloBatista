import styles from '@/components/Forms/FormGenericInput.module.scss';

export function FormInput(props) {
  return (
    <article className={styles.genericField__data}>
      <label className={styles.genericField__label} htmlFor={props.name}>
        {props.label}
      </label>

      <input
        className={styles.genericField__text}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
        type={props.type}
      />
    </article>
  );
}
