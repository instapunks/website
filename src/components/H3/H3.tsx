import * as React from 'react';

import styles from './H3.module.scss';

type H3Props = unknown & React.HtmlHTMLAttributes<any>;

export const H3: React.FC<H3Props> = ({ ...props }) => {
  return (
    <h3 className={styles.h3} {...props}>
      {props.children}
    </h3>
  );
};

export default H3;
