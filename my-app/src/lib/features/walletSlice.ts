import { createAppSlice } from "../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit'


interface WalletState {
  walletViemClient: any,
  walletConnectors: any,
  showConnectModal: boolean,
  walletAddress: string | undefined
}

const initialState = {
  walletViemClient: {},
  walletConnectors: [],
  showConnectModal: false,
  walletAddress: ""
} satisfies WalletState as WalletState

export const walletSlice = createAppSlice({
  name: 'wallet',
  initialState,
  reducers: (create) => ({
    walletViemClient: create.reducer((state: any, action: PayloadAction<{}>) => {
      state.walletViemClient = action.payload;
    }),
    walletConnectors: create.reducer((state: any, action: PayloadAction<{}>) => {
      state.walletConnectors = action.payload;
    }),
    showConnectModal: create.reducer((state: any, action: PayloadAction<{}>) => {
      state.showConnectModal = action.payload;
    }),
    walletAddress: create.reducer((state: any, action: PayloadAction<string | undefined>) => {
      state.walletAddress = action.payload;
    }),
    // disconnectWallet(state) {
    //   disconnect(state.wallets)
    // },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },
  }),
})

export const selectWalletInfo = (state:any) => state.wallet;

export const { walletViemClient, walletConnectors, showConnectModal, walletAddress } = walletSlice.actions