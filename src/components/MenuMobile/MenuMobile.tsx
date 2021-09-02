import { ButtonLarge } from 'components/Button/Button';
import { HamburgerClosse } from 'components/Hamburger/Hamburger';
import { MenuVertical } from 'components/Menu/Menu';
import Social from 'components/Social/Social';
import * as React from 'react';

import styles from './MenuMobile.module.scss';

type MenuMobileProps = {}

export const MenuMobile: React.FC<MenuMobileProps> = ({
  ...props
}) => {
  return (
    <div
      className={styles.menuMobile}
      {...props}
    >
      <div className={styles.menuMobileBody}>
        <div className={styles.menuMobileHamburger}>
          <HamburgerClosse />
        </div>

        <div className={styles.menuMobileMenu}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <MenuVertical
                  items={[
                    'Story',
                    'Roadmap',
                    'FAQ',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.menuMobileWallet}>
          <ButtonLarge>Connect Wallet</ButtonLarge>
        </div>

        <div className={styles.menuMobileSocial}>
          <div className={styles.menuMobileSocialBody}>
            <Social />
          </div>
        </div>

        <div className={styles.menuMobileFooter}>
          2021 instaLab, LLC
        </div>
      </div>
    </div>
  )
};

export default MenuMobile;