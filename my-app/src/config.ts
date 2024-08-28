import { http, createConfig, createStorage,  } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { createWalletClient, createPublicClient } from 'viem';

// export const accounts = await window.ethereum.request({method: "eth_requestAccounts"});

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), metaMask(), safe()],
  transports: {
    [mainnet.id]: http("https://mainnet.infura.io/v3/53fca3d56e3642b29a6c1fb05162450a"),
    [sepolia.id]: http("https://sepolia.infura.io/v3/53fca3d56e3642b29a6c1fb05162450a"),
  },
  storage: createStorage({ storage: window.localStorage})
})

export const walletClient = await createWalletClient({ 
  chain: sepolia,
  transport: http("https://sepolia.infura.io/v3/53fca3d56e3642b29a6c1fb05162450a")
})

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http("https://sepolia.infura.io/v3/53fca3d56e3642b29a6c1fb05162450a"),
})

export const [account] = await walletClient.getAddresses();
console.log('config account', account);