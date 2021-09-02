import * as React from 'react';

import { useTranslation } from 'react-i18next';
import styles from './StarsSlider.module.scss';

type StarsSliderProps = {}

export const StarsSlider: React.FC<StarsSliderProps> = ({
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.starsSlider}
      {...props}
    >
      StarsSlider
    </div>
  )
};

export default StarsSlider;