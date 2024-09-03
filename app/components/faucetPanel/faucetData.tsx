import React from "react";
import { toast } from "react-toastify";

interface FacuetDataProps {
  AllFucets: any;
}

const FaucetData = ({ AllFucets }: FacuetDataProps) => {
  let stupidFuckingData: any = AllFucets.payload  || []

  if (AllFucets.status === "error") {
    toast("There are no faucets avaible");
  } 
                                                                                                                                                          
  console.log("the stupid data data in the stupid data. ", stupidFuckingData);

  console.log(JSON.stringify(stupidFuckingData));

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
        {stupidFuckingData.map((item) => {

          <div
            key={crypto.randomUUID()}
            className="flex items-center justify-between w-full p-2"
          >
            <p>{JSON.stringify(item)}</p>

            <li>{item.token}</li>
            <li>{item.timeSet / 60} H</li>
            <li>{item.amount}</li>

            <li>
              <button className="bg-[#444] hover:[#888] p-2 drop-shadow-lg">
                claim
              </button>
            </li>

          </div>;

        })}
      </ul>
    </div>
  );
};

export default FaucetData;
