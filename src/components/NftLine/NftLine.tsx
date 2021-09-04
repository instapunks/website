import * as React from 'react';

import styles from './NftLine.module.scss';
import { useTranslation } from 'react-i18next';

type NftLineProps = unknown;

export const NftLine: React.FC<NftLineProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.nftLine} {...props}>
      <div className={styles.nftLineData}>
        <div>{t('9900 NFTs will be minted for free')}</div>

        <div className={styles.nftLineRight}>
          {t('100 NFTs will be auctioned')}
        </div>
      </div>

      <div className={styles.nftLineColor}></div>
    </div>
  );
};

export default NftLine;
