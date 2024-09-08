import FaucetHeader from "@/app/components/faucetPanel/FaucetHeader";
import FaucetData from "@/app/components/faucetPanel/faucetData";
import FaucetDeath from "@/app/components/faucetPanel/faucetDeath";
import { HandleGetAllTheFuckingFucets } from "@/app/lib/actions";

const Page = async () => {
  const AllDeFaucets = await HandleGetAllTheFuckingFucets();

  return (
    <section className="bg-[#444] p-10 rounded drop-shadow-lg">
      <FaucetHeader />

      <article>
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

      </article>

    </section>
  );
};

export default Page;
