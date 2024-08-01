import { init, useAccountCenter, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import { ethers } from 'ethers';
import moshiLogo from '../images/moshi-logo.png';
import { Link, useLocation } from "react-router-dom";


// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
  // Required for Transaction Notifications and Transaction Preview
  const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

  const injected = injectedModule()

  const infuraKey = '<INFURA_KEY>'
  const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

  // initialize Onboard
  init({
    // This javascript object is unordered meaning props do not require a certain order
    apiKey,
    wallets: [injected],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum Mainnet',
        rpcUrl
      },
      {
        id: '0x2105',
        token: 'ETH',
        label: 'Base',
        rpcUrl: 'https://mainnet.base.org'
      }
    ],
    notify: {
      desktop: {enabled: true, position: 'topRight', transactionHandler: transaction => {if (transaction.eventCode === 'txPool') {return { type: 'success', message: 'Your transaction from #1 DApp is in the mempool'}}}},
      mobile: {enabled: true, transactionHandler: transaction => {if (transaction.eventCode === 'txPool') {return {type: 'success', message: 'Your transaction from #1 DApp is in the mempool'}}},position: 'topRight'}  
    }
  });

export const Nav = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const pathname = useLocation();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    // if using ethers v6 this is:
    // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
  }

  useAccountCenter()

  return (
    <nav className="w-auto bg-slate-950 bg-opacity-90 flex flex-col md:w-screen text-3xl md:text-lg items-center">
      <Link to="/" className="text-violet-700 flex flex-col items-center m-6 md:m-1 md:text-3xl">
        <span className="flex flex-row justify-start items-center">
          <p>M</p>
          <p>O</p>
          <p>S</p>
          <p>H</p>
          <p>I</p>
        </span>
        <img src={moshiLogo} className="min-w-24 min-h-24 max-w-24 max-h-24" alt="moshi logo"/>
      </Link>
      <hr className="w-10/12" />
      <div className="flex flex-col items-center md:flex-row">
        <Link to="/" className={`${pathname.pathname === "/" ? "bg-slate-900 rounded-tr-3xl rounded-bl-3xl border-violet-500 border-2" : ""} m-3 text-sky-400 hover:text-sky-500 p-1.5`}>
          Dashboard
        </Link>
        <hr className="w-10/12" />
        <Link to="/markets" className={`${pathname.pathname === "/markets" ? "bg-slate-900 rounded-tr-3xl rounded-bl-3xl border-violet-500 border-2" : ""} m-3 text-sky-400 hover:text-sky-500 p-1.5`}>
          Markets
        </Link>
        <hr className="w-10/12" />
      </div>
      {wallet ? 
      <div className="fixed bottom-3 bg-red-700 text-sky-700 p-2 rounded-tr-3xl rounded-bl-3xl hover:border-lime-400 hover:cursor-pointer hover:border-2 hover:shadow-red-700 hover:shadow-md" onClick={() => (wallet ? disconnect(wallet) : connect())}>
        {connecting ? 'Connecting' : "Disconnect"}
      </div> : 
      <div className="fixed bottom-3 bg-sky-600 text-lime-400 p-2 rounded-tr-3xl rounded-bl-3xl hover:border-lime-400 hover:cursor-pointer hover:border-2 hover:shadow-sky-600 hover:shadow-md" onClick={() => (wallet ? disconnect(wallet) : connect())}>
        {connecting ? 'Connecting' : 'Connect'}
      </div>
      }
    </nav>
  );
};
