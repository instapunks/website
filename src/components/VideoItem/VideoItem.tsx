import { ButtonCircle } from 'components/Button/Button';
import { IconPlay } from 'components/Icon/Icon';
import * as React from 'react';

import { useTranslation } from 'react-i18next';
import styles from './VideoItem.module.scss';

type VideoItemProps = {
  img: string;
  name: string;
  desc: string;
  nickname: string;
  verified?: boolean;
};

export const VideoItem: React.FC<VideoItemProps> = ({
  img,
  name,
  desc,
  nickname,
  verified,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.videoItem} {...props}>
      <div className={styles.videoItemImgWraper}>
        <img src={img} alt={name} className={styles.videoItemImg} />

        <ButtonCircle>
          <IconPlay />
        </ButtonCircle>
      </div>

      <div className={styles.videoItemName}>{t(name)}</div>

      <div className={styles.videoItemDesc}>{t(desc)}</div>

      <div className={styles.videoItemNicknameWrapper}>
        <div className={styles.videoItemNickname}>{t(nickname)}</div>

        {verified && (
          <svg
            className={styles.videoItemVerified}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.1663 10.001L17.133 7.67598L17.4163 4.60098L14.408 3.91764L12.833 1.25098L9.99967 2.46764L7.16634 1.25098L5.59134 3.90931L2.58301 4.58431L2.86634 7.66764L0.833008 10.001L2.86634 12.326L2.58301 15.4093L5.59134 16.0926L7.16634 18.751L9.99967 17.526L12.833 18.7426L14.408 16.0843L17.4163 15.401L17.133 12.326L19.1663 10.001ZM7.81634 13.3426L5.83301 11.3426C5.50801 11.0176 5.50801 10.4926 5.83301 10.1676L5.89134 10.1093C6.21634 9.78431 6.74967 9.78431 7.07467 10.1093L8.41634 11.4593L12.708 7.15931C13.033 6.83431 13.5663 6.83431 13.8913 7.15931L13.9497 7.21764C14.2747 7.54264 14.2747 8.06764 13.9497 8.39264L9.01634 13.3426C8.67467 13.6676 8.14967 13.6676 7.81634 13.3426Z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default VideoItem;
