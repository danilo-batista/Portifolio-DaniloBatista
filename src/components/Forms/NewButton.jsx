import styles from './NewButton.module.scss';

export function NewButton(props) {
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
