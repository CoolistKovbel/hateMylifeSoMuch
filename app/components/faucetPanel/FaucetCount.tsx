"use client";
import {
  AddActoin,
  HandleFaucetCountdownReset,
  KillingMyselfSlow,
} from "@/app/lib/actions";
import { use, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface FacuetCountProps {
  faucetWaitTime: any;
  validClaim: any;
  faucetId: string;
  remainingCountdown: string;
  fuacetLap: number;
  statusClaim: boolean;
  faucetHandleClaim: boolean;
  setHandleFaucet: any;
  referennce: any;
  handleClaim: any;
  rewardRare: any;
}

const FaucetCount = ({
  faucetWaitTime,
  validClaim,
  faucetId,
  remainingCountdown,
  fuacetLap,
  statusClaim,
  faucetHandleClaim,
  setHandleFaucet,
  referennce,
  handleClaim,
  rewardRare,
}: FacuetCountProps) => {
  const ref = useRef<any>();
  const count = faucetWaitTime.split(" ");
  const remainingCount = remainingCountdown.split(" ");

  const [hour, setHour] = useState<any>(
    Number(remainingCount[0].split("H")[0]) || Number(count[0].split("H")[0])
  );
  const [minute, setMinute] = useState<any>(
    Number(remainingCount[1].split("M")[0]) || Number(count[1].split("M")[0])
  );

  async function countFunc() {
    // Automatic func
    setMinute((prev: any) => prev - 1);
  }

  if (minute === 0 && hour > 0) {
    setMinute(60);
    setHour((prev) => prev - 1);
  }

  const handleLap = async () =>
    await HandleFaucetCountdownReset(faucetId, fuacetLap);

  if (hour === 0 && minute === 0) {
    referennce.current.killyourSelf = false;
    async () => Promise.resolve(x());
    handleLap();
    clearInterval(ref.current);
  }

  const x = async () => {
    const res = await AddActoin({
      currentFaucetId: faucetId,
      Timepayload: `${hour}H ${minute}M`,
    });

    console.log(res);
  };

  useEffect(() => {
    x();
  }, [hour, minute]);

  useEffect(() => {
    ref.current = setInterval(countFunc, 800);
    return () => clearInterval(ref.current);
  }, [faucetHandleClaim]);

  return (
    <>
      <li className="w-[100px]">
        <p className="flex items-center justify-between">
          <span>
            hours: <span>{hour}</span>
          </span>
        </p>
        <p className="flex items-center justify-between">
          <span>
            minute: <span>{minute}</span>
          </span>
        </p>
      </li>
      <li>
        <button
          disabled={referennce.current.killyourSelf}
          onClick={() => handleClaim(faucetId, rewardRare)}
          className={`${
            referennce.current.killyourSelf
              ? "bg-[firebrick]"
              : "bg-emerald-500"
          } hover:bg-[#888] p-2 drop-shadow-lg rounded`}
        >
          claim
        </button>
      </li>
    </>
  );
};

export default FaucetCount;
