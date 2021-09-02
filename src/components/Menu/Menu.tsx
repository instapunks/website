import * as React from 'react';
import styles from './Menu.module.scss';
import cs from 'clsx';

type MenuProps = {
  items: string[];
};

export const Menu: React.FC<MenuProps> = ({ items, ...props }) => {
  return (
    <nav className={styles.menu} {...props}>
      <ul className={styles.menuList}>
        {items.map((item, index) => (
          <li className={styles.menuItem} key={index}>
            <a href="menu" className={styles.menuLink}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MenuVertical: React.FC<MenuProps> = ({ items, ...props }) => {
  return (
    <nav className={cs(styles.menu, styles.menuVertical)} {...props}>
      <ul className={styles.menuList}>
        {items.map((item, index) => (
          <li className={styles.menuItem} key={index}>
            <a href="menu" className={styles.menuLink}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
