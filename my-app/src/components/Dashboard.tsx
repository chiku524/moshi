// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Dashboard = () => {
//   const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row mx-40 md:mx-auto">
        <div className="flex flex-col w-fit md:mx-auto my-44 md:my-5 items-center">
            <div className="bg-slate-900 rounded w-fit p-5 m-5 md:mx-auto">
                <span className="text-blue-500">0x57643099826552y7483oyhtr</span>
                <hr className=""/>
                <div className="text-green-500 flex flex-col items-end text-lg mt-3">
                    <span>Balance</span>
                    <span><AddIcon />0.000</span>
                </div>
            </div>
            <div className="bg-slate-900 rounded text-white med:p-5">
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
                        <span className='mr-3 w-1/3 flex justify-around'>
                            <AddIcon className='rounded-full border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                            <RemoveIcon className='rounded-full border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between my-5">
                        <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                        <span className="w-1/3 flex justify-center">0.001</span>
                        <span className='mr-3 w-1/3 flex justify-around'>
                            <AddIcon className='rounded-full border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                            <RemoveIcon className='rounded-full border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between my-5">
                        <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                        <span className="w-1/3 flex justify-center">0.001</span>
                        <span className='mr-3 w-1/3 flex justify-around'>
                            <AddIcon className='rounded-full border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                            <RemoveIcon className='rounded-full border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between my-5">
                        <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                        <span className="w-1/3 flex justify-center">0.001</span>
                        <span className='mr-3 w-1/3 flex justify-around'>
                            <AddIcon className='rounded-full border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                            <RemoveIcon className='rounded-full border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between my-5">
                        <span className="ml-3 w-1/3 flex justify-center">Coin here</span>
                        <span className="w-1/3 flex justify-center">0.001</span>
                        <span className='mr-3 w-1/3 flex justify-around'>
                            <AddIcon className='rounded-full border-white border-2 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'/>
                            <RemoveIcon className='rounded-full border-white border-2 hover:text-red-600 hover:border-red-600 hover:cursor-pointer'/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='bg-slate-900 w-10/12 h-5/6'>

        </div> */}
    </div>
  );
};
