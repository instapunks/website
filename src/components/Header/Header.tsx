import { Button } from 'components/Button/Button';
import { Hamburger } from 'components/Hamburger/Hamburger';
import { Menu } from 'components/Menu/Menu';
import Social from 'components/Social/Social';
import * as React from 'react';
import styles from './Header.module.scss';

type HeaderProps = unknown;

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <header className={styles.header} {...props}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.headerBody}>
              <div className={styles.headerHamburger}>
                <Hamburger />
              </div>

              <div className={styles.headerMenu}>
                <Menu items={['Story', 'Roadmap', 'FAQ']} />
              </div>

              <div className={styles.headerRight}>
                <div className={styles.headerSocial}>
                  <Social />
                </div>

                <div className={styles.headerWallet}>
                  <Button>Connect Wallet</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
