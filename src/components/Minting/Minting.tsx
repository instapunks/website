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

  const [amount, setAmount] = React.useState(1);
  const [checked, setChecked] = React.useState(true);

  const handleIncrement = React.useCallback(() => {
    setAmount(Math.max(1, Math.min(5, amount + 1)));
  }, [setAmount, amount]);

  const handleDecrement = React.useCallback(() => {
    setAmount(Math.max(1, Math.min(5, amount - 1)));
  }, [setAmount, amount]);

  const handleChange = React.useCallback(
    (next: string) => {
      const num = +next;
      if (!Number.isNaN(num)) {
        setAmount(num);
      }
    },
    [setAmount, amount]
  );

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
                  'The costs of minting 1 Instapunk is 0.07 ETH + gas fees. The maximum number of mints per transaction is 5. At the revelation all Instapunks will be assigned randomly.'
                )}
              </TextLarge>

              <div className={styles.mintingSum}>9900 {t('LEFT')}</div>

              <div className={styles.mintingQuantity}>
                <ButtonCircleOutline onClick={handleDecrement}>
                  <BtnMinus />
                </ButtonCircleOutline>

                <Input value={amount.toString()} onChange={handleChange} />

                <ButtonCircleOutline onClick={handleIncrement}>
                  <BtnPlus />
                </ButtonCircleOutline>
              </div>

              <div className={styles.mintingQuantitySubmit}>
                <ButtonLarge disabled>{t('Mint now')}</ButtonLarge>
              </div>

              <div className={styles.mintingQuantityAgree}>
                <Checkbox
                  checked={checked}
                  name="agree"
                  text="Agree with Terms and Conditions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mintingLine}>
        <div className={styles.mintingLineItem}>
          <TextLarge>4:00 pm ET on the 9th of September, 2021</TextLarge>
        </div>
        <div className={styles.mintingLineItem}>
          <TextLarge>4:00 pm ET on the 9th of September, 2021</TextLarge>
        </div>
        <div className={styles.mintingLineItem}>
          <TextLarge>4:00 pm ET on the 9th of September, 2021</TextLarge>
        </div>
        <div className={styles.mintingLineItem}>
          <TextLarge>4:00 pm ET on the 9th of September, 2021</TextLarge>
        </div>
        <div className={styles.mintingLineItem}>
          <TextLarge>4:00 pm ET on the 9th of September, 2021</TextLarge>
        </div>
      </div>
    </div>
  );
};

export default Minting;
