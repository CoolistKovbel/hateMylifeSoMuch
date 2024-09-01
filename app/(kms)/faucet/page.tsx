import FaucetData from "@/app/components/faucetPanel/faucetData";
import FaucetDeath from "@/app/components/faucetPanel/faucetDeath";
import React from "react";

const Page = () => {
  return (
    <section>
      <header className="p-10 text-center">
        <h2 className="text-6xl font-bold">Want to die</h2>
        <p className="text-gray-500 text-md">
          Request a verity of tokens that get uploaded to our system
        </p>
      </header>

      {/* I want you to die */}
      {/* Wait for it */}

      <div>
        <FaucetDeath />

        <div className="text-center">
          <select
            name="sortBy"
            id="sortBy"
            className="mb-4 bg-[#666] p-2 w-[100px]"
          >
            <option value="timeOfDeath">TOD</option> {/* high to low */}
            <option value="valueOfKill">VOK</option> {/* high to low */}
            <option value="amountOfToken">AOT</option> {/* high to low */}
          </select>

          {/* faucet data */}
          <FaucetData />
        </div>
      </div>
    </section>
  );
};

export default Page;
