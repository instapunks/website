import * as React from 'react';

import cs from 'clsx';
import styles from './Tokenomics.module.scss';
import { TextBold, Text } from 'components/Text/Text';
import H3 from 'components/H3/H3';

type TokenomicsProps = {}

export const Tokenomics: React.FC<TokenomicsProps> = ({
  ...props
}) => {
  return (
    <div
      className={styles.tokenomics}
      {...props}
    >
      <div className={styles.tokenomicsHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <H3>INNOVATIVEHOLD-TO-EARN TOKENOMICS</H3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.tokenomicsList}>
              <div className={styles.tokenomicsItem}>
                <H3>USE</H3>
                <TextBold>Personal use, no commercial use.</TextBold>
                <Text>
                  Owning a painting of a famous person does not give you the right to use this person’s image for commercial purposes. You can use your InstaPunks for personal use and trading only.
                </Text>
              </div>

              <div className={styles.tokenomicsItem}>
                <H3>EARN</H3>
                <TextBold>Earn ETH just by holding your Instapunk.</TextBold>
                <Text>
                  5% royalty fees from every sale on Opensea are automatically distributed among all NFT holders proportionally to the number of NFTs they hold. <br />
                  5% fees goes to the team.
                </Text>
              </div>

              <div className={styles.tokenomicsItem}>
                <H3>RULE</H3>
                <TextBold>Decide on the future of the art via PunkDAO.</TextBold>
                <Text>
                  Should InstaPunks “age” over time like their alter egos? Can new InstaPunks ever be minted? All NFT holders can collectively shape the future of this art project.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Tokenomics;