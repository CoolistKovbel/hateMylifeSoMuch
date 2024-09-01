import BidsPanel from "@/app/components/bidsPanel/BidsPanel";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <header className="bg-[#444] p-10 drop-shadow-lg">
        <h2 className="text-6xl font-bold">
          <Link href="/">BidUp</Link>
        </h2>
        <p className="capitalize p-2 text-xl">Sell and buy</p>
      </header>

      <BidsPanel />
    </section>
  );
};

export default Page;
