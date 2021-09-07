import bankImage from 'assets/images/instaverse/bank.png';
import daoImage from 'assets/images/instaverse/dao.png';
import factoryImage from 'assets/images/instaverse/factory.png';
import spaImage from 'assets/images/instaverse/spa.png';
import H3 from 'components/H3/H3';
import { Text } from 'components/Text/Text';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Tokenomics.module.scss';

type TokenomicsProps = unknown;

export const Tokenomics: React.FC<TokenomicsProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.tokenomics} {...props}>
      <div className={styles.tokenomicsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>{t('INSTAVERSE')}</H3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.tokenomicsList}>
              <div className={styles.tokenomicsItem}>
                <H3>{t('Bank')}</H3>
                <img className={styles.tokenomicsImage} {...bankImage} />
                <Text>
                  {t(
                    'Earn royalties from all Instapunk secondary sales on Opensea and NFT sales made by your Instapunk’s alter-egos. '
                  )}
                </Text>
              </div>

              <div className={styles.tokenomicsItem}>
                <H3>{t('Factory')}</H3>
                <img className={styles.tokenomicsImage} {...factoryImage} />
                <Text>
                  {t(
                    'Help celebrities with onboarding and start selling their digital art, merchandize and content in 24 hours.'
                  )}
                </Text>
              </div>

              <div className={styles.tokenomicsItem}>
                <H3>{t('SPA')}</H3>
                <img className={styles.tokenomicsImage} {...spaImage} />
                <Text>
                  {t(
                    'Pamper your Instapunk with superior treatment and care provided by our make-up artists.'
                  )}
                </Text>
              </div>

              <div className={styles.tokenomicsItem}>
                <H3>{t('DAO')}</H3>
                <img className={styles.tokenomicsImage} {...daoImage} />
                <Text>
                  {t(
                    'NFT holders collectively decide on the future of this art project, and form DAOs to work in teams and share profits.'
                  )}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
