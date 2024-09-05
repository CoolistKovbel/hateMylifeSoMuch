"use client";
import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  // TODO GET USER SETUP

  const [toggle, setToggle] = useState(false);

  const isLogged = false;

  return (
    <header className=" relative z-20 flex flex-col gap-10 w-full">
      <div className="flex items-center justify-between">
        {isLogged ? (
          <h1 className="text-2xl font-bold">Hello mother fucker</h1>
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
          <button className="bg-[#111] p-2 hover:bg-[#333] rounded drop-shadow-lg">
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

      <nav className="w-[90%] mx-auto flex justify-around items-center drop-shadow-lg bg-[#f0f8ff37] p-5 rounded">
        <Link
          href="/bidUp"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          Want to bleed.
        </Link>
        <Link
          href="/faucet"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          want to die.
        </Link>
        <Link
          href="/"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          Need sucide.
        </Link>
        <Link
          href="/"
          className="p-2 bg-[#455] rounded drop-shadow-lg hover:bg-[#666]"
        >
          Want to sell your soul.
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
