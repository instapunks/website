import * as React from 'react';

import cs from 'clsx';
import { useTranslation } from 'react-i18next';
import H1 from 'components/H1/H1';

import styles from './Top.module.scss';
import { TextLead } from 'components/Text/Text';

type TopProps = unknown;

export const Top: React.FC<TopProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.top} {...props}>
      <div className="container">
        <div className="row">
          <div className={cs(styles.topHeader, 'col-12')}>
            <H1>
              {t('INSTA')}
              <span className={styles.topWordBreak}>{t('PUNKS')}</span>
            </H1>
          </div>

          <div className="col-12 col-md-6 offset-md-1">
            <TextLead>
              {t(
                'Instapunks is a collection of living digital art collectables inspired by 10,000 Instagram influencers. In addition to aesthetic pleasure, each art piece gives its owner the right to become an official NFT agent for its Instapunk’s alter-ego. NFT agents help celebrities with onboarding and management of their digital merchandise and receive 10% royalty from all sales.'
              )}
            </TextLead>
          </div>
        </div>
      </div>

      <img src="./top-img.svg" alt="icon star" className={styles.topImg} />
    </div>
  );
};

export default Top;
