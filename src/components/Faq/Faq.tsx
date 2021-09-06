import * as React from 'react';

import styles from './Faq.module.scss';
import H2 from 'components/H2/H2';
import Accordion from 'components/Accordion/Accordion';
import { useTranslation } from 'react-i18next';

type FaqProps = unknown;

export const Faq: React.FC<FaqProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.faq} {...props}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className={styles.faqHeader}>
              <H2>{t('FAQ')}</H2>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <Accordion
              items={[
                {
                  question:
                    'I am confused, what exactly Instapunks are all about?',
                  answer:
                    'We are building an open-source platform to help celebrities and influencers launch their NFT collections under 24 hours and at zero costs.',
                },
                {
                  question: 'How do plan to get attention of top celebrities?',
                  answer:
                    'We already did. However, to launch and manage thousands of NFT collections we need more people. So, we launched Instapunks – an NFT token that represents both an art piece and a permit-to-work on our platform as an NFT agent for the Instapunk’s alter-ego.',
                },
                {
                  question: 'Who is an NFT agent?',
                  answer:
                    'A person who helps celebrities with onboarding on our platform and supervises production and sales of their digital merchandize and art collections.',
                },
                {
                  question: 'What are the benefits for NFT agents?',
                  answer:
                    'You may communicate directly with celebrities on our platform. You get experience of launching and marketing famous art collections. You get royalties from collection sales.',
                },
                {
                  question: 'Is it difficult to be an NFT agent?',
                  answer:
                    'No. In fact, all processes are prepared, automated, and paid for by the platform.',
                },
                {
                  question: 'Do I have to work if I buy/mint an Instapunk?',
                  answer:
                    'No. You can just own your Instapunk and still receive some royalties.',
                },
                {
                  question: 'Could you tell me more about royalties?',
                  answer: `First, 5% royalty from all Instapunk secondary sales on Opensea are distributed among all NFT holders, proportionally to the number of Instapunks they own.
                    Second, if your Instapunk’s alter-ego launches an NFT collection on our platform (with or without your help) you will get 5% royalties from its sales. 
                    Third, additional 5% royalties from sales of celebrity NFT collections will go to 1 of 13 PunkDAOs, which include all Instapunks with similar background colors that reflect the number of Instagram followers of their alter-egos. You will own a share of DAO funds proportionally to the number of Instapunks with the same background color.
                    `,
                },
                {
                  question:
                    'What if my Instapunk’s alter-ego does not want to launch an NFT collection?',
                  answer: `Anticipating that some celebrities will express more interest in our art project than others, we set up a simple algorithm how the Collection can evolve. 
                    All Instagram Influencers, included in the original collection, have 100 days to onboard on the platform. However, if they chose not to do so, any Instagram influencer with a verified account with over 1 million followers can acquire any inactivated Instapunk on Opensea and change it identity via PunkDAO’s onchain approval. 
                    So, if your Instapunk’s alter-ego is not interested in digital art, in 3 months you can approach another Instagram influencer and propose to make a digital art collection together.  Alternatively, you can just keep and admire your Instapunk – it’s unique and forever yours.`,
                },
                {
                  question:
                    'How did you select 10,000 Instagram accounts that became the inspiration for the collection?',
                  answer:
                    'During several weeks we manually checked tens of thousand most popular Instagram accounts that belong to actors, singers, sportspersons, artists, fashion models, streamers, filmmakers, politicians, musicians, and other celebrities. Our aspiration was to create a top chart of most popular individual Instagram influencers, excluding all unverified accounts (accounts that do not have a blue checkbox next to it), corporate and brand accounts, anonymous accounts and accounts devoted to a hobby, an activity or a business that do not have a clearly identifiable personalities associated with them.',
                },
                {
                  question:
                    'How much does it cost to mint Instapunks and how this money will be used?',
                  answer: `Minting costs 0.07 ETH/per Instapunk + gas fees. You can mint up to 5 tokens in 1 transaction. 
                    The raised capital will be spent on contracting top Instagram influencers for marketing Instapunks platform, designing their NFT collections and integrating Instapunks with virtual metaverses.`,
                },
                {
                  question:
                    'Will all Instapunks be distributed randomly during minting?',
                  answer: `Before and during the minting ceremony no one knows which Instapunks they would get. To ensure fairness and randomness we use Chainlink VRF - onchain random number generation mechanism. Please join our discord for the detailed explanation.`,
                },

                {
                  question: 'What is Instapunk OG Global Auction?',
                  answer: `Instapunks collection is limited to 10,000 art pieces. 99% of the Collection was already maid. 1% is reserved for all Instagram users and crypto enthusiasts, who will bid with Ether to be included in the Collection. You don’t need a verified Instagram account to participate, and the number of your followers won’t matter. If you get into top 100 bidders a new Instapunk will be designed after you, and our community and designers will help you to launch one personal digital art collection free of charge.`,
                },

                {
                  question: 'Where NFT images are stored?',
                  answer: `InterPlanetary File Systems (IPFS) is used to store images for Instapunks and all NFT collections launched by their alter-egos.`,
                },

                {
                  question:
                    'Do background colors define Instapunks’ rarity/value?',
                  answer: `All Instapunks are unique and inspired by 10,000 different people some of whom are more active on Instagram than others. Instapunk background colors reflect the number of followers of their alter egos’ Instagram accounts. Instapunks made after most followed accounts have red, orange, yellow background colors. Accounts with less followers produced Instapunks with green, blue and purple backgrounds. In the future Instapunks will be able to change their colors via onchain transactions approved by the PunkDAO! Instapunks is a living art project!
                  However, Instagram popularity is just one factor, perhaps not the most important one, that might define the value of the NFT. For example, an Instapunk alter-ego with less followers on Instagram, on the other hand, can be more popular on other types of media, can be an active digital art collector or have a more active and crypto-savvy fan base interested in their idol’s NFT.
                  Finally, some Instapunk alter-egos might issue very successful digital collections, while others might not be interested in digital art at all.`,
                },

                {
                  question: 'What is PunkDAO?',
                  answer: `PunkDAO is a governance mechanism that allows all Instapunk collectors to shape the future of the Collection. Holders of Instapunk NFTs can propose actions and vote on activities proposed by other collectors. These actions and improvements can include but not limited to collaborations with top Instagram celebrities, marketing agencies, brands, technical integrations with metaverses, NFT marketplaces, and even changing technical principles of how the Collection works and evolves.`,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
