import { cva } from 'class-variance-authority';
import { NavLink } from 'react-router-dom';
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
      large: styles.large,
      extraLarge: styles.extraLarge,
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
  as = 'button',
  to,
  href,
  className,
  intent,
  sizes,
  colors,
  disabled,
  children,
  ...props
}) {
  let Component;

  if (href) {
    Component = 'a';
  } else if (to) {
    Component = NavLink;
  } else {
    Component = as;
  }

  return (
    <Component
      to={to}
      href={href}
      className={button({ intent, sizes, colors, disabled, className })}
      disabled={disabled || undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
