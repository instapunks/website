import * as React from 'react';

import styles from './Text.module.scss';

type TextProps = {
  type?: 'text' | 'TextLarge' | 'textLead' | 'textBold';
};

const TextBase: React.FC<TextProps> = ({ type, ...props }) => {
  let styleType;

  switch (type) {
    case 'TextLarge':
      styleType = styles.TextLarge;
      break;

    case 'textLead':
      styleType = styles.textLead;
      break;

    case 'textBold':
      styleType = styles.textBold;
      break;

    default:
      styleType = styles.text;
  }

  return (
    <p className={styleType} {...props}>
      {props.children}
    </p>
  );
};

export const Text: React.FC = (props) => <TextBase {...props} />;
export const TextLarge: React.FC = (props) => (
  <TextBase type="TextLarge" {...props} />
);
export const TextLead: React.FC = (props) => (
  <TextBase type="textLead" {...props} />
);
export const TextBold: React.FC = (props) => (
  <TextBase type="textBold" {...props} />
);
