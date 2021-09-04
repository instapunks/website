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
                'Instapunks is a collection of living digital art collectables inspired by 10,000 Instagram influencers. The collection was not randomly generated: each Instapunk was designed by InstaLabs after its real-world alter ego.'
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
