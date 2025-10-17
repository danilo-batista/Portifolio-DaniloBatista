import { cva } from 'class-variance-authority';
import styles from './Button.module.scss';

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    sizes: {
      small: styles.small,
      medium: styles.medium,
      big: styles.big,
    },
    colors: {
      info: styles.info,
      success: styles.success,
      warning: styles.warning,
      danger: styles.danger,
    },
    disabled: {
      false: styles.enabled,
      true: styles.disabled,
    },
  },
  compoundVariants: [],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    colors: '',
    disabled: false,
  },
});

export function Button({
  className,
  intent,
  size,
  colors,
  disabled,
  ...props
}) {
  return (
    <button
      className={button({ intent, size, colors, disabled, className })}
      disabled={disabled || undefined}
      {...props}
    />
  );
}
