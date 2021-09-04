import * as React from 'react';

import styles from './Input.module.scss';
import cs from 'clsx';

type InputProps = {
  value?: string;
  placeholder?: string;
  status?: string;
  type?: 'inputLeft';
};

export const BaseInput: React.FC<InputProps> = ({
  value,
  placeholder,
  status,
  type,
  ...props
}) => {
  let statusStyle = '';

  switch (status) {
    case 'error':
      statusStyle = cs(styles.input, styles.inputError);
      break;

    default:
      statusStyle = styles.input;
  }

  if (type === 'inputLeft') {
    statusStyle = cs(statusStyle, styles.inputLeft);
  }

  return (
    <input
      className={statusStyle}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
};

export const Input: React.FC<InputProps> = ({ ...props }) => (
  <BaseInput {...props} />
);
export const InputLeft: React.FC<InputProps> = ({ ...props }) => (
  <BaseInput type="inputLeft" {...props} />
);
