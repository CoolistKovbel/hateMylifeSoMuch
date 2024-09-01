import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h2>Hello world</h2>
      <Link href="/bidUp">Need some tokens</Link>
      <section>
        <h2>Sign up email list to get notified for any new openings that get created</h2>
        <form>
          <label htmlFor="userEmailList">
            <span>Enter Email:</span>
            <input type="email" placeholder="enter your email fool" className="p-2 bg-[#222] drop-shadow-lg" />
          </label>
          <button className="p-2 bg-[#468]">submit</button>
        </form>
      </section>
    </main>
  );
}
