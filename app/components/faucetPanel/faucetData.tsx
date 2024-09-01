import React from "react";

const FaucetData = () => {
  return (
    <div className="flex flex-col gap-2 w-[45%] mx-auto bg-[#AF2B1E] p-4 rounded drop-shadow-lg drop-shadow-lg">
      {/* header */}

      <ul className="flex items-center justify-between w-full bg-[#6C4675] p-2">
        <li>Facuet Token:</li>
        <li>Faucet Timer:</li>
        <li>Facuet reward:</li>
        <li>Facuet claim:</li>
      </ul>

      {/* body */}
      <ul className=" bg-[#6C4675] ">
        <div className="flex items-center justify-between w-full p-2">
          <li>NCT</li>
          <li>4 h</li>
          <li>10</li>
          <li>
            {" "}
            <button className="bg-[#444] hover:[#888] p-2 drop-shadow-lg">
              claim
            </button>{" "}
          </li>
        </div>

        <div className="flex items-center justify-between w-full p-2">
          <li>DOGE</li>
          <li>4 h</li>
          <li>1</li>
          <li>
            {" "}
            <button className="bg-[#444] hover:[#888] p-2 drop-shadow-lg">
              wait
            </button>{" "}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FaucetData;
