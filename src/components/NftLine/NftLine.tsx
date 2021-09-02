import * as React from 'react';

import styles from './NftLine.module.scss';

type NftLineProps = {}

export const NftLine: React.FC<NftLineProps> = ({
  ...props
}) => {
  return (
    <div
      className={styles.nftLine}
      {...props}
    >
      <div className={styles.nftLineData}>
        <div>
          9900 NFTs will be <br />
          minted for free
        </div>

        <div className={styles.nftLineRight}>
          100 NFTs will be <br />
          auctioned
        </div>
      </div>

      <div className={styles.nftLineColor}></div>
    </div>
  )
};

export default NftLine;