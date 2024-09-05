"use client";

import { useEffect, useRef } from "react";

interface FaucetDataSyfinProp {
  stupidFuckingData: any;
}

const FaucetDataSyfin = ({ stupidFuckingData }: FaucetDataSyfinProp) => {
  const ref = useRef<any>("");
  const fHour = useRef<number>(0);
  const fMinute = useRef<number>(0);

  // recoursive
  const FucetCoundown = (timeSet: string) => {
    console.log(timeSet);
    let testH = timeSet.split("H")[0];
    let testM: any = timeSet.split(" ")[1];
    testM = [testM].toString().split("M")[0];

    if (Number(testH) === 0 && Number(testM) === 0) {
      return "EXPIRED";
    }

    
    while (Number(testM) > 0) {
      fMinute.current = Number(testM) - 1;
      console.log(testH + "h " + testM + "m ");
    }
    while (Number(testH) > 0) {
      fHour.current = Number(testH) - 1;
      fMinute.current =+ 60;
      console.log(testH + "h " + testM + "m ");
    }
  };

  useEffect(() => {
    let intervalId = setInterval(FucetCoundown, 1000);
    ref.current = intervalId;

    return () => clearInterval(intervalId);
  }, [ref]);

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
            <li>{item.amount}</li>

            <li className="w-[100px]">
              <p className="flex items-center justify-between">
                <span>hours:</span>
                {fHour.current || FucetCoundown(item.faucetWaitTime)}
              </p>
              <p className="flex items-center justify-between">
                <span>minute:</span>
                {fMinute.current || FucetCoundown(item.faucetWaitTime)}
              </p>
            </li>

            <li>
              <button
                disabled={ref.current === "EXPIRED" ? true : false}
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
