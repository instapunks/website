import * as React from 'react';

import cs from 'clsx';
import { useTranslation } from 'react-i18next';
import H2 from 'components/H2/H2';
import { TextLarge } from 'components/Text/Text';
import styles from './WeBelieve.module.scss';

type WeBelieveProps = unknown;

export const WeBelieve: React.FC<WeBelieveProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.weBelieve} {...props}>
      <div className="container">
        <div className="row">
          <div className={cs(styles.weBelieveLeft, 'col-12 col-md-7')}>
            <div className={styles.weBelieveTitle}>
              <H2>{t('We believe')}</H2>
            </div>

            <div className={styles.weBelieveInst}>
              <img src="./instagram.svg" alt="Instagram" />
            </div>
          </div>

          <div className={cs(styles.weBelieveRight, 'col-12 col-md-5')}>
            <TextLarge>
              {t(
                'We believe that digital art deserves recognition way beyond the core NFT community. Instagram is THE platform that can make digital art truly popular.'
              )}
            </TextLarge>

            <TextLarge>
              {t(
                'InstaPunks offers celebrities and influences an easy and fun way to learn about NFTs and spread the word about digital art to millions of their loyal fans.'
              )}
            </TextLarge>

            <TextLarge>
              {t(
                'With our project we aim to make many people around the world interested in digital art and learn about creating, using and trading NFTs.'
              )}
            </TextLarge>

            <img
              src="./signature.svg"
              alt="signature"
              className={styles.weBelieveSignature}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBelieve;
