import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesSection = () => {
  const data = [
    {
      title: "Get Better Swaps Experience",
      imageSrc: "/swapExperiencev1.png",
      imageAlt: "image of features that the user can do.... ",
      description:
        "Make simple swaps at affortable prices while also being able to save on each swap",
      contentLink: "/swap",
    },
    {
      title: "Re3p Tokens from Faucet",
      imageSrc: "/fucetReeapv1.png",
      imageAlt: "image of features that the user can do.... ",
      description: "Join a faucet and reap the rewards ever time set.",
      contentLink: "/faucet",
    },
    {
      title: "Generate LP",
      imageSrc: "/tokenLPv1.png",
      imageAlt: "image of features that the user can do.... ",
      description:
        "Generate LP tokens and put them into a pool to earn more rewards from interest",
      contentLink: "/melihoper",
    },
  ];

  return (
    <section className="flex item-center justify-around md:flex-row flex-col gap-10">
      {data.map((item) => (
        <article
          key={crypto.randomUUID()}
          className="w-full md:w-[30%] bg-[#111] p-3 flex flex-col justify-center gap-5 items-center text-center rounded drop-shadow-lg"
        >
          <header className="flex items-center flex-col justify-center gap-5">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <div className="w-[200px] h-[200px] relative">
              <Image src={item.imageSrc} fill alt={item.imageAlt} />
            </div>
          </header>

          <p className="text-sm text-gray-500">{item.description}</p>

          <Link
            href={item.contentLink}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            llink
          </Link>
        </article>
      ))}
    </section>
  );
};

export default FeaturesSection;
