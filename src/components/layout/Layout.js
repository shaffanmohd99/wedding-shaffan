import { useRouter } from "next/router";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";


const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;
  return (
    <main className={roboto.className}>
      {/* {showHeader && <Header />} */}

      {children}
      <Analytics />

      {/* <Footer/> */}
    </main>
  );
};
