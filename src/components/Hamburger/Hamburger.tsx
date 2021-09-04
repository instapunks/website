import * as React from 'react';

import styles from './Hamburger.module.scss';

type HamburgerProps = unknown;

export const Hamburger: React.FC<HamburgerProps> = ({ ...props }) => {
  return (
    <div className={styles.hamburger} {...props}>
      <img src="./hamburger.svg" alt="" />
    </div>
  );
};

export const HamburgerClosse: React.FC<HamburgerProps> = ({ ...props }) => {
  return (
    <div className={styles.hamburgerClosse} {...props}>
      <img src="./hamburger-closse.svg" alt="" />
    </div>
  );
};
