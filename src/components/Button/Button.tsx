import * as React from 'react';

import styles from './Button.module.scss';
import cs from 'clsx';

type ButtonProps = {
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  disabled?: boolean,
  modifier?: 'buttonLarge' | 'buttonExtraLarge'
}

export const BaseButton: React.FC<ButtonProps> = ({
  iconLeft,
  iconRight,
  disabled,
  modifier,
  ...props
}) => {
  let styleType;

  switch (modifier) {
    case 'buttonLarge':
      styleType = cs(styles.button, styles.buttonLarge);
      break;

    case 'buttonExtraLarge':
      styleType = cs(styles.button, styles.buttonExtraLarge);
      break;

    default:
      styleType = styles.button;
  }

  return (
    <button
      className={styleType}
      disabled={disabled}
      {...props}
    >
      {iconLeft}

      {props.children}

      {iconRight}
    </button>
  )
};

export const Button : React.FC = (props) => <BaseButton {...props} />
export const ButtonLarge : React.FC = (props) => <BaseButton modifier="buttonLarge" {...props} />
export const ButtonExtraLarge : React.FC = (props) => <BaseButton modifier="buttonExtraLarge" {...props} />