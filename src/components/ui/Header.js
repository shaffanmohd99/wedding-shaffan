import Link from "next/link";
import { BsList } from "react-icons/bs";
// import MobileMenu from "../layout/MobileMenu";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const menu = [
    { id: 1, title: "Details", url: "/" },
    { id: 2, title: "Itenary", url: "/" },
    { id: 3, title: "Say something", url: "/" },
    { id: 4, title: "Gift list", url: "/" },
   
  ];
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="fixed z-50 flex h-16 w-full bg-slate-200 px-2 backdrop-blur-sm sm:px-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-2">
          {/* LOGO */}
          <Link href="/">
            {/* <img
              src="/assets/images/logo_black.png"
              className=" max-h-16 object-cover py-1"
            /> */}
            logo
          </Link>
          {/* MENU */}
          <div className="hidden items-center gap-12   sm:flex">
            {menu.map((item) => (
              <div
                key={item.id}
                className={`hover:text-blog-blue ${
                  router.pathname.includes(item.url) ? "text-blog-blue " : ""
                }`}
              >
                <Link href={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>

          <div className="flex sm:hidden" onClick={() => setOpen(true)}>
            <BsList size={24} className="text-blog-black" />
          </div>
        </div>
      </div>
      {/* <MobileMenu
        data={menu}
        open={open}
        handleCloseDialog={() => setOpen(false)}
      /> */}
    </>
  );
}
