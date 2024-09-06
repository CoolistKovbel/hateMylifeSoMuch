"use client";
import FaucetCount from "./FaucetCount";

interface FaucetDataSyfinProp {
  stupidFuckingData: any;
}

const FaucetDataSyfin = ({ stupidFuckingData }: FaucetDataSyfinProp) => {
  console.log(stupidFuckingData);

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
            <FaucetCount faucetWaitTime={item.faucetWaitTime} />
            <li>{item.amount}</li>
            <li>
              <button className="bg-[#444] hover:bg-[#888] p-2 drop-shadow-lg rounded">
                claim
              </button>
            </li>
          </div>
        ))}
    </ul>
  );
};

export default FaucetDataSyfin;
