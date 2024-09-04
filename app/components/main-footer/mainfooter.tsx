import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex items-center md:flex-row flex-col justify-between w-full bg-[#11111174] drop-shadow-lg border-t-5 border-white p-5 gap-10">
      <div className="w-[60%]">
        <h2 className="text-2xl font-bold">Smile</h2>
        <p className="text-sm text-gray-500">
          The place to be to get on your adventure
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-[30%]">
        <Link href="/">Token</Link>
        <Link href="/">NFT</Link>
        <Link href="/">death</Link>
      </div>
    </footer>
  );
};

export default MainFooter;
