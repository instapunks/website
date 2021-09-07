import MetaMaskOnboarding from '@metamask/onboarding';
import { Button } from 'components/Button/Button';
import { useWeb3React } from '@web3-react/core';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { injected } from '../../state/provider/connectors';
import useENSName from '../../hooks/useENSName';
import type { BigNumberish } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';
import useEagerConnect from 'hooks/useEagerConnect';

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const EXPLORERS = {
  1: 'etherscan.com',
  56: 'bscscan.com',
};

export function formatEtherscanLink(
  type: 'Account' | 'Transaction',
  data: [number, string]
) {
  switch (type) {
    case 'Account': {
      const [chainId, address] = data;
      return `https://${EXPLORERS[chainId]}/address/${address}`;
    }
    case 'Transaction': {
      const [chainId, hash] = data;
      return `https://${EXPLORERS[chainId]}/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);

type Props = {
  triedToEagerConnect: boolean;
};

export const Wallet = () => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
  } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  // initialize metamask onboarding
  const onboarding = useRef<MetaMaskOnboarding>();

  useLayoutEffect(() => {
    onboarding.current = new MetaMaskOnboarding();
  }, []);

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      onboarding.current?.stopOnboarding();
    }
  }, [active, error]);

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== 'string') {
    const hasMetaMaskOrWeb3Available =
      MetaMaskOnboarding.isMetaMaskInstalled() ||
      (window as any)?.ethereum ||
      (window as any)?.web3;

    return (
      <div>
        {hasMetaMaskOrWeb3Available ? (
          <Button
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {MetaMaskOnboarding.isMetaMaskInstalled()
              ? 'Connect to Wallet'
              : 'Connect to Wallet'}
          </Button>
        ) : (
          <Button onClick={() => onboarding.current?.startOnboarding()}>
            Install Metamask
          </Button>
        )}
      </div>
    );
  }

  return (
    <Button
      {...{
        href: formatEtherscanLink('Account', [chainId, account]),
        target: '_blank',
        rel: 'noopener noreferrer',
      }}
    >
      {ENSName || `${shortenHex(account, 4)}`}
    </Button>
  );
};
