import * as React from 'react';

import styles from './CheckAccounts.module.scss';
import cs from 'clsx';
import H3 from 'components/H3/H3';
import H1 from 'components/H1/H1';

type CheckAccountsProps = {}

export const CheckAccounts: React.FC<CheckAccountsProps> = ({
  ...props
}) => {
  return (
    <div
      className={styles.checkAccounts}
      {...props}
    >
      <div className={styles.checkAccountsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>Check Instagram accounts behind Instapunks </H3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.checkAccountsBody}>
              <div className={styles.checkAccountsColLeft}>
                Form
              </div>

              <div className={styles.checkAccountsColRight}>
                <H1>?</H1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src="./top-img.svg" alt="star" className={styles.checkAccountsStarImg} />
    </div>
  )
};

export default CheckAccounts;