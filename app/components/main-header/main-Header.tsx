"use client";

import { ethers } from "ethers";
import { verifyMessage } from "ethers/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const MainHeader = () => {
  // TODO GET USER SETUP

  const [toggle, setToggle] = useState(false);
  const [handleToggle, setHandleToggle] = useState<boolean>(false);
  const [userHandle, setUserHandle] = useState<string>("");
  const [userVerified, setUserVerified] = useState<boolean>(false);

  const HandleMEtaUserClient = async () => {
    try {
      console.log("handle user client");

      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const requestAccount = await provider.send("eth_requestAccounts", []);
      const message = "You are the current account holder logging in today.";
      const signer = provider.getSigner();
      const signedMessage = await signer.signMessage(message);

      const messageCheck = verifyMessage(message, signedMessage);

      if (messageCheck.toLowerCase() === userHandle.toLowerCase()) {
        setUserVerified(true);
        toast("user verified");
      } else {
        toast("Please double check your current account");
      }

      console.log(signedMessage, "message verification");
      console.log(messageCheck.toLowerCase(), "message verification2");
      console.log(userHandle.toLowerCase(), "message verification3");

      setUserHandle(requestAccount[0]);
    } catch (error) {
      toast(
        "Sorry please install metamask or make sure you are logged into it"
      );
    }
  };

  const isLogged = false;

  console.log("the current data", {
    userHandle,
  });

  return (
    <header className=" relative z-20 flex flex-col gap-10 w-full">
      <div className="flex items-center justify-between">
        {isLogged ? (
          <h1 className="text-2xl font-bold">Hello, {`${userHandle}`}</h1>
        ) : (
          <h1 className="text-2xl font-bold">5ehopswa</h1>
        )}

        {isLogged ? (
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="bg-[#111] p-2 relative hover:bg-[#333] rounded drop-shadow-lg"
          >
            ____ ↓
          </div>
        ) : (
          <button
            onClick={HandleMEtaUserClient}
            className="bg-[#111] p-2 hover:bg-[#333] rounded drop-shadow-lg"
          >
            Connect with metamask
          </button>
        )}

        {toggle && (
          <div className="w-[300px] h-[300px] bg-[#222] rounded drop-shadow-lg absolute top-10 right-0 z-20 flex flex-col justify-between p-10">
            <a className="w-full p-3 bg-[#666] hover:bg-[#555] font-bold">
              Profile
            </a>
            <a className="w-full p-3 bg-[#666] hover:bg-[#555] font-bold">
              death request
            </a>
            <a className="w-full p-3 bg-[#666] hover:bg-[#555] font-bold">
              logout
            </a>
          </div>
        )}
      </div>

      <nav className="hidden md:block w-[90%] mx-auto drop-shadow-lg bg-[#f0f8ff37] p-5 rounded flex justify-between items-center">
        <Link
          href="/bidUp"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          Unload
        </Link>
        <Link
          href="/faucet"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          ChampagneShower
        </Link>
        <Link
          href="/melihoper"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          Melihoper
        </Link>
        <Link
          href="/xxx"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          Want to sell your soul.
        </Link>
      </nav>

      <nav className="relative md:hidden w-[90%] mx-auto  drop-shadow-lg  p-5 rounded ">
        <button
          onClick={() => setHandleToggle((prev) => !prev)}
          className="absolute -top-9 right-0 text-4xl z-20"
        >
          ⬇️
        </button>
        
        {handleToggle && (
          <div className="flex flex-col justify-around items-center bg-[#f0f8ff37] gap-5 p-5 rounded drop-shadow-lg w-full">
            <Link
              href="/bidUp"
              className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666] w-full"
            >
              Unload
            </Link>
            <Link
              href="/faucet"
              className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666] w-full"
            >
              ChampagneShower
            </Link>
            <Link
              href="/melihoper"
              className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666] w-full"
            >
              Melihoper
            </Link>
            <Link
              href="/xxx"
              className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666] w-full"
            >
              Want to sell your soul.
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
