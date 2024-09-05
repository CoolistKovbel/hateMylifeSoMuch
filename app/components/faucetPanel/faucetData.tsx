import React from "react";
import { toast } from "react-toastify";

interface FacuetDataProps {
  AllFucets: any;
}

const FaucetData = ({ AllFucets }: FacuetDataProps) => {
  let stupidFuckingData: any = AllFucets.payload || [];

  if (AllFucets.status === "error") {
    toast("There are no faucets avaible");
  }

  console.log("the stupid data data in the stupid data. ", stupidFuckingData);


  // const fucetCoundown = (timeRemaining: number) => {
  //   // Get the timeset in hours

  //   // Time calculations for days, hours, minutes and seconds
  //   const hours = Math.floor(timeRemaining / 3600);
  //   const minutes = Math.floor((timeRemaining % 3600) / 60);
  //   const seconds = timeRemaining % 60;

  //   setInterval(fucetCoundown, 1000);

  //   // If the count down is finished, write some text
  //   if (timeRemaining < 0) {
  //     clearInterval(0);
  //     return "EXPIRED";
  //   }


  //   console.log(hours, minutes)

  //   // Display the result in the element with id="demo"
  //   // return hours + "h " + minutes + "m " + seconds + "s ";
  // };

  // fucetCoundown(400)




  return (
    <div className="flex flex-col gap-2 w-[65%] mx-auto bg-[#AF2B1E] p-4 rounded drop-shadow-lg drop-shadow-lg">
      {/* header */}

      <ul className="flex items-center justify-between w-full bg-[#6C4675] p-2">
        <li>Facuet Token:</li>
        <li>Faucet Timer:</li>
        <li>Facuet reward:</li>
        <li>Facuet claim:</li>
      </ul>

      {/* body */}
      <ul className=" bg-[#6C4675] ">
        {stupidFuckingData &&
          stupidFuckingData.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="flex items-center justify-between w-full p-2"
            >
              <li>{item.token}</li>
              <li>{Math.ceil(item.timeSet / 60)} H</li>
              <li>{item.amount}</li>

              <li>
                <button className="bg-[#444] hover:bg-[#888] p-2 drop-shadow-lg rounded">
                  claim
                </button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default FaucetData;
