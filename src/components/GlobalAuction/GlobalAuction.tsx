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
    </div>
  );
};
