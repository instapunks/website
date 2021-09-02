import * as React from 'react';
import Image from 'next/image';
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
                Each Instapunk is unique. However, within 1 year their Instagram
                alter-egos can request InstaLabs to make one additional NFT for
                themselves by posting an Instagram story with #MintMeInstapunk
                hashtag.
              </TextLarge>
            </div>

            <div className="col-12 col-md-6">
              <TextLarge>
                The new NFT will have a different background color, and both
                Instapunks will get a special Ethereum texture.
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
                <Image src="./living-art-star.svg" alt="star" />

                <TextBold>
                  {t(
                    'After 1 year no additional minting will be possible and the whole art piece will be complete.'
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
              <Image
                src="./arrow-right.svg"
                alt="arrow right"
                className={styles.arrowRight}
              />

              <H3>Before</H3>

              <LivingArtItem img="./living-art-01.png" title="Owned by you" />

              <Image
                src="./top-img.svg"
                alt="arrow right"
                className={styles.star}
              />
            </div>

            <div className={cs(styles.livingArtBodyCenter, 'col-12 col-md-5')}>
              <Image src="./living-art.png" alt="phone" />
            </div>

            <div className={cs(styles.livingArtBodyRight, 'col-12 col-md-3')}>
              <Image
                src="./arrow-right.svg"
                alt="arrow right"
                className={styles.arrowRight}
              />

              <H3>After</H3>

              <div className={styles.livingArtImgGrid}>
                <div className={styles.livingArtImgItem}>
                  <LivingArtItem
                    img="./living-art-02.png"
                    title="Owned by you"
                  />
                </div>

                <div className={styles.livingArtImgItem}>
                  <LivingArtItem
                    img="./living-art-03.png"
                    title="Owned by @cristiano"
                  />
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
  return (
    <div className={styles.livingArtItem} {...props}>
      <Image src={img} alt="avatar" />

      <div className={styles.livingArtItemTitle}>{title}</div>
    </div>
  );
};
