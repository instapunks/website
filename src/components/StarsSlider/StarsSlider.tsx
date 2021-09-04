import * as React from 'react';

import styles from './StarsSlider.module.scss';
import Star from 'components/Star/Star';

type StarsSliderProps = unknown;

const star = (name: string, insta: string) => ({name, insta})
const stars = [
  star("Cristiano ronaldo", "@cristiano"),
  star("Selena gomez", "@selenagomez"),
  star("Jason statham", "@jasonstatham"),
  star("Dwayne Douglas", "@therock"),
  star("Ariana grande", "@arianagrande"),
  star("Keanu reeves", "@keanureeves"),
  star("Kim kardashian", "@kimkardashian"),
  star("Kylie jenner", "@kyliejenner"),
  star("Mike tyson", "@miketyson"),
];

export const StarsSlider: React.FC<StarsSliderProps> = ({ ...props }) => {
  return (
    <div className={styles.starsSlider} {...props}>
      {stars.map(({name, insta}, index) => (
          <Star
            key={insta}
            img={`./star-${('0' + (index + 1)).substr(-2)}.png`}
            name={name}
            nickname={insta}
            verified={true}
            className={styles.star}
          />
        ))}
    </div>
  );
};

export default StarsSlider;
