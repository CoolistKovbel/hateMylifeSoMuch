import dbConnect from "@/app/lib/db";
import { StupidFuckingFaucetTokenAddition } from "@/app/modal/StupidFuckingFaucetTokenAddition";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface FacuetCountProps {
  faucetWaitTime: any;
  validClaim: any;
  faucetId: string;
}

type AddActoinProps = {
  currentFaucetId: string;
  Timepayload: string;
};

const AddActoin = async ({ currentFaucetId, Timepayload }: AddActoinProps) => {
  try {
    await dbConnect();

    console.log(currentFaucetId, Timepayload);

    // await StupidFuckingFaucetTokenAddition.findByIdAndUpdate(currentFaucetId, {
    //     faucetCountDownRemains: Timepayload
    // })
  } catch (error) {
    console.log("error", error);
  }
};

const FaucetCount = ({
  faucetWaitTime,
  validClaim,
  faucetId,
}: FacuetCountProps) => {
  const count = faucetWaitTime.split(" ");

  const [hour, setHour] = useState<any>(Number(count[0].split("H")[0]));
  const [minute, setMinute] = useState<any>(Number(count[1].split("M")[0]));

  async function countFunc() {
    // inlizlizing count down
    console.log("inizilizeing count");

    if (minute !== 0 || hour !== 0) {
      hour >= 0 ? setMinute((prev: any) => prev - 1) : null;

      if (hour > 0 && minute === 0) {
        setHour((prev: any) => prev - 1);

        setMinute(60);
      }
    } else {
      if (hour === 0 && minute === 0) {
        validClaim(false);
      }
    }

    // Setting data
    console.log(`====== Remaing time =====`);
    toast(`${hour}H ${minute}M`);
    await AddActoin({
      currentFaucetId: faucetId,
      Timepayload: `${hour}H ${minute}M`,
    });
  }

  useEffect(() => {
    const intervaleTimeset = setInterval(countFunc, 60000);
    return () => clearInterval(intervaleTimeset);
  }, [hour, minute]);

  return (
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
  );
};

export default FaucetCount;
