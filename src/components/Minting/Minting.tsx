import * as React from 'react';

import H2 from 'components/H2/H2';
import styles from './Minting.module.scss';
import { TextLarge } from 'components/Text/Text';
import H3 from 'components/H3/H3';

type MintingProps = unknown;

export const Minting: React.FC<MintingProps> = ({ ...props }) => {
  return (
    <div className={styles.minting} {...props}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.globalAuctionHeader}>
              <H2>Minting</H2>
            </div>
            <TextLarge>
              The costs of minting 1 Instapunk is 0.05 ETH + gas fees. <br />
              The maximum number of mints per transaction is 20. <br />
              At the revelation all Instapunks will be assigned randomly.
            </TextLarge>
            <H3>800/10,000 LEFT</H3>
            FORM
          </div>
        </div>
      </div>

      <div className={styles.mintingLine}>
        <div className={styles.mintingLineItem}>
          <TextLarge>
            Minting will star at 4:00 pm ET on the 1st of September 2021
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            Minting will star at 4:00 pm ET on the 1st of September 2021
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            Minting will star at 4:00 pm ET on the 1st of September 2021
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            Minting will star at 4:00 pm ET on the 1st of September 2021
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            Minting will star at 4:00 pm ET on the 1st of September 2021
          </TextLarge>
        </div>
      </div>
    </div>
  );
};

export default Minting;
