import * as React from 'react';

import styles from './StarsSlider.module.scss';
import Star from 'components/Star/Star';
import Carousel, {
  autoplayPlugin,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
    <div className={styles.starsSlider} {...props}>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 1500,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 6,
            },
          },
        ]}
        breakpoints={{
          340: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          480: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
          800: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
          1000: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4,
                },
              },
            ],
          },
          1200: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 5,
                },
              },
            ],
          },
          1400: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 6,
                },
              },
            ],
          },
        }}
        animationSpeed={500}
      >
        {stars.map(({ name, insta }, index) => (
          <Star
            key={insta}
            img={`./star-${('0' + (index + 1)).substr(-2)}.png`}
            name={name}
            nickname={insta}
            verified={true}
            className={styles.star}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default StarsSlider;
