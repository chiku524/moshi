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

    return (
        <div className="flex flex-row w-full mr-40 ml-30 md:mx-0 md:flex-col h-fit md:h-fit bg-slate-700 justify-center">
            <div className="flex flex-col w-full mx-10 md:mx-auto my-44 md:my-5 items-center">
                <div className='flex flex-row md:flex-col w-full justify-center'>
                    <div className="bg-slate-900 rounded text-white med:p-5 m-5 med:w-5/12">
                        <div className="bg-slate-900 rounded flex flex-row justify-between">
                            <span className="m-3 w-1/3 flex justify-center">Assets</span>
                            <span className="m-3 w-1/3 flex justify-center">Balance</span>
                            <span className="m-3 w-1/3 flex justify-center">Increase Position</span>
                        </div>
                        <hr className=""/>
                        <div className="bg-slate-900 rounded w-full">
                            <div className="flex flex-row justify-around my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Bitcoin</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded text-white med:p-5 m-5 md:mb-24 med:w-5/12">
                        <div className="bg-slate-900 rounded flex flex-row justify-between">
                            <span className="m-3 w-1/3 flex justify-center">Assets</span>
                            <span className="m-3 w-1/3 flex justify-center">Balance</span>
                            <span className="m-3 w-1/3 flex justify-center">Increase Position</span>
                        </div>
                        <hr className=""/>
                        <div className="bg-slate-900 rounded w-full">
                            <div className="flex flex-row justify-around my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Bitcoin</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                            <div className="flex flex-row justify-between my-5">
                                <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                                <span className="w-1/3 flex justify-center">0.001</span>
                                <span className='mr-3 w-1/3 flex justify-center'>
                                    <AddIcon className='rounded-full mr-2 border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                                    <RemoveIcon className='rounded-full ml-2 border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
