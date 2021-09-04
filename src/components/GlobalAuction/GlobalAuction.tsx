import * as React from 'react';

import cs from 'clsx';
import H2 from 'components/H2/H2';
import styles from './GlobalAuction.module.scss';
import { ButtonCircleWhite } from 'components/Button/Button';
import { IconArrowRightBtn } from 'components/Icon/Icon';
import { useTranslation } from 'react-i18next';

type GlobalAuctionProps = {
  items: {
    img: string;
    name: string;
    nickname: string;
    verified?: boolean;
  }[];
};

export const GlobalAuction: React.FC<GlobalAuctionProps> = ({
  items,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.globalAuction} {...props}>
      <img
        src="./top-img.svg"
        alt="star"
        className={styles.globalAuctionImgStar}
      />

      <div className="container">
        <div className={cs(styles.globalAuctionHeader, 'row')}>
          <div className="col-12">
            <H2>{t('INSTAPUNK OG GLOBAL AUCTION')}</H2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-10 offset-md-2">
            <div className={styles.globalAuctionList}>
              {items.map((item, index) => (
                <div className={styles.globalAuctionItem} key={index}>
                  <Item
                    key={index}
                    img={item.img}
                    name={item.name}
                    nickname={item.nickname}
                    verified={item.verified}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalAuction;

type ItemProps = {
  img: string;
  name: string;
  nickname: string;
  verified?: boolean;
};

const Item: React.FC<ItemProps> = ({
  img,
  name,
  nickname,
  verified,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Item} {...props}>
      <img src={img} alt={t(name)} className={styles.ItemImg} />

      <div className={styles.ItemBody}>
        <div className={styles.ItemName}>{t(name)}</div>

        <div className={styles.ItemNicknameWrapper}>
          <div className={styles.ItemNickname}>{t(nickname)}</div>

          {verified && (
            <svg
              className={styles.ItemVerified}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.1663 10.001L17.133 7.67598L17.4163 4.60098L14.408 3.91764L12.833 1.25098L9.99967 2.46764L7.16634 1.25098L5.59134 3.90931L2.58301 4.58431L2.86634 7.66764L0.833008 10.001L2.86634 12.326L2.58301 15.4093L5.59134 16.0926L7.16634 18.751L9.99967 17.526L12.833 18.7426L14.408 16.0843L17.4163 15.401L17.133 12.326L19.1663 10.001ZM7.81634 13.3426L5.83301 11.3426C5.50801 11.0176 5.50801 10.4926 5.83301 10.1676L5.89134 10.1093C6.21634 9.78431 6.74967 9.78431 7.07467 10.1093L8.41634 11.4593L12.708 7.15931C13.033 6.83431 13.5663 6.83431 13.8913 7.15931L13.9497 7.21764C14.2747 7.54264 14.2747 8.06764 13.9497 8.39264L9.01634 13.3426C8.67467 13.6676 8.14967 13.6676 7.81634 13.3426Z" />
            </svg>
          )}
        </div>

        <ButtonCircleWhite>
          <IconArrowRightBtn />
        </ButtonCircleWhite>
      </div>
    </div>
  );
};
