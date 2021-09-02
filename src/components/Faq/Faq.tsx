import * as React from 'react';
import styles from './Faq.module.scss';
import H2 from 'components/H2/H2';
import Accordion from 'components/Accordion/Accordion';

type FaqProps = unknown;

export const Faq: React.FC<FaqProps> = ({ ...props }) => {
  return (
    <div className={styles.faq} {...props}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className={styles.faqHeader}>
              <H2>FAQ</H2>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <Accordion
              items={[
                {
                  question:
                    'How did you select 10,000 Instagram accounts that became the inspiration for the collection?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question:
                    'I have over 1 million Instagram followers can you make me a personal Instapunk?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question: 'Why Instapunks are free to mint?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question:
                    'What can I do with my InstaPunk? How can I earn ETH?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                  open: true,
                },
                {
                  question: 'What is InstaPunk DAO?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question:
                    'What would be a procedure for minting 100 Instapunks for crypto enthusiasts?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question:
                    'How Instapunks are different from other NFTs collections?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question: 'Are some Instapunks more valuable than others?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question: 'Do Instapunks have names?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
                },
                {
                  question: 'What is Instapunks’ smart contract?',
                  answer:
                    'Each InstaPunk is algorithmically generated by combining 123 properties with varying rarities in nine categories (Furs, Backgrounds, Eyes, Mouths, Shirts, Hats, Earrings, Necklaces, & Beards).',
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
