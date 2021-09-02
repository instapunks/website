import * as React from 'react';

import styles from './Icon.module.scss';
import cs from 'clsx';

type IconProps = {}

export const IconDesc: React.FC<IconProps> = ({
  ...props
}) => {
  return (
    <div className={cs(styles.icon, styles.iconDesc)}></div>
  )
}

export const IconInst: React.FC<IconProps> = ({
  ...props
}) => {
  return (
    <div className={cs(styles.icon, styles.iconInst)}></div>
  )
}

export const IconTw: React.FC<IconProps> = ({
  ...props
}) => {
  return (
    <div className={cs(styles.icon, styles.iconTw)}></div>
  )
}

export const IconTg: React.FC<IconProps> = ({
  ...props
}) => {
  return (
    <div className={cs(styles.icon, styles.iconTg)}></div>
  )
}

export const IconPlus: React.FC<IconProps> = ({
  ...props
}) => {
  return (
    <div className={cs(styles.icon, styles.iconPlus)}></div>
  )
}

export const IconMinus: React.FC<IconProps> = ({
  ...props
}) => {
  return (
    <div className={cs(styles.icon, styles.iconMinus)}></div>
  )
}