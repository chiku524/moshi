import { showConnectModal } from "../lib/features/walletSlice";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { useConnect } from 'wagmi';


export const ConnectModal = () => {
    const connectors = useAppSelector((state) => state.wallet.walletConnectors)
    const { connect } = useConnect()
    const dispatch = useAppDispatch();

    return (
        <section>
            <div id="connect-modal" className='bg-slate-900 bg-opacity-70 w-screen h-screen absolute top-0 left-0 flex justify-center items-center'>
                <div className='bg-red-200 rounded-3xl w-1/4 h-1/3 flex flex-col justify-center items-center'>
                {connectors.map((connector:any) => 
                    <div key={connector.uid} className={'hover:cursor-pointer hover:bg-green-400 rounded p-2'} onClick={async () => {await connect({connector}); dispatch(showConnectModal(false))}}>
                        <span>
                            {connector.name}
                        </span>
                    </div>)}
                </div>
            </div>
        </section>
    );
};
