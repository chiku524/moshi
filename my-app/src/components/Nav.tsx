import { useState, useLayoutEffect } from 'react';
import { init, useAccountCenter, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import { ethers } from 'ethers';
import moshiLogo from '../images/moshi-logo.png';
import { Link, useLocation } from "react-router-dom";
import { gsap } from 'gsap';
import { walletAccounts, walletChain, walletLabel, walletProvider } from "../lib/features/walletSlice";
import { useAppDispatch, useAppStore } from "../lib/hooks";


  const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

  const injected = injectedModule()

  const infuraKey = '<INFURA_KEY>'
  const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

  // initialize Onboard
  init({
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
  const [bubArray] = useState<number[]>([]);
  const [bubArray1] = useState<number[]>([]);
  const [bubArray2] = useState<number[]>([]);
  const [walletDropdownActive, setWalletDropdownActive] = useState(false);
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const pathname = useLocation();
  const dispatch = useAppDispatch();
  const store = useAppStore();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
  }

  useLayoutEffect(() => {
    if(wallet) {
      dispatch(walletAccounts(wallet.accounts));
      //set wallet network chain
      if(wallet.chains[0].id === "0x1"){dispatch(walletChain("Ethereum"))};
      if(wallet.chains[0].id === "0x2105"){dispatch(walletChain("Base"))};
      // dispatch(walletChain(wallet.chains));
      // wallet ? dispatch(walletInstance(wallet.instance)) : console.log("no wallet connected");
      dispatch(walletLabel(wallet.label));
      dispatch(walletProvider(wallet.provider));
      // wallet ? dispatch(walletWagmiConnector(wallet.wagmiConnector)) : console.log("no wallet connected");
    }
  }, [wallet])

  //console logs
  // useLayoutEffect(() => {
  //   console.log('store', store.getState());
  //   console.log('wallet', wallet)
  // }, [wallet])

  useAccountCenter()

  for(let i=0; i<25; i++) {
    bubArray.push(i);
  }
  for(let i=0; i<25; i++) {
    bubArray1.push(i);
  }
  for(let i=0; i<25; i++) {
    bubArray2.push(i);
  }

  useLayoutEffect(() => {
    const aa = document.querySelector("#tank");
    let tankWidth = aa?.clientWidth;
    let tankHeight = aa?.clientHeight;
    tankHeight ? tankHeight += 100 : tankHeight = tankHeight;
    bubArray.forEach(el => {
      let randomX = gsap.utils.random(0, tankWidth? tankWidth : 375, true);
      let randomY = gsap.utils.random(-500, 0, true);
      gsap.set(`.bubble-${el}`, {
        x: randomX(),
        y: randomY(),
      })
    })
    bubArray1.forEach(el => {
      let randomX = gsap.utils.random(0, tankWidth? tankWidth : 375, true);
      let randomY = gsap.utils.random(-500, 0, true);
      gsap.set(`.bubble-${el}`, {
        x: randomX(),
        y: randomY(),
      })
    })
    bubArray2.forEach(el => {
      let randomX = gsap.utils.random(0, tankWidth? tankWidth : 375, true);
      let randomY = gsap.utils.random(-500, 0, true);
      gsap.set(`.bubble-${el}`, {
        x: randomX(),
        y: randomY(),
      })
    })

    gsap.to("#bubble", {
      y: tankHeight,
      repeat: -1,
      duration: 3.5,
    })
    gsap.to("#bubble1", {
      y: tankHeight,
      repeat: -1,
      duration: 3.5,
      delay: 2.25
    })
    gsap.to("#bubble2", {
      y: tankHeight,
      repeat: -1,
      duration: 3.5,
      delay: 1.25
    })
  }, [])

  return (
    <nav className="w-auto bg-zinc-950 flex flex-col md:w-screen text-3xl md:text-lg items-center">
      <Link to="/" id="logo" className="text-violet-700 flex flex-col items-center p-6 md:p-1 md:pt-5 md:text-3xl relative w-3/4">
        <span className="flex flex-row justify-start items-center z-10">
          <p>M</p>
          <p>O</p>
          <p>S</p>
          <p>H</p>
          <p>I</p>
        </span>
        <img src={moshiLogo} className="min-w-24 min-h-24 max-w-24 max-h-24 z-10" alt="moshi logo"/>
        <div id="tank" className="absolute w-full h-full overflow-hidden top-0">
          {bubArray && bubArray.map((item, index) => <div key={index} id="bubble" className={`bubble-${index} aspect-square rounded-full bg-white bg-opacity-50 absolute -top-10 left-0 w-0.5`} />)}
          {bubArray1 && bubArray1.map((item, index) => <div key={index} id="bubble1" className={`bubble-${index} aspect-square rounded-full bg-white bg-opacity-50 absolute -top-10 left-0 w-0.5`} />)}
          {bubArray2 && bubArray2.map((item, index) => <div key={index} id="bubble2" className={`bubble-${index} aspect-square rounded-full bg-white bg-opacity-50 absolute -top-10 left-0 w-0.5`} />)}
        </div>
      </Link>
      <hr className="w-10/12" />
      <div className="flex flex-col items-center md:flex-row z-10">
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
      <div className="flex flex-col text-lg md:text-sm fixed top-4 right-4 bg-zinc-950 bg-opacity-80 text-white p-2 rounded hover:border-lime-400 hover:cursor-pointer hover:border-2 hover:shadow-red-700 hover:shadow-md md:h-fit z-20" onClick={() => setWalletDropdownActive(!walletDropdownActive)}>
        <span className={`${walletDropdownActive ? '' : '' }`}>{walletDropdownActive ? wallet.accounts[0].address : wallet.accounts[0].address.slice(0, 2) + wallet.accounts[0].address.slice(2, 6).toUpperCase() + "..." + wallet.accounts[0].address.slice(wallet.accounts[0].address.length - 4, wallet.accounts[0].address.length).toUpperCase()}</span>
        <span className={`${walletDropdownActive ? '' : 'hidden'}`}>Balance {wallet.accounts[0].balance?.ETH.slice(0, 8)} ETH</span>
        <span className={`${walletDropdownActive ? '' : 'hidden'}`}>Network: {store.getState().wallet.chain}</span>
        <span className={`${walletDropdownActive ? 'hover:bg-red-700 mx-0 rounded text-center' : 'hidden'}`} onClick={() => (wallet ? disconnect(wallet) : connect())}>Disconnect</span>
      </div> : 
      <div className="text-2xl md:text-lg fixed top-4 right-4 bg-zinc-950 text-lime-400 p-2 rounded hover:border-lime-400 hover:cursor-pointer hover:border-2 hover:shadow-blue-600 hover:shadow-md md:h-fit" onClick={() => (wallet ? disconnect(wallet) : connect())}>
        {connecting ? 'Connecting' : 'Connect'}
      </div>
      }
    </nav>
  );
};
