// import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Dashboard = () => {
//   const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col mx-4 my-44 md:my-5">
        <div className="bg-slate-900 rounded w-fit p-5 m-5 md:mx-auto">
            <span className="text-blue-500">0x57643099826552y7483oyhtr</span>
            <hr className=""/>
            <div className="text-green-500 flex flex-col items-end text-lg mt-3">
                <span>Balance</span>
                <span><img />0.000</span>
            </div>
        </div>
        <div className="bg-slate-900 rounded text-white">
            <div className="bg-slate-900 rounded flex flex-row justify-between">
                <span className="m-3">Assets</span>
                <span className="m-3">Deposit Balance</span>
            </div>
            <hr className=""/>
            <div className="bg-slate-900 rounded">
            
            </div>

        </div>
    </div>
  );
};
