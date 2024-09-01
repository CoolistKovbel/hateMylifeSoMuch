"use server";

import { BidsModal } from "../modal/BidsModal";
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
