import Card from "@/components/reuseable/Card";
import Typography from "@/components/reuseable/Typography";
import { BsCalendarEventFill, BsPinMapFill, BsClockFill } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { useState } from "react";
import AttendanceDialog from "./component/AttendanceDialog";
import Button from "@/components/reuseable/Button";
import Snackbar from "@/components/reuseable/Snackbar";
import { motion } from "framer-motion";
import Intenerary from "./component/Itenerary";
import { Great_Vibes } from "next/font/google";

import AtucaraMajlis from "./component/AtucaraMajlis";
const giftList = [
  "Cookware Set",
  "Smart Home Devices",
  "Adventure Experiences",
  "Subscription Boxes",
  "Food/Restaurant Vouchers",
  "Spa Day",
  "Exercise equipment",
];
const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  const targetDate = new Date("2023-12-22T00:00:00");
  const [open, setOpen] = useState(false);

  // state for snackbar
  const [show, setShow] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  return (
    // h-screen max-h-screen for if one it to be the length of a single page
    <div className="relative  overflow-x-hidden   bg-mainBg">
      {/* first page */}
      {/* add h-screen for single page  */}
      <div className="w-full  ">
        <div className="p-4">
          <div className="bg-primary rounded-3xl p-6">
            <Typography variant="h5" className="font-bold text-textLight">
              Ibu Bapa Pengantin
            </Typography>
            <div className="w-full h-[300px] mt-5">
              <img
                src="/assets/mama_papa.jpeg"
                // src="/assets/gambar.jpg"
                className="h-full w-full select-none object-cover rounded"
                alt="gambar"
              />
            </div>
            <div className="flex flex-col">
              <Typography
                variant="body"
                className="mt-2 text-center text-textLight"
              >
                Assalamualaikum, dengan penuh rasa kesyukuran, kami,
              </Typography>
              <Typography
                variant="body"
                className="text-textLight font-bold text-center"
              >
                Professor. Dr. Madya. Mohd bin Omar
              </Typography>
              <Typography
                variant="body"
                className="text-textLight font-bold text-center "
              >
                &
              </Typography>
              <Typography
                variant="body"
                className="text-textLight font-bold text-center "
              >
                Puan Nor Hayati Binti Mohamad
              </Typography>
              <Typography
                variant="body"
                className="text-textLight text-center mt-2 "
              >
                ingin menjemput Tan Sri | Dato&apos; Sri | Dato&apos; | Datin |
                Tuan | Puan ke majlis resepsi putera kami bersama pasangannya
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-8">
            <div className="w-full flex gap-4">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
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
                className="w-1/2"
              >
                <Card
                  maxWidth="w-full h-full"
                  padding="px-2 py-6 flex items-center justify-center"
                >
                  <div className="flex gap-4 items-center justify-center flex-col">
                    <BsCalendarEventFill
                      className="text-textLight "
                      size={32}
                    />
                    <div className="flex flex-col items-center">
                      <Typography variant="h5" className=" text-textLight">
                        Sabtu,
                      </Typography>
                      <Typography variant="h5" className="text-textLight">
                        27 Apr 2024
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
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
                className="w-1/2"
              >
                <Card maxWidth="w-full h-full" padding="px-2 py-6">
                  <div className="flex gap-4 items-center justify-center flex-col">
                    <BsClockFill className="text-textLight " size={32} />
                    <div className="flex flex-col items-center">
                      <Typography variant="h5" className=" text-textLight">
                        11:00 AM -
                      </Typography>
                      <Typography variant="h5" className=" text-textLight">
                        4:00 PM
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
            <div className="w-full h-full flex gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
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
                className="w-full"
              >
                <Card
                  maxWidth="w-full h-full"
                  padding="px-2 py-6 flex items-center justify-center"
                >
                  <a href="https://waze.com/ul/hw282kz0t2" target="_blank">
                    <div className="flex gap-4 items-center justify-center">
                      <BsPinMapFill className="text-textLight " size={32} />
                      <div className="flex flex-col items-center">
                        <Typography variant="h5" className=" text-textLight">
                          Rinching Terrace,
                        </Typography>
                        <Typography variant="h5" className="text-textLight">
                          Kajang
                        </Typography>
                        <Typography
                          variant="sub"
                          className="text-textLight text-center"
                        >
                          (Klik disini untuk lokasi)
                        </Typography>
                      </div>
                    </div>
                  </a>
                </Card>
              </motion.div>
            </div>
          </div>
          <Typography
            variant="body"
            className="text-textMain pt-8 font-semibold"
          >
            Aturcara Majlis
          </Typography>

          <div className="mt-[20px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
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
              <Card>
                <AtucaraMajlis />
              </Card>
            </motion.div>
          </div>
        </div>

        <AttendanceDialog
          open={open}
          setOpen={setOpen}
          setSnackbarOpen={() => setShow(true)}
          setFailed={setIsFailed}
        />
      </div>

      <Snackbar
        failed={isFailed}
        show={show}
        close={() => setShow(false)}
        message={isFailed ? "Sila cuba lagi" : "Terima kasih kerana sudi hadir"}
      />
    </div>
  );
}
