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
const giftList = [
  "Cookware Set",
  "Smart Home Devices",
  "Adventure Experiences",
  "Subscription Boxes",
  "Food/Restaurant Vouchers",
  "Spa Day",
  "Exercise equipment",
];
export default function HomePage() {
  const targetDate = new Date("2023-12-22T00:00:00");
  const [open, setOpen] = useState(false);

  // state for snackbar
  const [show, setShow] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  return (
    // h-screen max-h-screen for if one it to be the length of a single page
    <div className="relative  overflow-x-hidden  bg-[#faf7f2]">
      {/* first page */}
      {/* add h-screen for single page  */}
      <div className="w-full  ">
        <div className="p-4">
          <div className="pt-8">
            {/* <Typography variant="h3" className="text-[#332117] text-center">
              {` Copywriting  juga di sini `}
            </Typography> */}
            <div className="flex flex-col">
              <Typography variant="body" className="text-[#332117] mt-2">
                Bismillahirrahmanirrahim Assalamualaikum WBT
              </Typography>
              <Typography variant="body" className="text-[#332117] font-bold text-center">
                HJ.ROSLAN BIN MOHAMED &
              </Typography>
              <Typography variant="body" className="text-[#332117] font-bold text-center ">
                HJH.SITI BADARNY SHAMSA&apos;IFAH BINTI HASSAN
              </Typography>
              <Typography
                variant="body"
                className="text-[#332117] text-justify mt-2"
              >
                Dengan penuh kesyukuran, kami ingin menjemput Dato / Datin /
                Tuan / Puan / Encik / Cik sekeluarga ke Majlis Perkahwinan
                Puteri kami
              </Typography>
              <div className="flex flex-col gap-0 items-center uppercase">
                <Typography
                  variant="body"
                  className="text-[#332117] text-justify mt-2 font-bold"
                >
                  Nur Basyirah binti Roslan &
                </Typography>
                <Typography
                  variant="body"
                  className="text-[#332117] text-justify mt-2 font-bold"
                >
                  Norshaffan bin Mohd
                </Typography>
              </div>
            </div>
            {/* <Typography
              variant="body"
              className="text-[#332117] pt-8 font-semibold pb-4"
            >
              Let us know if you are coming
            </Typography>
            <div onClick={() => setOpen(true)}>
              <Button variant="outlined">Click here to RSVP</Button>
            </div> */}

            {/* <div>
              <Typography
                variant="body"
                className="text-[#332117] pt-8 font-semibold pb-4"
              >
                Countdown To Our Big Day
              </Typography>
              <motion.div
                initial={{ x: 300 }}
                whileInView={{
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.3,
                  },
                }}
                viewport={{ once: true }}
              >
                <CountdownTimer targetDate={targetDate} />
              </motion.div>
            </div> */}
            <Typography
              variant="body"
              className="text-[#332117] pt-8 font-semibold"
            >
              Tentang Majlis
            </Typography>
          </div>
          <div className="flex flex-col gap-8 mt-4">
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
                  <div className="flex gap-4 items-center justify-center">
                    <BsCalendarEventFill
                      className="text-[#f4eee0] "
                      size={32}
                    />
                    <div className="flex flex-col items-center">
                      <Typography variant="h5" className=" text-white">
                        27
                      </Typography>
                      <Typography variant="h5" className="text-white">
                        Apr 2024
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
                <Card maxWidth="w-full" padding="px-2 py-6">
                  <div className="flex gap-4 items-center justify-center flex-col">
                    <BsClockFill className="text-[#f4eee0] " size={32} />
                    <div className="flex flex-col items-center">
                      <Typography variant="h5" className=" text-white">
                        1100 - 1600
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
            <div className="w-full flex gap-4 justify-center">
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
                      <BsPinMapFill className="text-[#f4eee0] " size={32} />
                      <div className="flex flex-col items-center">
                        <Typography variant="h5" className=" text-white">
                          Rinching Terrace
                        </Typography>
                        <Typography variant="h5" className="text-white">
                          Kajang
                        </Typography>
                        <Typography
                          variant="sub"
                          className="text-white text-center"
                        >
                          (Click here for location)
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
            className="text-[#332117] pt-8 font-semibold"
          >
            Atucara Majlis
          </Typography>
          <div className="mt-[20px]">
            {/* <Intenerary /> */}
            <Card>
              {/*  */}
              <div className="w-full flex flex-col gap-4 mt-[10px]">
                <div className="w-full flex">
                  <div className="w-1/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      1100
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      Ketibaan tetamu
                    </Typography>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      1200
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      Ketibaan tetamu terhormat
                    </Typography>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      1230
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      Perarakan masuk pengantin
                    </Typography>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      1600
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography
                      variant="body"
                      className="text-white text-left  "
                    >
                      Majlis bersurai
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* <Typography
            variant="body"
            className="text-[#332117] pt-8 mb-4 font-semibold"
          >
            Gift Idea List
          </Typography> */}
          {/* <motion.div
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
              <ul className="list-disc  text-white pl-6">
                {giftList.map((item, index) => (
                  <li key={index}>
                    <Typography variant="body" className="text-white ">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div> */}
        </div>

        {/* <AttendanceDialog
          open={open}
          setOpen={setOpen}
          setSnackbarOpen={() => setShow(true)}
          setFailed={setIsFailed}
        /> */}
      </div>

      {/* <Snackbar
        failed={isFailed}
        show={show}
        close={() => setShow(false)}
        message={
          isFailed ? "An error just occured" : "Thank you for letting us know"
        }
      /> */}
    </div>
  );
}
