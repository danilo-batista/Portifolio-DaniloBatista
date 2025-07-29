import styles from '../Forms/Button.module.scss';

export function Button(props) {
  return (
    <button type={props.type} className={styles.button__submit}>
      {props.children}
    </button>
  );
}
