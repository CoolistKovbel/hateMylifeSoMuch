"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const FaucetDeath = () => {
  const { onOpen } = useModal();
  const owner = "0x610aC7169092c2120f20B3b04d8452fa5a90c774";

  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  const HandleAddingAFuckingTokenToTheFuckingFaucetMotherFucker = async () => {
    try {
      console.log("handling the fucking fuacet token request");
      const accounts = await provider.send("eth_requestAccounts", []);

      if (accounts[0] === owner) {
        onOpen("KillUserDreamsFuacet");
      } else {
        toast("contact lyub smh");
      }
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
      <div className="w-full flex items-center justify-between">
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
