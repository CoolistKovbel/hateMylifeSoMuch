import Link from "next/link";
import EmailList from "./components/EmailList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h2>Hello mother fucker</h2>
      <nav>
        <Link href="/bidUp">Want to bleed.</Link>
        <Link href="/faucet">want to die.</Link>
        <Link href="/">Need sucide.</Link>
        <Link href="/">Want to sell your soul.</Link>
      </nav>
      <section>
        <h2>
          Sign up email list to get notified for any new openings that get
          created
        </h2>
        <EmailList />
      </section>
    </main>
  );
}
