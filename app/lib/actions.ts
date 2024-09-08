"use server";

import { revalidatePath } from "next/cache";
import { BidsModal } from "../modal/BidsModal";
import { Email } from "../modal/EmailModal";
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
      faucetWaitTime: `${ClientStupidFuckingData.TokenRewardRateTimeSetHour}H ${ClientStupidFuckingData.TokenRewardRateTimeSetMin}M`,
      amount: ClientStupidFuckingData.TokenDistrubute,
      RewardRate: ClientStupidFuckingData.TokenRewardRate,
      timeSet: ClientStupidFuckingData.TokenRewardRateTimeSet,
      tokenABI: ClientStupidFuckingData.TokenContractABI as string,
    });

    await stupidData.save();

    revalidatePath("/faucet");

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

export const HandleGetAllTheFuckingFucets = async () => {
  try {
    console.log("handling the fucking fuects");

    await dbConnect();

    const fuckingStupidData = await StupidFuckingFaucetTokenAddition.find({});

    return {
      status: "success",
      payload: fuckingStupidData,
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};

// Set user email in mailing list
export const handleUserEmailMailinglist = async (email: string) => {
  try {
    await dbConnect();

    const e = new Email({
      email,
    });

    e.save();

    return {
      status: "success",
      payload: "user is on the mailing list",
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};

type AddActoinProps = {
  currentFaucetId: string;
  Timepayload: string;
};

/**
 *
 * @param param0
 * @returns
 */

export const AddActoin = async ({
  currentFaucetId,
  Timepayload,
}: AddActoinProps) => {
  try {
    await dbConnect();

    console.log("======");
    console.log(currentFaucetId, Timepayload);

    await StupidFuckingFaucetTokenAddition.findByIdAndUpdate(currentFaucetId, {
      faucetCountDownRemains: Timepayload,
    });
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};

export const HandleFaucetCountdownReset = async (
  faucetID: string,
  lap: number
) => {
  try {
    await dbConnect();

    await StupidFuckingFaucetTokenAddition.findByIdAndUpdate(faucetID, {
      $inc: { faucetLaps: lap + 1, faucetClaim: 1 },
    });

    return {
      status: "success",
      payload: "",
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};

