"use client";

import { useEffect, useRef } from "react";

interface FaucetDataSyfinProp {
  stupidFuckingData: any;
}

const FaucetDataSyfin = ({ stupidFuckingData }: FaucetDataSyfinProp) => {
  const ref = useRef<any>("");

  // recoursive
  const FucetCoundown = (timeRemaining: number) => {
    let test = timeRemaining.toString().includes("h");

    if (test) {
      // Get the timeset in hours
      const date = new Date(Number(timeRemaining));

      // Time calculations for days, hours, minutes and seconds
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      // If the count down is finished, write some text
      if (timeRemaining < 0) {
        clearInterval(0);
        return "EXPIRED";
      }

      // Display the result in the element with id="demo"
      return hours + "h " + minutes + "m " + seconds + "s ";
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
            <li>{Math.ceil(item.timeSet / 60)} H</li>
            <li>{item.amount}</li>
            <li>
              {ref.current !== "EXPIRED"
                ? FucetCoundown(item.faucetWaitTime)
                : "EXPIRED"}
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
