import * as React from 'react';

import styles from './Footer.module.scss';
import H2 from 'components/H2/H2';
import Social from 'components/Social/Social';

type FooterProps = unknown;

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <div className={styles.footer} {...props}>
      <div className={styles.footerHeader}>
        <div className="container">
          <div className="row row-align-center">
            <div className="col-12 col-md-6">
              <div className={styles.footerSocial}>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBody}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H2>2021 instaLab, LLC</H2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
