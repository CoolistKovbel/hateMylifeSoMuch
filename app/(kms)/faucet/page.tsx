import FaucetData from "@/app/components/faucetPanel/faucetData";
import FaucetDeath from "@/app/components/faucetPanel/faucetDeath";
import { HandleGetAllTheFuckingFucets } from "@/app/lib/actions";

const Page = async () => {
  const AllDeFaucets = await HandleGetAllTheFuckingFucets();




  return (
    <section className="bg-[#444] p-10 rounded drop-shadow-lg">

      <header className="p-10 text-center border">
        <h2 className="text-6xl font-bold mb-6">5ehopDrip</h2>
        <p className="text-gray-900 text-shadow-lg text-lg font-bold">
          Request a verity of tokens that get uploaded to our system
        </p>
      </header>

      <div>
        <FaucetDeath />

        <div className="text-right">
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
          <FaucetData AllFucets={JSON.stringify(AllDeFaucets)} />
        </div>
      </div>

    </section>
  );
};

export default Page;
