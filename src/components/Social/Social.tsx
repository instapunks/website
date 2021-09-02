import { IconDesc, IconInst, IconTg, IconTw } from 'components/Icon/Icon';
import * as React from 'react';

import styles from './Social.module.scss';

type SocialProps = {}

export const Social: React.FC<SocialProps> = ({
  ...props
}) => {
  return (
    <ul
      className={styles.social}
      {...props}
    >
      <li className={styles.socialItem}>
        <a href="soc" className={styles.socialLink}>
          <IconInst />
        </a>
      </li>

      <li className={styles.socialItem}>
        <a href="soc" className={styles.socialLink}>
          <IconDesc />
        </a>
      </li>

      <li className={styles.socialItem}>
        <a href="soc" className={styles.socialLink}>
          <IconTw />
        </a>
      </li>

      <li className={styles.socialItem}>
        <a href="soc" className={styles.socialLink}>
          <IconTg />
        </a>
      </li>
    </ul>
  )
};

export default Social;