import * as React from 'react';

import styles from './Button.module.scss';
import cs from 'clsx';

type ButtonProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  modifier?:
    | 'buttonLarge'
    | 'buttonExtraLarge'
    | 'buttonCircle'
    | 'buttonCircleWhite'
    | 'buttonCircleOutline';
} & React.ButtonHTMLAttributes<any>;

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

    case 'buttonCircle':
      styleType = cs(styles.button, styles.buttonCircle);
      break;

    case 'buttonCircleWhite':
      styleType = cs(styles.button, styles.buttonCircleWhite);
      break;

    case 'buttonCircleOutline':
      styleType = cs(styles.button, styles.buttonCircleOutline);
      break;

    default:
      styleType = styles.button;
  }

  return (
    <button className={styleType} disabled={disabled} {...props}>
      {iconLeft}

      {props.children}

      {iconRight}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <BaseButton {...props} />
);
export const ButtonLarge: React.FC<ButtonProps> = ({ ...props }) => (
  <BaseButton modifier="buttonLarge" {...props} />
);
export const ButtonExtraLarge: React.FC<ButtonProps> = ({ ...props }) => (
  <BaseButton modifier="buttonExtraLarge" {...props} />
);
export const ButtonCircle: React.FC<ButtonProps> = ({ ...props }) => (
  <BaseButton modifier="buttonCircle" {...props} />
);
export const ButtonCircleWhite: React.FC<ButtonProps> = ({ ...props }) => (
  <BaseButton modifier="buttonCircleWhite" {...props} />
);
export const ButtonCircleOutline: React.FC<ButtonProps> = ({ ...props }) => (
  <BaseButton modifier="buttonCircleOutline" {...props} />
);

export const BtnPlus: React.FC = ({}) => {
  return <div className={styles.btnPlus}></div>;
};

export const BtnMinus: React.FC = ({}) => {
  return <div className={styles.btnMinus}></div>;
};
