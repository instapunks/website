import * as React from 'react';

import styles from './H2.module.scss';

type H2Props = {}

export const H2: React.FC<H2Props> = ({
  ...props
}) => {
  return (
    <h2
      className={styles.h2}
      {...props}
    >
      {props.children}
    </h2>
  )
};

export default H2;