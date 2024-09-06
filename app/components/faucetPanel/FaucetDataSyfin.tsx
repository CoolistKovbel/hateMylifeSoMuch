"use client";
import { useState } from "react";
import FaucetCount from "./FaucetCount";
import { HandleFaucetToggle } from "@/app/lib/actions";

interface FaucetDataSyfinProp {
  stupidFuckingData: any;
}

const FaucetDataSyfin = ({ stupidFuckingData }: FaucetDataSyfinProp) => {
  const [validClaim, setValidClaim] = useState<boolean>(true);

  const handleClaim = async (faucetId: string, rewardrate: number) => {
    console.log("handling claim", faucetId);
    console.log(`here is your reward +${rewardrate}`);

    const res = await HandleFaucetToggle(faucetId);
    if(res.status === "success") {
      setValidClaim((prev) => !prev);
    }
  };

  console.log(stupidFuckingData);
  console.log(validClaim, "lap");

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
              statusClaim={validClaim}
              faucetId={item._id}
            />
            <li>{item.RewardRate}</li>
            <li>{item.amount}</li>
            <li>
              <button
                disabled={validClaim}
                onClick={() => handleClaim(item._id, item.RewardRate)}
                className={`${
                  validClaim ? "bg-[firebrick]" : "bg-emerald-500"
                } hover:bg-[#888] p-2 drop-shadow-lg rounded`}
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
