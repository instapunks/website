import * as React from 'react';

import styles from './Checkbox.module.scss';
import { useTranslation } from 'react-i18next';

type CheckboxProps = {
  name: string;
  checked?: boolean;
  disabled?: boolean;
  text?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checked,
  disabled,
  text,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.checkbox} {...props}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          disabled={disabled}
        />

        <span></span>
      </label>

      {text && <div className={styles.checkboxText}>{t(text)}</div>}
    </div>
  );
};

export default Checkbox;
