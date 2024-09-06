import MainFooter from "../components/main-footer/mainfooter";
import MainHeader from "../components/main-header/main-Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-10 flex flex-col justify-between">
      <MainHeader />
      {children}
      <MainFooter />
    </main>
  );
}
