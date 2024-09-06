import React, { useEffect, useRef, useState } from "react";

interface FacuetCountProps {
  faucetWaitTime: any;
}

const FaucetCount = ({ faucetWaitTime }: FacuetCountProps) => {
  const count = faucetWaitTime.split(" ");
  console.log(count, "the count down");

  const [hour, setHour] = useState<any>(Number(count[0].split("H")[0]));
  const [minute, setMinute] = useState<any>(Number(count[1].split("M")[0]));

  console.log(minute, "current minute");
  console.log(hour, "current hour");

  function countFunc() {
    // inlizlizing count down
    console.log("inizilizeing count");

    while (hour >= 0) {
      setHour((prev: any) => prev - 1);
    }

    setMinute((prev: any) => prev - 1);
  }

  useEffect(() => {
    const intervaleTimeset = setInterval(countFunc, 4000);
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
