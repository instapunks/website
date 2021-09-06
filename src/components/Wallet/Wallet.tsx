import { useWeb3React } from '@web3-react/core';
import { Button } from 'components/Button/Button';
import useEagerConnect from 'hooks/useEagerConnect';
import { useTranslation } from 'react-i18next';

export type WalletProps = unknown;

export const Wallet: React.FC<WalletProps> = () => {
  const { t } = useTranslation();

  const triedToEagerConnect = useEagerConnect();

  const { account, error } = useWeb3React();

  console.log({
    account,
    error,
  });
  return <Button>{t('Connect Wallet')}</Button>;
};
