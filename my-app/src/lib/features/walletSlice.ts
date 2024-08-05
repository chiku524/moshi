import { createAppSlice } from "../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit'


interface WalletState {
  accounts: any,
  chain: any,
  icon: any,
  instance: any,
  label: any,
  provider: any,
  wagmiConnector: any
}

const initialState = {
accounts: [],
chain: "",
icon: "",
instance: undefined,
label: "",
provider: {},
wagmiConnector: undefined
} satisfies WalletState as WalletState

export const walletSlice = createAppSlice({
  name: 'wallet',
  initialState,
  reducers: (create) => ({
    walletAccounts: create.reducer((state:any, action:PayloadAction<{}>) => {
      state.accounts = action.payload;
    }),
    walletChain: create.reducer((state:any, action:PayloadAction<{}>) => {
      state.chain = action.payload;
    }),
    walletInstance: create.reducer((state:any, action:PayloadAction<{}>) => {
      state.instance = action.payload;
    }),
    walletLabel: create.reducer((state:any, action:PayloadAction<string>) => {
      state.label = action.payload;
    }),
    walletProvider: create.reducer((state:any, action:PayloadAction<{}>) => {
      state.provider = action.payload;
    }),
    walletWagmiConnector: create.reducer((state:any, action:PayloadAction<string>) => {
      state.wagmiConnector = action.payload;
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

export const { walletAccounts, walletChain, walletInstance, walletProvider, walletLabel, walletWagmiConnector } = walletSlice.actions