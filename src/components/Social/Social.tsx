import * as React from 'react';

import styles from './Social.module.scss';
import { IconDesc, IconInst, IconTg, IconTw } from 'components/Icon/Icon';

type SocialProps = unknown;

export const Social: React.FC<SocialProps> = ({ ...props }) => {
  return (
    <ul className={styles.social} {...props}>
      <li className={styles.socialItem}>
        <a
          href="https://www.instagram.com/instapunks.eth"
          className={styles.socialLink}
        >
          <IconInst />
        </a>
      </li>

      <li className={styles.socialItem}>
        <a href="https://discord.gg/3Xs5Qr3yMf" className={styles.socialLink}>
          <IconDesc />
        </a>
      </li>

      <li className={styles.socialItem}>
        <a href="https://twitter.com/instapunks" className={styles.socialLink}>
          <IconTw />
        </a>
      </li>
    </ul>
  );
};

export default Social;
