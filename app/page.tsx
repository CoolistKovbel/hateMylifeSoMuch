import Link from "next/link";
import EmailList from "./components/EmailList";
import { Boxes } from "./components/ui/background-boxes";
import Image from "next/image";
import MainHeader from "./components/main-header/main-Header";
import FeaturesSection from "./components/features-section";
import MainFooter from "./components/main-footer/mainfooter";

export default function Home() {
  return (
    <main className="flex min-h-[1920px] flex-col justify-between items-center gap-10 p-5 md:p-24 relative overflow-hidden ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <MainHeader />

      <section className="bg-[#111] rounded drop-shadow-lg p-5 relative z-10 mb-4 w-[80%] flex flex-col justify-center items-center md:h-[180px]">
        <h2 className="text-center text-gray-300 text-3xl text-shadow mb-4 capitlize">
          Sign up email list to get notified for any new openings that get
          created
        </h2>

        <EmailList />
      </section>

      <section className="relative z-20 flex flex-col gap-10">

        <header className="w-[70%] mx-auto flex items-center justify-around md:flex-row flex-col gap-4">

          <div className="w-[60%] text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Join in on the action
            </h2>
            <p className="text-gray-500 font-bold text-sm p-4 ">
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

        <article className="flex items-center w-full justify-between flex-row-reverse bg-[#11111174] drop-shadow-lg rounded p-6 md:h-[400px] gap-4 flex-col md:flex-row">

          <header className="w-[98%] md:w-[60%] h-full p-2 flex flex-col gap-4 justify-around rounded drop-shadow-lg text-center bg-[#f0f8ff1f]">
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


        <FeaturesSection />

      </section>

      <MainFooter />
    </main>
  );
}
