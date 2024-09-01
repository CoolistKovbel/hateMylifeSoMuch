"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { toast } from "react-toastify";

const FaucetDeath = () => {
  const { onOpen } = useModal();

  const HandleAddingAFuckingTokenToTheFuckingFaucetMotherFucker = async () => {
    try {
      console.log("handling the fucking fuacet token request");

      onOpen("KillUserDreamsFuacet");
    } catch (error) {
      toast(
        "sorry.. cant fucking handle this mother fucking request kill the dude"
      );
    }
  };

  const HandleTheStupidFickingTokenRequest = async () => {
    try {
      console.log("handling the fucking fuacet token request");

      onOpen("KillSelfAddition");
    } catch (error) {
      toast(
        "sorry.. cant fucking handle this mother fucking request kill the dude"
      );
    }
  };

  return (
    <header className="flex items-center justify-between p-5 w-[80%] mx-auto">
      <h2 className="text-4xl font-bold bg-[#222] p-2 underline rounded drop-shadow-lg">
        KMS faucet
      </h2>
      <div className="w-[20%] flex items-center justify-between">
        <button
          className="p-2 uppercase bg-emerald-500 text-white font-bold rounded drop-shadow-lg hover:bg-emerald-200"
          onClick={HandleAddingAFuckingTokenToTheFuckingFaucetMotherFucker}
        >
          add
        </button>
        <button
          className="p-2 uppercase bg-emerald-500 text-white font-bold rounded drop-shadow-lg hover:bg-emerald-200"
          onClick={HandleTheStupidFickingTokenRequest}
        >
          request
        </button>
      </div>
    </header>
  );
};

export default FaucetDeath;
