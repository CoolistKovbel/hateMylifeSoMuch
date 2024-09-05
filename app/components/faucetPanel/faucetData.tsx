import React from "react";
import { toast } from "react-toastify";
import FaucetDataSyfin from "./FaucetDataSyfin";

interface FacuetDataProps {
  AllFucets: any;
}

const FaucetData = ({ AllFucets }: FacuetDataProps) => {
  let stupidFuckingData: any = JSON.parse(AllFucets).payload || [];

  if (AllFucets.status === "error" || stupidFuckingData.length === 0) {
    toast("There are no faucets avaible");
  }

  return (
    <div className="flex flex-col gap-2 w-[65%] mx-auto bg-[#AF2B1E] p-4 rounded drop-shadow-lg drop-shadow-lg">
      {/* header */}

      <ul className="flex items-center justify-between w-full bg-[#6C4675] p-2">
        <li>Facuet Token:</li>
        <li>Faucet waitTime:</li>
        <li>Faucet Timer:</li>
        <li>Facuet reward:</li>
        <li>Facuet claim:</li>
      </ul>

      {/* body */}
      <FaucetDataSyfin stupidFuckingData={stupidFuckingData} />

    </div>
  );
};

export default FaucetData;
