import * as React from 'react';
import styles from './Icon.module.scss';
import cs from 'clsx';

type IconProps = unknown;

export const IconDesc: React.FC<IconProps> = () => {
  return <div className={cs(styles.icon, styles.iconDesc)}></div>;
};

export const IconInst: React.FC<IconProps> = () => {
  return <div className={cs(styles.icon, styles.iconInst)}></div>;
};

export const IconTw: React.FC<IconProps> = () => {
  return <div className={cs(styles.icon, styles.iconTw)}></div>;
};

export const IconTg: React.FC<IconProps> = () => {
  return <div className={cs(styles.icon, styles.iconTg)}></div>;
};

export const IconPlus: React.FC<IconProps> = () => {
  return <div className={cs(styles.icon, styles.iconPlus)}></div>;
};

export const IconMinus: React.FC<IconProps> = () => {
  return <div className={cs(styles.icon, styles.iconMinus)}></div>;
};
