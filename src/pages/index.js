import Card from "@/components/reuseable/Card";
import Container from "@/components/reuseable/Container";
import Countdown from "@/components/ui/Countdown";
import Typography from "@/components/reuseable/Typography";
import { BsCalendarEventFill, BsPinMapFill } from "react-icons/bs";
import Itinerary from "@/components/ui/Itinerary";
import { Great_Vibes } from "next/font/google";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ['latin'] })
const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen max-h-screen bg-[#faf7f2]">
      <div className="w-full h-[75%] relative">
        <img
          src="/assets/gambar_2.jpeg"
          // src="/assets/gambar.jpg"
          className="h-full w-full select-none object-cover"
          alt="gambar"
        />
        {/* <div className="absolute inset-0 bg-[#bc8c53] opacity-60"></div> */}
        <div
          className={`${great_vibes.className} absolute inset-0 flex flex-col gap-2  `}
        >
          <div className="bg-[#faf7f2] flex  flex-col items-center justify-center rounded px-2 h-[100px] ">
            <Typography variant="h5" className="text-center text-black">
              Solemnization of
            </Typography>
            {/* <Typography variant="h3" className="text-center text-black">
              of
            </Typography> */}
            <Typography
              variant="h3"
              className="text-center text-black  font-semibold"
            >
              Shaffan & Basyirah
            </Typography>
          </div>
        </div>
      </div>
      <div className=" h-[15%] w-full flex items-center px-4">
        <button
          onClick={() => router.push("/home")}
          type="button"
          className="inline-flex w-full justify-center items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#bc8c53] hover:bg-[#af7947] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bc8c53]"
        >
          Click to find out more
        </button>
      </div>
    </div>
  );
}
