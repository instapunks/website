import * as React from 'react';
import Image from 'next/image';
import H2 from 'components/H2/H2';
import cs from 'clsx';
import styles from './Colors.module.scss';
import { Text, TextBold, TextLarge } from 'components/Text/Text';

type ColorsProps = unknown;

export const Colors: React.FC<ColorsProps> = ({ ...props }) => {
  return (
    <div className={styles.colors} {...props}>
      <div className="container">
        <div className={cs(styles.colorsHeader, 'row')}>
          <div className="col-12">
            <H2>Instapunk background colors will evolve over time</H2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-5">
            <div className={styles.colorsDesc}>
              <TextLarge>
                At minting all Instapunks received background colors depending
                on the number of followers their real-world alter egos have on
                Instagram.
              </TextLarge>

              <TextLarge>
                Once the number of followers change, Instapunk colors can be
                updated onchain via PunkDAO, so the whole art collection will be
                living and evolving on Ethereum.
              </TextLarge>
            </div>
          </div>

          <div className="col-12 col-md-6 offset-md-1">
            <div className={styles.colorsSpectrum}>
              <TextBold>Instapunk background colors</TextBold>

              <div className={styles.colorsSpectrumTextSm}>
                Followers (millions)
              </div>

              <Image
                src="./spectrum.svg"
                alt="Spectrum"
                className={styles.colorsSpectrumImg}
              />
              <Image
                src="./spectrum--sm.svg"
                alt="Spectrum"
                className={styles.colorsSpectrumImgSm}
              />

              <div className={styles.colorsSpectrumTextSm}>
                Wavelenght (nanometers)
              </div>

              <Text>The visible light spectrum</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
