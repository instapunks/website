import * as React from 'react';

import H2 from 'components/H2/H2';
import styles from './Minting.module.scss';
import { TextLarge } from 'components/Text/Text';
import {
  BtnMinus,
  BtnPlus,
  ButtonCircleOutline,
  ButtonLarge,
} from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';

type MintingProps = unknown;

export const Minting: React.FC<MintingProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.minting} {...props}>
      <div className="container">
        <div className="row row-align-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className={styles.mintingBody}>
              <div className={styles.mintingHeader}>
                <H2>{t('Minting')}</H2>
              </div>

              <TextLarge>
                {t(
                  'The costs of minting 1 Instapunk is 0.05 ETH + gas fees. \n The maximum number of mints per transaction is 20. \n At the revelation all Instapunks will be assigned randomly.'
                )}
              </TextLarge>

              <div className={styles.mintingSum}>{t('800/10,000 LEFT')}</div>

              <div className={styles.mintingQuantity}>
                <ButtonCircleOutline>
                  <BtnMinus />
                </ButtonCircleOutline>

                <Input value="2" />

                <ButtonCircleOutline>
                  <BtnPlus />
                </ButtonCircleOutline>
              </div>

              <div className={styles.mintingQuantitySubmit}>
                <ButtonLarge>{t('Mint now')}</ButtonLarge>
              </div>

              <div className={styles.mintingQuantityAgree}>
                <Checkbox name="agree" text="Agree with Terms and Conditions" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mintingLine}>
        <div className={styles.mintingLineItem}>
          <TextLarge>
            {t('Minting will star at 4:00 pm ET on the 1st of September 2021')}
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            {t('Minting will star at 4:00 pm ET on the 1st of September 2021')}
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            {t('Minting will star at 4:00 pm ET on the 1st of September 2021')}
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            {t('Minting will star at 4:00 pm ET on the 1st of September 2021')}
          </TextLarge>
        </div>

        <div className={styles.mintingLineItem}>
          <TextLarge>
            {t('Minting will star at 4:00 pm ET on the 1st of September 2021')}
          </TextLarge>
        </div>
      </div>
    </div>
  );
};

export default Minting;
