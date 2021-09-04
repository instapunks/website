import * as React from 'react';

import styles from './MenuMobile.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonLarge } from 'components/Button/Button';
import { HamburgerClosse } from 'components/Hamburger/Hamburger';
import { MenuVertical } from 'components/Menu/Menu';
import Social from 'components/Social/Social';

type MenuMobileProps = unknown;

export const MenuMobile: React.FC<MenuMobileProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.menuMobile} {...props}>
      <div className={styles.menuMobileBody}>
        <div className={styles.menuMobileHamburger}>
          <HamburgerClosse />
        </div>

        <div className={styles.menuMobileMenu}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <MenuVertical items={['Story', 'Roadmap', 'FAQ']} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.menuMobileWallet}>
          <ButtonLarge>{t('Connect Wallet')}</ButtonLarge>
        </div>

        <div className={styles.menuMobileSocial}>
          <div className={styles.menuMobileSocialBody}>
            <Social />
          </div>
        </div>

        <div className={styles.menuMobileFooter}>{t('2021 instaLab, LLC')}</div>
      </div>
    </div>
  );
};

export default MenuMobile;
