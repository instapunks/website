import * as React from 'react';
import styles from './StarsSlider.module.scss';

type StarsSliderProps = unknown;

export const StarsSlider: React.FC<StarsSliderProps> = ({ ...props }) => {
  return (
    <div className={styles.starsSlider} {...props}>
      StarsSlider
    </div>
  );
};

export default StarsSlider;
