import * as React from 'react';

import styles from './Roadmap.module.scss';
import cs from 'clsx';
import { useTranslation } from 'react-i18next';
import { TextLarge } from 'components/Text/Text';
import H2 from 'components/H2/H2';

type RoadmapProps = unknown;

export const Roadmap: React.FC<RoadmapProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.roadmap} {...props}>
      <div className="container">
        <div className={cs(styles.roadmapHeader, 'row')}>
          <div className="col-12">
            <H2>{t('ACTIVATION ROADMAP')}</H2>
          </div>
        </div>

        <div className="row">
          <div className={cs(styles.roadmapStarWrapper, 'col-12 col-md-7')}>
            <img
              src="./top-img.svg"
              alt="star"
              className={styles.roadmapStarImg}
            />
          </div>

          <div className="col-12 col-md-5">
            <div className={styles.roadmapList}>
              <div className={styles.roadmapItem}>
                <div className={styles.roadmapItemStatus}>
                  25
                  <img src="./percent.svg" alt="percent" />
                </div>
                <div className={styles.roadmapItemText}>
                  <TextLarge>
                    {t(
                      'Establish PunkDAO to shape the future of Instapunks together.'
                    )}
                  </TextLarge>
                </div>
              </div>

              <div className={styles.roadmapItem}>
                <div className={styles.roadmapItemStatus}>
                  50
                  <img src="./percent.svg" alt="percent" />
                </div>
                <div className={styles.roadmapItemText}>
                  <TextLarge>
                    {t(
                      'Spend 50 ETH on Instagram influencers to promote Instapunks.'
                    )}
                  </TextLarge>
                </div>
              </div>

              <div className={styles.roadmapItem}>
                <div className={styles.roadmapItemStatus}>
                  75
                  <img src="./percent.svg" alt="percent" />
                </div>
                <div className={styles.roadmapItemText}>
                  <TextLarge>
                    {t(
                      'Buy an Estate in Decentraland / Sandbox to integrate Instapunks.'
                    )}
                  </TextLarge>
                </div>
              </div>

              <div className={styles.roadmapItem}>
                <div className={styles.roadmapItemStatus}>
                  100
                  <img src="./percent.svg" alt="percent" />
                </div>
                <div className={styles.roadmapItemText}>
                  <TextLarge>
                    {t(
                      'Design 100 additional NFTs inspired by the winners of the Instapunk global auction.'
                    )}
                  </TextLarge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
