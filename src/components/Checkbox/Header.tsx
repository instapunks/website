import * as React from 'react';

import styles from './Header.module.scss';

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = ({
  ...props
}) => {
  return (
    <h1
      className={styles.h1}
      {...props}
    >
      {props.children}
    </h1>
  )
};

export default Header;