import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex items-center md:flex-row flex-col justify-between w-full bg-[#11111174] drop-shadow-lg border-t-5 border-white p-5 mt-10 gap-10 rounded">
      <div className="w-[60%]">
        <h2 className="text-2xl font-bold">5ehopswa</h2>
        <p className="text-sm text-gray-500">
          The place to be to get on your adventure
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-[20%]">
        <Link className="hover:underline uppercase bold text-shadow-lg" href="/">Token</Link>
        <Link className="hover:underline uppercase bold text-shadow-lg" href="/">NFT</Link>
        <Link className="hover:underline uppercase bold text-shadow-lg" href="/">death</Link>
      </div>
    </footer>
  );
};

export default MainFooter;
