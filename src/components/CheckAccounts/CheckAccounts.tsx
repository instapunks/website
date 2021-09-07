import * as React from 'react';

import styles from './CheckAccounts.module.scss';
import { useTranslation } from 'react-i18next';
import H3 from 'components/H3/H3';
import H1 from 'components/H1/H1';
import { ButtonLarge } from 'components/Button/Button';
import { Text } from 'components/Text/Text';
import { InputLeft } from 'components/Input/Input';

type CheckAccountsProps = unknown;

export const CheckAccounts: React.FC<CheckAccountsProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.checkAccounts} {...props}>
      <div className={styles.checkAccountsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>{t('Check Instagram accounts behind Instapunks')}</H3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.checkAccountsBody}>
              <div className={styles.checkAccountsColLeft}>
                <form
                  action="/"
                  method="post"
                  className={styles.checkAccountsForm}
                >
                  <div className={styles.checkAccountsFormItem}>
                    <Text>{t('Enter username')}</Text>
                  </div>

                  <div className={styles.checkAccountsFormItem}>
                    <InputLeft placeholder="@username" />
                  </div>

                  <div className={styles.checkAccountsFormItem}>
                    <ButtonLarge disabled={true}>{t('Check')}</ButtonLarge>
                  </div>

                  {/* <div className={styles.checkAccountsFormErrMsg}>
                    {t('Incorrect login')}
                  </div> */}
                </form>
              </div>

              <div className={styles.checkAccountsColRight}>
                <div>
                  <H1>?</H1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="./top-img.svg"
        alt="star"
        className={styles.checkAccountsStarImg}
      />
    </div>
  );
};

export default CheckAccounts;
