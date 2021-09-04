import * as React from 'react';

import styles from './Menu.module.scss';
import cs from 'clsx';
import { useTranslation } from 'react-i18next';

type MenuProps = {
  items: string[];
};

export const Menu: React.FC<MenuProps> = ({ items, ...props }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.menu} {...props}>
      <ul className={styles.menuList}>
        {items.map((item, index) => (
          <li className={styles.menuItem} key={index}>
            <a href="menu" className={styles.menuLink}>
              {t(item)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MenuVertical: React.FC<MenuProps> = ({ items, ...props }) => {
  const { t } = useTranslation();

  return (
    <nav className={cs(styles.menu, styles.menuVertical)} {...props}>
      <ul className={styles.menuList}>
        {items.map((item, index) => (
          <li className={styles.menuItem} key={index}>
            <a href="menu" className={styles.menuLink}>
              {t(item)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
