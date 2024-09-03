import Link from "next/link";
import EmailList from "./components/EmailList";
import { Boxes } from "./components/ui/background-boxes";
import Image from "next/image";
import MainHeader from "./components/main-header/main-Header";

export default function Home() {
  return (
    <main className="flex min-h-[1920px] flex-col items-center gap-10 p-24 relative overflow-hidden ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <MainHeader />

      <section className="bg-[#111] rounded drop-shadow-lg p-2 relative z-10 mb-4 w-[80%] flex flex-col justify-center items-center h-[180px]">
        <h2 className="text-center text-gray-300 text-3xl text-shadow mb-4 capitlize">
          Sign up email list to get notified for any new openings that get
          created
        </h2>

        <EmailList />
      </section>

      <section className="relative z-20 flex flex-col gap-10">
        <header className="flex items-center justify-around">
          <div className="w-[40%]">
            <h2 className="text-4xl font-bold uppercase mb-4">
              Join in on the action
            </h2>
            <p className="text-gray-500 font-bold text-sm">
              Start with a simple register or sign up for our email list to get
              the latest project updates or hot fixes that may come accross in
              the future.
            </p>
          </div>

          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/DucleTimeDome.png"
              alt="."
              fill
              className="rounded-[9%] drop-shadow-lg"
            />
          </div>
        </header>

        <article className="flex items-center justify-between flex-row-reverse bg-[#11111174] drop-shadow-lg rounded p-10 h-[400px]">
          <header className="w-[60%] h-full p-2 flex flex-col gap-4 justify-around rounded drop-shadow-lg text-center bg-[#f0f8ff1f]">
            <h3 className="text-4xl font-bold  capitalize">
              Need a place to start your journey
            </h3>
            <p className="text-sm text-gray-300 text-shadow">
              Always wanted to fucking dip your feet 💦 into the market but
              didnt know where to start or how 🛣️. Re3p through our faucet 🪙
              and join certain mother fucking rewards.
            </p>
            <Link
              href="/"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Earn Today
            </Link>
          </header>

          <div className="w-[300px] h-[300px] relative">
            <Image src="/future03.png" alt="starting point." fill />
          </div>
        </article>

        <section className="flex item-center justify-around md:flex-row flex-col gap-10">

          <article className="w-full md:w-[30%] bg-[#111] p-3 flex flex-col justify-center gap-5 items-center rounded drop-shadow-lg">
            <header className="flex items-center flex-col justify-center gap-5 ">
              <h3 className="text-2xl font-bold">Get Better Swaps Experience</h3>
              <div className="w-[200px] h-[200px] relative">
                <Image
                  src="https://placeholder.co/200"
                  fill
                  alt="image of features that the user can do.... "
                />
              </div>
            </header>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quasi libero, sint incidunt omnis, veniam pariatur repellat
              maxime, voluptatum in est dolores expedita aut explicabo vero
              magni corrupti natus iusto.
            </p>

            <Link
              href="/"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              llink{" "}
            </Link>
          </article>

          <article className="w-full md:w-[30%] bg-[#111] p-3 flex flex-col justify-center gap-5 items-center  rounded drop-shadow-lg">
            <header className="flex items-center flex-col justify-center gap-5">
              <h3 className="text-2xl font-bold">Re3p Tokens from Faucet</h3>

              <div className="w-[200px] h-[200px] relative">
                <Image
                  src="https://placeholder.co/200"
                  fill
                  alt="image of features that the user can do.... "
                />
              </div>
            </header>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quasi libero, sint incidunt omnis, veniam pariatur repellat
              maxime, voluptatum in est dolores expedita aut explicabo vero
              magni corrupti natus iusto.
            </p>

            <Link
              href="/"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              llink{" "}
            </Link>
          </article>

          <article className="w-full md:w-[30%] bg-[#111] p-3 flex flex-col justify-center gap-5 items-center rounded drop-shadow-lg">

            <header className="flex items-center flex-col justify-center gap-5">
              <h3 className="text-2xl font-bold">Generate LP</h3>
              <div className="w-[200px] h-[200px] relative">
                <Image
                  src="https://placeholder.co/200"
                  fill
                  alt="image of features that the user can do.... "
                />
              </div>
            </header>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quasi libero, sint incidunt omnis, veniam pariatur repellat
              maxime, voluptatum in est dolores expedita aut explicabo vero
              magni corrupti natus iusto.
            </p>

            <Link
              href="/"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              llink{" "}
            </Link>
          </article>

        </section>
      </section>


      <footer className="flex items-center md:flex-row flex-col justify-between w-full bg-[#11111174] drop-shadow-lg border-t-5 border-white p-5 gap-10">

        <div className="w-[60%]">
          <h2 className="text-2xl font-bold">Smile</h2>
          <p className="text-sm text-gray-500">The place to be to get on your adventure</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-[30%]">
          <Link href="/">Token</Link>
          <Link href="/">NFT</Link>
          <Link href="/">death</Link>
        </div>

      </footer>

    </main>
  );
}
