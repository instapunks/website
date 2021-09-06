import React, { useState } from 'react';

import styles from './Accordion.module.scss';
import cs from 'clsx';
import { Text, TextBold } from 'components/Text/Text';
import { IconMinus, IconPlus } from 'components/Icon/Icon';
import { useTranslation } from 'react-i18next';

type AccordionProps = {
  items: {
    question: string;
    answer: string;
    open?: boolean;
  }[];
};

export const Accordion: React.FC<AccordionProps> = ({ items, ...props }) => {
  const [state, setState] = useState({ open: 0 });

  return (
    <div className={styles.accordion} {...props}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          open={index === state.open}
          onOpen={() => setState({ open: index })}
        />
      ))}
    </div>
  );
};

export default Accordion;

type AccordionItemProps = {
  question: string;
  answer: string;
  open?: boolean;
  onOpen: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  open,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={cs(styles.accordionItem, open && styles.accordionItemOpen)}
      {...props}
    >
      <div className={styles.question} onClick={props.onOpen}>
        <TextBold>{t(question)}</TextBold>

        <div className={styles.questionIcon}>
          {open ? <IconMinus /> : <IconPlus />}
        </div>
      </div>

      <div className={styles.answer}>
        <Text>{t(answer)}</Text>
      </div>
    </div>
  );
};
