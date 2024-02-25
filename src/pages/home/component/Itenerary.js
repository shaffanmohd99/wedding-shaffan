import Typography from "@/components/reuseable/Typography";
import IntenaryAkad from "@/components/ui/ItenaryAkad";
import IntenaryWedding from "@/components/ui/ItenaryWedding";
import { motion } from "framer-motion";
import { useState } from "react";

const tabList = [
  {
    name: "Akad Nikah",
  },
  {
    name: "Reception",
  },
];
export default function Intenerary() {
  const [tab, setTab] = useState("Akad Nikah");

  return (
    <>
      <div className=" h-[45px] w-full  border-b border-[#e4d5b7] flex gap-4">
        {tabList.map((item, index) => (
          <div
            key={index}
            onClick={() => setTab(item.name)}
            className="cursor-pointer "
          >
            <Typography
              variant="h5"
              className={`  h-[45px] flex items-center  px-2    ${
                item.name === tab
                  ? " border-b-2 border-primary text-primary font-bold"
                  : "text-textMain"
              }`}
            >
              {item.name}
            </Typography>
          </div>
        ))}
      </div>
      <motion.div
        key={tab} // Add the key prop
        initial={{ opacity: 0, x: tab === "Akad Nikah" ? -100 : 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.3,
          },
        }}
        viewport={{ once: true }}
      >
        {tab === "Akad Nikah" && <IntenaryAkad />}
        {tab === "Reception" && <IntenaryWedding />}
      </motion.div>
    </>
  );
}
