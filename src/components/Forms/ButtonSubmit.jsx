import styles from './ButtonSubmit.module.scss';

export function ButtonSubmit(props) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={styles.button}
    >
      {props.children}
    </button>
  );
}
