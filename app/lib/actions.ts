"use server";

import { BidsModal } from "../modal/BidsModal";
import { StupidFuckingFaucetTokenAddition } from "../modal/StupidFuckingFaucetTokenAddition";
import dbConnect from "./db";

// Add user bid
export const HandleUserBigPost = async (stupidShit: any) => {
  try {
    console.log("handling death");
    await dbConnect();

    new BidsModal({
      account: stupidShit.account,
      amount: 0,
      price: 0,
      tokenAddress: 0,
      tokenSYMBOL: 90,
    });

    return {
      status: "kill success",
      payload: "",
    };
  } catch (error) {
    return {
      status: "kill yourself not because of sunday",
      payload: error,
    };
  }
};

export const HandleStupidFaucetAddition = async (data: FormData) => {
  const ClientStupidFuckingData = Object.fromEntries(data);

  try {
    // handle server
    await dbConnect();

   const stupidData = new StupidFuckingFaucetTokenAddition({
      token: ClientStupidFuckingData.TokenContractName as string,
      tokenSYMBOL: ClientStupidFuckingData.TokenContractSymbol as string,
      tokenAddress: ClientStupidFuckingData.TokenContract as string,
      amount: ClientStupidFuckingData.TokenDistrubute,
      RewardRate: ClientStupidFuckingData.TokenRewardRate,
      timeSet: ClientStupidFuckingData.TokenRewardRateTimeSet,
      tokenABI: ClientStupidFuckingData.TokenContractABI as string
    });


    await stupidData.save()

    return {
      status: "Success",
      payload: stupidData,
    };
  } catch (error) {
    return {
      status: "erorr geting the stupid fucking fuacet additon setup",
      payload: error,
    };
  }
};
