"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import Image from "next/image";
import { useState } from "react";

const BidsPanel = () => {
  // Call... maybe.......
  const BidData: any = [
    {
      id: crypto.randomUUID(),
      tokenImage: "/bitcoinpng.png",
      amount: 0.1,
      value: 4345,
      token: "BTC",
      seller: crypto.randomUUID().slice(0, 8),
      date: Number(Date.now()),
    },
    {
      id: crypto.randomUUID(),
      tokenImage: "/ethereumpng.png",
      amount: 1,
      value: 4310,
      token: "ETH",
      seller: crypto.randomUUID().slice(0, 8),
      date: Number(Date.now()),
    },
    {
      id: crypto.randomUUID(),
      amount: 0.1,
      value: 4,
      tokenImage: "/shiba-inu-shib-logo.svg",
      token: "SHIB",
      seller: crypto.randomUUID().slice(0, 8),
      date: Number(Date.now()),
    },
    {
      id: crypto.randomUUID(),
      amount: 43,
      value: 3,
      tokenImage: "/DOGEpng.png",
      token: "DOGE",
      seller: crypto.randomUUID().slice(0, 8),
      date: Number(Date.now()),
    },
    {
      id: crypto.randomUUID(),
      amount: 0.1,
      value: 1,
      tokenImage: "/NueroClumpToken.png",
      token: "NCT",
      seller: crypto.randomUUID().slice(0, 8),
      date: Number(Date.now()),
    },
  ];

  const [filester, setFulester] = useState("xxx");
  const [currentData, setCurrentData] = useState<any>([]);

  const { onOpen } = useModal();

  const handleCreate = async () => {
    console.log("handle create");
    onOpen("CreateBid");
  };

  const handleTokeSale = async () => {
    console.log("handle token sale");
    onOpen("BuyUserBid");
  };

  const selectBid = async (e: any) => {
    const { value } = e.target;

    console.log(value);

    switch (value) {
      case value === "HighValue":
        console.log("switging to ", value);
        setCurrentData(
          BidData.sort((prev: any, current: any) => {
            return current.value - prev.value;
          })
        );
        console.log(currentData);
        setFulester(value);
      case value === "LowValue":
        setCurrentData(
          BidData.sort((prev: any, current: any) => {
            return prev.value - current.value;
          })
        );
        console.log("switging to ", value);
        setFulester(value);
      case value === "Recent":
        setCurrentData(
          BidData.reduce((x: any, y: any) => {
            return y.date - x.date;
          })
        );
        console.log("switging to ", value);
        setFulester(value);
      default:
        console.log("----👉🫶👈----");
    }

    console.log(
      "low",
      BidData.sort((prev: any, current: any) => {
        return current.value - prev.value;
      })
    );

    console.log(
      "high",
      BidData.sort((prev: any, current: any) => {
        return prev.value + current.value;
      })
    );
  };

  return (
    <div>
      <header className="flex items-center justify-between p-5 bg-[#555]">
        <button
          onClick={handleCreate}
          className="p-3 bg-[#544] rounded drop-shadow-lg hover:bg-[#555] font-bold"
        >
          Create
        </button>

        <label htmlFor="filter" className="relative">
          <span className="absolute -top-7 left-0 uppercase p-1 text-sm rounded drop-shadow-lg bg-[firebrick]">
            filter:
          </span>
          <select
            name="bidControl"
            id="bidControl"
            className="bg-[#111] rounded p-2"
            onChange={selectBid}
          >
            <option value="xxx">xxx</option>
            <option value="HighValue">HighValue</option>
            <option value="LowValue">LowValue</option>
            <option value="Recent">Recent</option>
          </select>
        </label>
      </header>

      {/* ui */}
      <div className="flex items-center justify-between w-[80%] mx-auto h-[720px] overflow-auto p-4 drop-shadow-lg rounded gap-10 flex-wrap">
        {currentData.map((item: any, i: any) => (
          <div
            key={i}
            className="w-[300px] h-[300px] drop-shadow-lg p-4 bg-[#333] rounded flex flex-col justify-between"
          >
            <div className="w-[100px] h-[100px] relative">
              <Image src={item.tokenImage} alt="image" fill />
            </div>
            <p>amount: {item.amount}</p>
            <p>value: ${item.value}</p>
            <div>
              <h3>Seller: {item.seller}</h3>
            </div>
            <button
              onClick={handleTokeSale}
              className="bg-[firebrick] hover:bg-[#333] font-bold"
            >
              buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidsPanel;
