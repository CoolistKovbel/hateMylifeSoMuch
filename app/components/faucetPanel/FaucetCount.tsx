import {
  AddActoin,
  HandleFaucetCountdownReset,
  KillingMyselfSlow,
} from "@/app/lib/actions";
import { useEffect, useRef, useState } from "react";
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
    await AddActoin({
      currentFaucetId: faucetId,
      Timepayload: `${hour}H ${minute}M`,
    });

    if (minute !== 0 || hour !== 0) {
      hour >= 0 ? setMinute((prev: any) => prev - 1) : null;

      // Double check for potential
      if (hour > 0 && minute === 0) {
        setHour((prev: any) => prev - 1);
        setMinute(60);
      }
    } else if (minute !== 0 && hour !== 0) {
      clearInterval(ref.current);

      if (!faucetHandleClaim) {
        console.log(statusClaim, "button disabled true");
        clearInterval(ref.current);

        validClaim((prev) => !prev);

        setHour(0);
        setMinute(0);

        console.log(statusClaim, "button disabled  false");

        await AddActoin({
          currentFaucetId: faucetId,
          Timepayload: `${0}H ${0}M`,
        });
      }

      await HandleFaucetCountdownReset(faucetId, fuacetLap);
    }

    clearInterval(ref.current);
  }

  useEffect(() => {
    ref.current = setInterval(countFunc, 800);

    return () => clearInterval(ref.current);
  }, [hour, minute]);

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
          disabled={faucetHandleClaim}
          className={`${
            !faucetHandleClaim ? "bg-[firebrick]" : "bg-emerald-500"
          } hover:bg-[#888] p-2 drop-shadow-lg rounded`}
        >
          claim
        </button>
      </li>
    </>
  );
};

export default FaucetCount;
