import * as React from 'react';

import cs from 'clsx';
import styles from './Immortalize.module.scss';
import { TextLarge } from 'components/Text/Text';
import H1 from 'components/H1/H1';
import NftLine from 'components/NftLine/NftLine'

type ImmortalizeProps = {}

export const Immortalize: React.FC<ImmortalizeProps> = ({
  ...props
}) => {
  return (
    <div
      className={styles.immortalize}
      {...props}
    >
      <img src="./top-img.svg" alt="" className={styles.immortalizeImgStar1} />
      <img src="./star2.svg" alt="" className={styles.immortalizeImgStar2} />

      <div className="container">
        <div className={cs(styles.immortalizeHeader, 'row')}>
          <div className="col-12">
            <H1>IMMORTALIZE YOURSELF</H1>
          </div>
        </div>

        <div className={cs(styles.immortalizeBody, 'row')}>
          <div className="col-12 col-md-6">
            <div className={styles.immortalizeLine}>
              <NftLine />
            </div>
          </div>

          <div className="col-12 col-md-5 offset-md-1">
            <TextLarge>
              99% of Instapunks (9900 NFTs) are inspired by top Instagram influencers and leaders, who are followed by millions of people. These NTFs are designed already.
            </TextLarge>

            <TextLarge>
              1% of Instapunks (100 NFTs) will be made later and will be designed after crypto enthusiasts and digital art collectors who, despite much less Instagram popularity, would like to become a part of this art project and immortalize themselves on Ethereum blockchain.
              Those 100 NFTs will be auctioned.
            </TextLarge>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Immortalize;