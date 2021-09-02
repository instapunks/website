import * as React from 'react';
import Image from 'next/image';
import cs from 'clsx';
import H2 from 'components/H2/H2';
import styles from './GlobalAuction.module.scss';

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
  return (
    <div className={styles.globalAuction} {...props}>
      <div className="container">
        <div className={cs(styles.globalAuctionHeader, 'row')}>
          <div className="col-12">
            <H2>INSTAPUNK OG GLOBAL AUCTION</H2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-10 offset-md-2">
            <div className={styles.globalAuctionList}>
              {items.map((item, index) => (
                <div className={styles.globalAuctionItem} key={index}>
                  <Item
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
  return (
    <div className={styles.Item} {...props}>
      <Image src={img} alt={name} className={styles.ItemImg} />

      <div className={styles.ItemBody}>
        <div className={styles.ItemName}>{name}</div>

        <div className={styles.ItemNicknameWrapper}>
          <div className={styles.ItemNickname}>{nickname}</div>

          {verified && (
            <Image
              src="./verified.svg"
              alt="verified"
              className={styles.ItemVerified}
            />
          )}
        </div>
      </div>
    </div>
  );
};
