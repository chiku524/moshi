import { account, publicClient } from '../config';
import CompTokenABI from "../web3/ABI/CompToken.json";

 
const CompTokenAddress = "0x507f0F5E58d21f07d133722e038067248fe4ecBE";

export const { result } = publicClient.simulateContract({
  address: `${CompTokenAddress}`,
  abi: CompTokenABI,
  functionName: 'approve',
  args: [account, 1000000], 
  account: account,
}).catch((error) => console.log(error))

console.log('ctoken abi', CompTokenABI);
console.log('address', CompTokenAddress);
console.log('account', account);