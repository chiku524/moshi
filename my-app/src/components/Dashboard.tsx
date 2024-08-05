import { useLayoutEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppSelector, useAppStore } from "../lib/hooks";

export const Dashboard = () => {
//   const dispatch = useAppDispatch();
    const store = useAppStore();
    const wallet = useAppSelector((state) => state.wallet)
    const [address, setAddress] = useState("Please connect wallet.");
    const [balance, setBalance] = useState("0.000001");

    useLayoutEffect(() => {

        // if(wallet.accounts[0]) {
        //     setAddress(wallet.accounts[0].address);
        //     setBalance(wallet.accounts[0].balance);
        // }
        // console.log(wallet);
        // console.log('store in dashbopard', store.getState());
    }, [wallet])

    const supplyMarket = [
        {asset: "Dai", apy: "1.44", balance: 1, collateral: true},
        {asset: "Ethereum", apy: "1.44", balance: 0, collateral: true},
        {asset: "TrueUSD", apy: "1.44", balance: 1, collateral: true},
        {asset: "USDC", apy: "1.44", balance: 0, collateral: true},
        {asset: "USDT", apy: "1.44", balance: 1, collateral: true},
        {asset: "Bitcoin", apy: "1.44", balance: 0, collateral: true},
        {asset: "Dai", apy: "1.44", balance: 1, collateral: true},
        {asset: "Dai", apy: "1.44", balance: 0, collateral: true},
    ]

    const borrowMarket = [
        {asset: "Aave", apy: "1.44", balance: 1, collateral: true},
        {asset: "Ethereum", apy: "1.44", balance: 0, collateral: true},
        {asset: "TrueUSD", apy: "1.44", balance: 1, collateral: true},
        {asset: "USDC", apy: "1.44", balance: 0, collateral: true},
        {asset: "USDT", apy: "1.44", balance: 1, collateral: true},
        {asset: "BTC", apy: "1.44", balance: 0, collateral: true},
        {asset: "Mochi", apy: "1.44", balance: 1, collateral: true},
        {asset: "Dai", apy: "1.44", balance: 0, collateral: true},
    ]

    return (
        <div className="flex flex-row w-full mx-auto md:mx-0 md:flex-col h-fit md:h-fit bg-slate-700 justify-center">
            <div className="flex flex-col w-full mx-10 md:mx-auto my-20 md:my-5 items-center">
                <div className='flex flex-row md:flex-col w-full justify-center'>
                    <div className="bg-slate-900 rounded text-white med:p-5 m-5 med:w-4/12 flex flex-col">
                        <span className="underline mx-auto text-xl m-2">Supplying</span>
                        <div className="bg-slate-900 rounded flex flex-row justify-between">
                            <span className="m-3 w-1/4 flex justify-start items-center">Assets</span>
                            <span className="m-3 w-1/4 flex justify-start items-center">APY</span>
                            <span className="m-3 w-1/4 flex justify-start items-center">Balance</span>
                            <span className="m-3 w-1/4 flex justify-start items-center">Position</span>
                        </div>
                        <hr className=""/>
                        <div className="bg-slate-900 rounded w-full">
                            {supplyMarket.map(item => item.balance > 0 ? 
                                <div className="flex flex-row justify-around my-5">
                                    <span className="m-3 w-1/4 flex justify-start items-center">{item.asset}</span>
                                    <span className="m-3 w-1/4 flex justify-start items-center">{item.apy}%</span>
                                    <span className="m-3 w-1/4 flex justify-start items-center">{item.balance}</span>
                                    <span className='m-3 w-1/4 flex justify-start items-center'>
                                        <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                        <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                    </span>
                                </div> : null
                            )}
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded text-white med:p-5 m-5 md:mb-24 med:w-4/12 flex flex-col">
                        <span className="underline mx-auto text-xl m-2">Borrowing</span>
                        <div className="bg-slate-900 rounded flex flex-row justify-between">
                            <span className="m-3 w-1/4 flex justify-start items-center">Assets</span>
                            <span className="m-3 w-1/4 flex justify-start items-center">APY</span>
                            <span className="m-3 w-1/4 flex justify-start items-center">Balance</span>
                            <span className="m-3 w-1/4 flex justify-start items-center">Position</span>
                        </div>
                        <hr className=""/>
                        <div className="bg-slate-900 rounded w-full">
                            {borrowMarket.map(item => item.balance > 0 ? 
                                <div className="flex flex-row justify-around my-5">
                                    <span className="m-3 w-1/4 flex justify-start items-center">{item.asset}</span>
                                    <span className="m-3 w-1/4 flex justify-start items-center">{item.apy}%</span>
                                    <span className="m-3 w-1/4 flex justify-start items-center">{item.balance}</span>
                                    <span className='m-3 w-1/4 flex justify-start items-center'>
                                        <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                        <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                    </span>
                                </div> : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
