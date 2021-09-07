import * as React from 'react';

import Ariana from 'assets/images/stars/Ariana.png';
import Cristiano from 'assets/images/stars/Cristiano.png';
import Jason from 'assets/images/stars/Jason.png';
import Keanu from 'assets/images/stars/Keanu.png';
import Kim from 'assets/images/stars/Kim.png';
import Kylie from 'assets/images/stars/Kylie.png';
import Mike from 'assets/images/stars/Mike.png';
import Paris from 'assets/images/stars/Paris.png';
import Rock from 'assets/images/stars/Rock.png';
import Selena from 'assets/images/stars/Selena.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import styles from './StarsSlider.module.scss';
import Star from 'components/Star/Star';

type StarsSliderProps = unknown;

const star = (name: string, insta: string, image: StaticImageData) => ({
  name,
  insta,
  image,
});
const stars = [
  star('Kylie jenner', '@kyliejenner', Kylie),
  star('Cristiano ronaldo', '@cristiano', Cristiano),
  star('Selena gomez', '@selenagomez', Selena),
  star('Jason statham', '@jasonstatham', Jason),
  star('Dwayne Douglas', '@therock', Rock),
  star('Ariana grande', '@arianagrande', Ariana),
  star('Keanu reeves', '@keanureeves', Keanu),
  star('Kim kardashian', '@kimkardashian', Kim),
  star('Mike tyson', '@miketyson', Mike),
  star('Paris Hilton', '@parishilton', Paris),
];

export const StarsSlider: React.FC<StarsSliderProps> = ({ ...props }) => {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={true}
      mousewheel={true}
      spaceBetween={20}
      className={styles.starsSlider}
      loop={true}
    >
      {stars.map(({ name, insta, image }) => (
        <SwiperSlide key={insta} className={styles.star}>
          <Star img={image.src} name={name} nickname={insta} verified={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StarsSlider;
