import { useRouter } from "next/router";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Roboto, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;
  return (
    <main className={inter.className}>
      {/* {showHeader && <Header />} */}

      {children}
      <Analytics />

      {/* <Footer/> */}
    </main>
  );
};
