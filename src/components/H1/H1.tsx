import * as React from 'react';

import styles from './H1.module.scss';

type H1Props = unknown;

export const H1: React.FC<H1Props> = ({ ...props }) => {
  return (
    <h1 className={styles.h1} {...props}>
      {props.children}
    </h1>
  );
};

export default H1;
