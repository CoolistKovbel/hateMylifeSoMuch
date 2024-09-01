import { ethers } from "ethers";
import { AccessTokenContractData, TokenList } from "./web3";

export const CreateBidAction = async (data: any) => {
  const handledData = JSON.parse(data);
  const token = TokenList.find((item) => item.tokenName === handledData.token);


  console.log("the amount tokens", handledData.amount)

  const contractInstance = await AccessTokenContractData(
    token?.tokenAddress as any,
    handledData.amount
  );

  return contractInstance
};
