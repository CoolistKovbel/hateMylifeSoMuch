"use client";
import { useState } from "react";
import FaucetCount from "./FaucetCount";

interface FaucetDataSyfinProp {
  stupidFuckingData: any;
}

const FaucetDataSyfin = ({ stupidFuckingData }: FaucetDataSyfinProp) => {
  const [validClaim, setValidClaim] = useState<boolean>(true);

  const handleClaim = async (faucetId: number, rewardrate: number) => {
    console.log("handling claim", faucetId);

    console.log(`here is your reward +${rewardrate}`);
  };

  console.log(stupidFuckingData);
  console.log(validClaim);

  return (
    <ul className=" bg-[#6C4675] ">
      {stupidFuckingData &&
        stupidFuckingData.map((item: any) => (
          <div
            key={crypto.randomUUID()}
            className="flex items-center justify-between w-full p-2"
          >
            <li>{item.token}</li>
            <li>{item.faucetWaitTime} </li>
            <FaucetCount
              fuacetLap={item.faucetLaps}
              remainingCountdown={item.faucetCountDownRemains}
              faucetWaitTime={item.faucetWaitTime}
              validClaim={setValidClaim}
              faucetId={item._id}
            />
            <li>{item.RewardRate}</li>
            <li>{item.amount}</li>
            <li>
              <button
                onClick={() => handleClaim(item._id, item.RewardRate)}
                className="bg-[#444] hover:bg-[#888] p-2 drop-shadow-lg rounded"
              >
                claim
              </button>
            </li>
          </div>
        ))}
    </ul>
  );
};

export default FaucetDataSyfin;
