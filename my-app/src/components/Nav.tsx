import React, { useState, useEffect, useLayoutEffect } from 'react';
import moshiLogo from '../images/moshi-logo.png';
import { Link, useLocation } from "react-router-dom";
import { gsap } from 'gsap';
import { useAppDispatch, useAppStore, useAppSelector } from "../lib/hooks";
import { SignRejectedModal } from "./SignRejectedModal";
import { ConnectModal } from './ConnectModal';
import { showConnectModal, walletAddress, walletConnectors, walletViemClient } from "../lib/features/walletSlice";
import { createPublicClient, createWalletClient, http, custom, fallback, formatEther } from 'viem';
import { mainnet, sepolia } from "viem/chains";
import { useConnect, useAccount, useDisconnect } from 'wagmi';

declare let window: any;

const infura = http("https://sepolia.infura.io/v3/53fca3d56e3642b29a6c1fb05162450a");
const defaultProvider = http();
const web3Provider = custom(window.ethereum);

if(localStorage.getItem("isWalletConnected") === "yes") {
  var [account] = await window.ethereum.request({method: "eth_requestAccounts"});
}

const client = createPublicClient({chain: sepolia, transport: fallback([infura, defaultProvider, web3Provider])});
const walletClient = createWalletClient({account, chain: sepolia, transport: fallback([infura, defaultProvider, web3Provider])});

export const Nav = () => {
  const [bubArray] = useState<number[]>([]);
  const [bubArray1] = useState<number[]>([]);
  const [bubArray2] = useState<number[]>([]);
  const [walletDropdownActive, setWalletDropdownActive] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);
  const showConnectModalStatus = useAppSelector((state) => state.wallet.showConnectModal);
  const pathname = useLocation();
  const dispatch = useAppDispatch();
  const [balance, setBalance] = useState<string>();
  const [accountLI, setAccountLI] = useState("");
  const { connectors, connect } = useConnect()
  const { address } = useAccount();
  const { disconnect } = useDisconnect()


  // useEffect(() => {
  //   if(account) {
  //     setAccountLI(account);
  //   }
  // }, [])

  async function disconnectAccounts() {
    if(window.ethereum) {
      await disconnect();
      window.ethereum.close();
      console.log('window.eth.close triggered');
      localStorage.setItem("isWalletConnected", "no");
    }
  }

  // async function login() {
  //   const [accountLogin] = await window.ethereum.request({method: "eth_requestAccounts"});
  //   setAccountLI(accountLogin);
  //   localStorage.setItem("isWalletConnected", "yes");
  //   dispatch(walletViemClient(walletClient));
  //   await walletClient.signMessage({account: accountLogin, message: "hello world"}).catch((error) => {setShowSignModal(true)});
  // }

  // async function getEthBalance() {
  //   const weiBal = await client.getBalance({address: accountLI});
  //   const ethBal = formatEther(weiBal);
  //   setBalance(ethBal)
  // }

  useLayoutEffect(() => {
    //set wallet network chain
    dispatch(walletConnectors(connectors));
    dispatch(walletAddress(address))
    // wallet ? dispatch(walletInstance(wallet.instance)) : console.log("no wallet connected");
    // dispatch(walletLabel(wallet.label));
    // dispatch(walletProvider(wallet.provider));
    // wallet ? dispatch(walletWagmiConnector(wallet.wagmiConnector)) : console.log("no wallet connected");
    // console.log('wallet client', walletClient);
  }, [address])

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

  //close connect-modal
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dispatch(showConnectModal(false));
      setShowSignModal(false);
    }
  })

  return (
    <nav className="w-auto bg-zinc-950 flex flex-col md:w-screen text-3xl md:text-lg items-center min-h-full med:fixed med:left-0 med:px-5">
      <Link to="/" id="logo" className="text-violet-700 flex flex-col items-center p-6 md:p-1 md:pt-5 md:text-3xl relative w-3/4">
        <span className="flex flex-row justify-start items-center z-10">
          <p>M</p>
          <p>O</p>
          <p>C</p>
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
        <Link to="/" className={`${pathname.pathname === "/" ? "flex justify-center med:w-full bg-slate-900 rounded-tr-3xl rounded-bl-3xl border-violet-500 border-2" : ""} m-3 text-sky-400 hover:text-sky-500 p-1.5`}>
          Dashboard
        </Link>
        <hr className="w-10/12" />
        <Link to="/markets" className={`${pathname.pathname === "/markets" ? "flex justify-center med:w-full bg-slate-900 rounded-tr-3xl rounded-bl-3xl border-violet-500 border-2" : ""} m-3 text-sky-400 hover:text-sky-500 p-1.5`}>
          Markets
        </Link>
        <hr className="w-10/12" />
      </div>
      {address ? 
      <div className="flex flex-col text-lg md:text-sm fixed top-4 right-4 bg-zinc-950 bg-opacity-80 text-white p-2 rounded border-lime-400 hover:cursor-pointer border-2 shadow-red-700 shadow-md md:h-fit z-20" onClick={() => setWalletDropdownActive(!walletDropdownActive)}>
        <span className={`${walletDropdownActive ? '' : '' }`}>{walletDropdownActive && address ? address.slice(0,2) + address.slice(2, address.length).toUpperCase() : address.slice(0, 2) + address.slice(2, 6).toUpperCase() + "..." + address.slice(address.length - 4, address.length).toUpperCase()}</span>
        <span className={`${walletDropdownActive ? '' : 'hidden'}`}>{balance ? `Balance: ${balance} ETH` : `Unable to retrieve balance...`}</span>
        {/* <span className={`${walletDropdownActive ? '' : 'hidden'}`}>Network: {store.getState().wallet.chain}</span> */}
        <span className={`${walletDropdownActive ? 'hover:bg-red-700 mx-0 rounded text-center' : 'hidden'}`} onClick={() => disconnectAccounts()}>Disconnect</span>
      </div> : 
      <div className="text-2xl md:text-lg fixed top-4 right-4 bg-zinc-950 text-lime-400 p-2 rounded border-lime-400 hover:cursor-pointer border-2 shadow-red-700 shadow-md md:h-fit" onClick={() => dispatch(showConnectModal(true))}>
        Connect
      </div>
      }
      {showSignModal ? <SignRejectedModal /> : null}
      {showConnectModalStatus ? <ConnectModal /> : null}
    </nav>
  );
};
