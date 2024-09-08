"use client";
import { useRef, useState } from "react";
import FaucetCount from "./FaucetCount";
import { ethers } from "ethers";
import { HandleStupidFuckingFuacetTumble } from "@/app/lib/web3";

interface FaucetDataSyfinProp {
  deData: any;
}

const FaucetDataSyfin = ({ deData }: FaucetDataSyfinProp) => {
  const [validClaim, setValidClaim] = useState<boolean>(true); // faucet claim
  const [validHandleClaim, setValidHandleClaim] = useState<boolean>(false); // facuet handle
  const refTab = useRef({
    killyourSelf: true,
  });

  // Todo finish this... literally.
  const handleClaim = async (
    faucetId: string,
    rewardrate: number,
    tokenAddress: string,
    tokenAbi: string
  ) => {

    console.log("handling claim", faucetId);

    console.log(
      `here is your reward +${ethers.utils.parseEther(rewardrate.toString())}`
    );

    const res = await HandleStupidFuckingFuacetTumble(
      rewardrate,
      tokenAddress,
      tokenAbi
    );

    if (res.status === "success") {
      setValidHandleClaim((prev) => !prev);
      refTab.current.killyourSelf = true;
    }
  };

  return (
    <ul className=" bg-[#6C4675] drop-shadow-lg rounded p-2 ">
      {deData &&
        deData.map((item: any) => (
          <div
            key={crypto.randomUUID()}
            className="flex items-center justify-between w-full p-2 text-sm font-bold"
          >
            <li>{item.token}</li>
            <li>{item.faucetWaitTime} </li>
            <li>{item.RewardRate}</li>
            <li>{item.amount}</li>
            <FaucetCount
              fuacetLap={item.faucetLaps}
              remainingCountdown={item.faucetCountDownRemains}
              faucetWaitTime={item.faucetWaitTime}
              faucetId={item._id}
              rewardRare={item.RewardRate}
              faucetHandleClaim={validHandleClaim} //bool
              referennce={refTab}
              handleClaim={handleClaim}
              tokenAddress={item.tokenAddress}
              tokenABI={item.tokenABI}
            />
          </div>
        ))}
    </ul>
  );
};

export default FaucetDataSyfin;
