import * as React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import styles from './StarsSlider.module.scss';
import Star from 'components/Star/Star';

type StarsSliderProps = unknown;

const star = (name: string, insta: string) => ({ name, insta });
const stars = [
  star('Cristiano ronaldo', '@cristiano'),
  star('Selena gomez', '@selenagomez'),
  star('Jason statham', '@jasonstatham'),
  star('Dwayne Douglas', '@therock'),
  star('Ariana grande', '@arianagrande'),
  star('Keanu reeves', '@keanureeves'),
  star('Kim kardashian', '@kimkardashian'),
  star('Kylie jenner', '@kyliejenner'),
  star('Mike tyson', '@miketyson'),
];

export const StarsSlider: React.FC<StarsSliderProps> = ({ ...props }) => {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={true}
      mousewheel={true}
      spaceBetween={20}
      className={styles.starsSlider}
      initialSlide={4}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
    >
      {stars.map(({ name, insta }, index) => (
        <SwiperSlide key={insta} className={styles.star}>
          <Star
            img={`./star-${('0' + (index + 1)).substr(-2)}.png`}
            name={name}
            nickname={insta}
            verified={true}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StarsSlider;
