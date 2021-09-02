import * as React from 'react';
import Image from 'next/image';
import styles from './Hamburger.module.scss';

type HamburgerProps = unknown;

export const Hamburger: React.FC<HamburgerProps> = ({ ...props }) => {
  return (
    <div className={styles.hamburger} {...props}>
      <Image src="./hamburger.svg" alt="" />
    </div>
  );
};

export const HamburgerClosse: React.FC<HamburgerProps> = ({ ...props }) => {
  return (
    <div className={styles.hamburgerClosse} {...props}>
      <Image src="./hamburger-closse.svg" alt="" />
    </div>
  );
};
