import * as React from 'react';

import { useTranslation } from 'react-i18next';
import cs from 'clsx';
import H2 from 'components/H2/H2';
import styles from './LivingArt.module.scss';
import { TextBold, TextLarge } from 'components/Text/Text';
import H3 from 'components/H3/H3';

type LivingArtProps = unknown;

export const LivingArt: React.FC<LivingArtProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.livingArt} {...props}>
      <div className={cs(styles.livingArtHeader, 'container')}>
        <div className="row">
          <div className="col-12">
            <H2>{t('Living art')}</H2>
          </div>
        </div>
      </div>

      <div className={styles.livingArtText}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <TextLarge>
                {t(
                  'If your Instagram account is one of the Instapunks you can launch your digital art or merchandise collection free of charge with a single Instagram post. Dozens of international artists will work on your collection to make it perfect. We will cover all design, manufacturing and marketing expenses. We will sell your collection and send you 70% of the revenue in crypto or USD.'
                )}
              </TextLarge>
            </div>

            <div className="col-12 col-md-6">
              <TextLarge>
                {t(
                  'To launch your digital art collection, make a post (not a story) on Instagram with #MintMeInstapunk hashtag and tag our corporate account instapunks.eth. Then send a message to instapunks.eth account – we are always online to help you with your collection ideas and sales.'
                )}
              </TextLarge>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.livingArtAlert}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.livingArtAlertBody}>
                <img src="./living-art-star.svg" alt="star" />

                <TextBold>
                  {t(
                    'You have 100 days to launch your digital art collection. We will invest in its production and marketing'
                  )}
                </TextBold>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.livingArtBody}>
        <div className="container">
          <div className="row">
            <div className={cs(styles.livingArtBodyLeft, 'col-12 col-md-4')}>
              <img
                src="./arrow-right.svg"
                alt="arrow right"
                className={styles.arrowRight}
              />

              <H3>{t('Before')}</H3>

              <LivingArtItem img="./living-art-01.png" title="" />

              <img
                src="./top-img.svg"
                alt="arrow right"
                className={styles.star}
              />
            </div>

            <div className={cs(styles.livingArtBodyCenter, 'col-12 col-md-5')}>
              <img src="./living-art.png" alt="phone" />
            </div>

            <div className={cs(styles.livingArtBodyRight, 'col-12 col-md-3')}>
              <img
                src="./arrow-right.svg"
                alt="arrow right"
                className={styles.arrowRight}
              />

              <H3>{t('After')}</H3>

              <div className={styles.livingArtImgGrid}>
                <div className={styles.livingArtImgItem}>
                  <LivingArtItem img="./living-art-02.png" title="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingArt;

type LivingArtItemProps = {
  img: string;
  title: string;
};

export const LivingArtItem: React.FC<LivingArtItemProps> = ({
  img,
  title,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.livingArtItem} {...props}>
      <img src={img} alt="avatar" />

      <div className={styles.livingArtItemTitle}>{t(title)}</div>
    </div>
  );
};
