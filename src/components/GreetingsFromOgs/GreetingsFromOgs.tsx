import * as React from 'react';

import { useTranslation } from 'react-i18next';
import H3 from 'components/H3/H3';
import styles from './GreetingsFromOgs.module.scss';
import VideoItem from 'components/VideoItem/VideoItem';

type GreetingsFromOgsProps = unknown;

export const GreetingsFromOgs: React.FC<GreetingsFromOgsProps> = ({
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.greetingsFromOgs} {...props}>
      <div className={styles.greetingsFromOgsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>{t('Greetings from Instapunk OGs')}</H3>

              <div className={styles.greetingsFromOgsBody}>
                {Array(3)
                  .fill(0)
                  .map((el, index) => (
                    <VideoItem
                      key={index}
                      img="./videoItem-01.png"
                      name="Dean Norris"
                      desc="Actor - Breaking Bad"
                      nickname="@deanjnorris"
                      verified={true}
                      className={styles.greetingsFromOgsItem}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingsFromOgs;
