"use client";
import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className=" relative z-20 flex flex-col gap-10 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Hello mother fucker</h1>

        <div
          onClick={() => setToggle((prev) => !prev)}
          className="bg-[#111] p-2 relative"
        >
          ____ ↓
        </div>

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
      <nav className="w-[90%] mx-auto flex justify-around items-center drop-shadow-lg bg-[#f0f8ff37] p-3 rounded">
        <Link href="/bidUp">Want to bleed.</Link>
        <Link href="/faucet">want to die.</Link>
        <Link href="/">Need sucide.</Link>
        <Link href="/">Want to sell your soul.</Link>
      </nav>
    </header>
  );
};

export default MainHeader;
