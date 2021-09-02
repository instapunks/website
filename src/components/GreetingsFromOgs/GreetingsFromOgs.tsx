import * as React from 'react';
import { useTranslation } from 'react-i18next';
import H3 from 'components/H3/H3';
import styles from './GreetingsFromOgs.module.scss';

type GreetingsFromOgsProps = unknown;

export const GreetingsFromOgs: React.FC<GreetingsFromOgsProps> = ({
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.greetingsFromOgs} {...props}>
      <div className={styles.greetingsFromOgsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>{t('Greetings from Instapunk OGs')}</H3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.greetingsFromOgsBody}>
        Greetings from Instapunk OGs BODY
      </div>
    </div>
  );
};

export default GreetingsFromOgs;
