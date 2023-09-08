import Modal from '../Modal';
import WalletButton from '../WalletButton';
import { WALLET_TYPE } from '../WalletButton';
import { useEthers } from '@usedapp/core';
import clsx from 'clsx';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectV2Connector } from '../../utils/walletconnectV2Connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import config, { CHAIN_ID, WALLET_CONNECT_V2_PROJECT_ID } from '../../config';
import classes from './WalletConnectModal.module.css';

const WalletConnectModal: React.FC<{ onDismiss: () => void }> = props => {
  const { onDismiss } = props;
  const { activate } = useEthers();
  const supportedChainIds = [CHAIN_ID];

  const wallets = (
    <div className={classes.walletConnectModal}>
      <WalletButton
        onClick={() => {
          const injected = new InjectedConnector({
            supportedChainIds,
          });
          activate(injected);
        }}
        walletType={WALLET_TYPE.metamask}
      />
      <WalletButton
        onClick={() => {
          const fortmatic = new FortmaticConnector({
            apiKey: 'pk_live_60FAF077265B4CBA',
            chainId: CHAIN_ID,
          });
          activate(fortmatic);
        }}
        walletType={WALLET_TYPE.fortmatic}
      />
      <WalletButton
        onClick={() => {
          const walletConnectV2 = new WalletConnectV2Connector({
            projectId: WALLET_CONNECT_V2_PROJECT_ID,
            showQrModal: true,
            chains: supportedChainIds,
            rpcMap: {
              [CHAIN_ID]: config.app.jsonRpcUri,
            },
          });
          activate(walletConnectV2);
        }}
        walletType={WALLET_TYPE.walletconnect}
      />
      <WalletButton
        onClick={() => {
          const walletlink = new WalletLinkConnector({
            appName: 'LilNouns.WTF',
            appLogoUrl: 'https://lilnouns.wtf/static/media/logo.svg',
            url: config.app.jsonRpcUri,
            supportedChainIds,
          });
          activate(walletlink);
        }}
        walletType={WALLET_TYPE.coinbaseWallet}
      />
      <WalletButton
        onClick={() => {
          const injected = new InjectedConnector({
            supportedChainIds,
          });
          activate(injected);
        }}
        walletType={WALLET_TYPE.brave}
      />
      {/* <WalletButton
        onClick={() => {
          const ledger = new LedgerConnector({
            //TODO: refactor
            chainId: config.supportedChainId,
            url: config.rinkebyJsonRpc,
          });
          activate(ledger);
        }}
        walletType={WALLET_TYPE.ledger}
      /> */}
      
      {/* //TODO: update */
      }

      <WalletButton
        onClick={() => {
          const trezor = new TrezorConnector({
            chainId: CHAIN_ID,
            url: config.app.jsonRpcUri,
            manifestAppUrl: 'https://lilnouns.wtf',
            manifestEmail: 'lilnouns@protonmail.com',
          });
          activate(trezor);
        }}
        walletType={WALLET_TYPE.trezor}
      />
      <div
        className={clsx(classes.clickable, classes.walletConnectData)}
        onClick={() => {
          console.log(localStorage.removeItem('walletconnect'));
        }}
      >
        Clear WalletConnect Data
      </div>
    </div>
  );
  return <Modal title="Connect your wallet" content={wallets} onDismiss={onDismiss} />;
};
export default WalletConnectModal;
