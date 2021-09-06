import * as React from 'react';

import { useTranslation } from 'react-i18next';
import H3 from 'components/H3/H3';
import styles from './GreetingsFromOgs.module.scss';
import VideoItem from 'components/VideoItem/VideoItem';
import Carousel, {
  autoplayPlugin,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

type GreetingsFromOgsProps = unknown;

export const GreetingsFromOgs: React.FC<GreetingsFromOgsProps> = ({
  ...props
}) => {
  const { t } = useTranslation();

  const carouselConfig = (numberOfSlides: number) => ({
    plugins: [
      'infinite',
      'centered',
      {
        resolve: autoplayPlugin,
        options: {
          interval: 1500,
        },
      },
      {
        resolve: slidesToShowPlugin,
        options: {
          numberOfSlides,
        },
      },
    ],
  });

  return (
    <div className={styles.greetingsFromOgs} {...props}>
      <div className={styles.greetingsFromOgsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>{t('Greetings from Instapunk OGs')}</H3>

              <div className={styles.greetingsFromOgsBody}>
                <Carousel
                  {...carouselConfig(3)}
                  breakpoints={{
                    600: carouselConfig(1),
                    900: carouselConfig(2),
                  }}
                >
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
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingsFromOgs;
