import * as React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useTranslation } from 'react-i18next';
import H3 from 'components/H3/H3';
import styles from './GreetingsFromOgs.module.scss';
import VideoItem from 'components/VideoItem/VideoItem';

type GreetingsFromOgsProps = unknown;

export const GreetingsFromOgs: React.FC<GreetingsFromOgsProps> = ({
  ...props
}) => {
  const { t } = useTranslation();

  const video = (
    name: string,
    desc: string,
    nickname: string,
    video: string
  ) => ({
    name,
    desc,
    nickname: '@' + nickname,
    video,
  });

  const videos = [
    video(
      'Dean Norris',
      'Actor - Breaking Bad',
      'deanjnorris',
      '/video/Dean Norris.mp4'
    ),
    video(
      'Gabby Douglas',
      'Olympic Gold Medalist',
      'gabbycvdouglas',
      '/video/Gabby Douglas.mp4'
    ),
    video(
      'Nigel Farage',
      'Leader of the UK Brexit Party',
      'nigel_farage',
      '/video/Nigel Farage.mp4'
    ),
    video(
      'Joseph Gannascoli',
      'Actor - The Sopranos',
      'josephr.gannascoli',
      '/video/Joseph Gannascoli.mp4'
    ),
    video(
      'Lindsey Pelas',
      'Actress, Entrepreneur, Model',
      'lindseypelas',
      '/video/Lindsey Pelas.mp4'
    ),
  ];

  return (
    <div className={styles.greetingsFromOgs} {...props}>
      <div className={styles.greetingsFromOgsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>{t('Greetings from Instapunk OGs')}</H3>
            </div>
          </div>
        </div>
        <div className={styles.greetingsFromOgsBody}>
          <Swiper slidesPerView="auto" centeredSlides={true} spaceBetween={40}>
            {videos.map((props, index) => (
              <SwiperSlide key={index} className={styles.greetingsFromOgsItem}>
                <VideoItem {...props} verified={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GreetingsFromOgs;
