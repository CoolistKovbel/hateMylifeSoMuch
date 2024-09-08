import MainFooter from "../components/main-footer/mainfooter";
import MainHeader from "../components/main-header/main-Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-10 flex flex-col justify-between w-full min-h-screen bg-[#222]">
      <MainHeader />
      {children}
      <MainFooter />
    </main>
  );
}
