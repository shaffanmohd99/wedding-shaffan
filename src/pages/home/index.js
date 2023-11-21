import Card from "@/components/reuseable/Card";
import Typography from "@/components/reuseable/Typography";
import { BsCalendarEventFill, BsPinMapFill, BsClockFill } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import CountdownTimer from "@/components/ui/CountdownTimer";
import IntenaryAkad from "@/components/ui/ItenaryAkad";
import IntenaryWedding from "@/components/ui/ItenaryWedding";
import { useState } from "react";

export default function Home() {
  const targetDate = new Date("2023-12-22T00:00:00");
  const [tab, setTab] = useState("Akad Nikah");
  const tabList = [
    {
      name: "Akad Nikah",
    },
    {
      name: "Wedding",
    },
  ];

  return (
    // h-screen max-h-screen for if one it to be the length of a single page
    <div className="relative w-screen  bg-[#faf7f2]">
      {/* first page */}
      {/* add h-screen for single page  */}
      <div className="w-full  ">
        <div className="p-4">
          <div className="pt-8">
            <Typography variant="h5" className="text-[#332117]">
              {` You're invited to our wedding!`}
            </Typography>
            <Typography variant="sub" className="text-[#332117]/50">
              (PS:This is not your typical wedding)
            </Typography>
            <div>
              <Typography
                variant="body"
                className="text-[#332117] pt-8 font-semibold pb-4"
              >
                Countdown To Our Big Day
              </Typography>
              <CountdownTimer targetDate={targetDate} />
            </div>
            <Typography
              variant="body"
              className="text-[#332117] pt-8 font-semibold"
            >
              Event Details
            </Typography>
          </div>
          <div className="flex flex-col gap-8 mt-4">
            <div className="w-full flex gap-4">
              <Card
                maxWidth="w-1/2"
                padding="px-2 py-6 flex items-center justify-center"
              >
                <div className="flex gap-4 items-center justify-center">
                  <BsCalendarEventFill className="text-[#f4eee0] " size={32} />
                  <div className="flex flex-col items-center">
                    <Typography variant="h5" className=" text-white">
                      22
                    </Typography>
                    <Typography variant="h5" className="text-white">
                      Dec 2023
                    </Typography>
                  </div>
                </div>
              </Card>
              <Card maxWidth="w-1/2" padding="px-2 py-6">
                <div className="flex gap-4 items-center justify-center flex-col">
                  <BsClockFill className="text-[#f4eee0] " size={32} />
                  <div className="flex flex-col items-center">
                    <Typography variant="h5" className=" text-white">
                      1900 - 2300
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
            <div className="w-full flex gap-4">
              <Card
                maxWidth="w-1/2"
                padding="px-2 py-6 flex items-center justify-center"
              >
                <div className="flex gap-4 items-center justify-center">
                  <BsPinMapFill className="text-[#f4eee0] " size={32} />
                  <div className="flex flex-col items-center">
                    <Typography variant="h5" className=" text-white">
                      Evo Mall,
                    </Typography>
                    <Typography variant="h5" className="text-white">
                      Bangi
                    </Typography>
                  </div>
                </div>
              </Card>
              <Card maxWidth="w-1/2" padding="px-2 py-6">
                <div className="flex gap-4 items-center justify-center flex-col">
                  <BiMaleFemale className="text-[#f4eee0] " size={32} />
                  <div className="flex flex-col items-center">
                    <Typography variant="h5" className=" text-white">
                      Dresscode: White
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <Typography
            variant="body"
            className="text-[#332117] pt-8 font-semibold"
          >
            Itinerary
          </Typography>
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
                      ? " border-b-2 border-[#bc8c53] text-[#bc8c53] font-bold"
                      : "text-[#332117]"
                  }`}
                >
                  {item.name}
                </Typography>
              </div>
            ))}
          </div>
          {tab === "Akad Nikah" && <IntenaryAkad />}
          {tab === "Wedding" && <IntenaryWedding />}
        </div>
      </div>

      {/* second page */}
      {/* <div className="w-full h-screen bg-green-500">
        <Container>
          <div>test 123 this is second page</div>
        </Container>
      </div> */}
    </div>
  );
}
