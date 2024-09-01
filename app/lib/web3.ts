"use client";

import { ethers } from "ethers";
import erc20abi from "./erc20ABI.json";

//  Tokens
export const TokenList = [
  {
    tokenName: "WETH_CONTRACT_ADDRESS",
    tokenAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    tokenContainerPayload: "",
  },
  {
    tokenName: "USDC_CONTRACT_ADDRESS",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    tokenContainerPayload: "",
  },
  {
    tokenName: "USDT_CONTRACT_ADDRESSS",
    tokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    tokenContainerPayload: "",
  },
  {
    tokenName: "SHIB_CONTRACT_ADDRESSS",
    tokenAddress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    tokenContainerPayload: "",
  },
  {
    tokenName: "WBTC_CONTRACT_ADDRESS",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    tokenContainerPayload: "",
  },
  {
    tokenName: "UNI_CONTRACT_ADDRESS",
    tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    tokenContainerPayload: "",
  },
  {
    tokenName: "DOGE_CONTRACT_ADDRESS",
    tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    tokenContainerPayload: "",
  },
  {
    tokenName: "NEURONCLUMPTOKEN_ADDRESS",
    tokenAddress: "0x05F868A3F0d4b30d402b55E45895d527F5783DA3",
    tokenContainerPayload: "",
  },
];

// etc
const daiAbi = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function approve(address spender, uint256 value) external returns (bool)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",
  "function transferFrom(address from, address to, uint256 value) external returns (bool)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

// Approve Tokens
export const AccessTokenContractData = async (
  tokenAddress: string,
  amount: number
) => {
  try {
    console.log(tokenAddress, "token address");
    const provider = new (ethers as any).providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const account = await signer.getAddress();

    const contractInstance = new ethers.Contract(
      tokenAddress,
      erc20abi,
      provider
    );

    console.log(contractInstance);


    // const res = await contractInstance.callStatic.approve(account[0], amount);

    return {
      status: "success",
      payload: "res",
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};
