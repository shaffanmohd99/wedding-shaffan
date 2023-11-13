import { useRouter } from "next/router";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;
  return (
    <main>
      {/* {showHeader && <Header />} */}

      {children}
      {/* <Footer/> */}
    </main>
  );
};
