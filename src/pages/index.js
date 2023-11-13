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
    // <Container
    //   className="flex flex-col justify-center bg-[#fff7ed]"
    //   outerClass="pt-16 pb-0"
    // >
    //   {/* fisr page  max-h-[calc(100vh-0px)]  */}
    //   <div className="flex  flex-col">
    //     <div className="h-[70%] w-full flex sm:flex-row flex-col pt-2 sm:gap-0 gap-4">
    //       <div className="sm:w-1/2 w-full px-2  flex flex-col items-center sm:gap-0 gap-4 justify-between">
    //         <Card padding="px-8 py-16" maxWidth="w-full">
    //           {/* <div className=" absolute top-1 left-1 z-40">
    //             <img src="/assets/flower-border.png" className=" w-[20%]  " />
    //           </div> */}
    //           {/* <div className=" absolute bottom-1 right-1 transform scale-x-[-1] scale-y-[-1] z-40">
    //             <img src="/assets/flower-border.png" className=" w-[20%]  " />
    //           </div> */}
    //           <div className="absolute right-1/2 top-1/2 z-0 h-[100%] w-[100%]  -translate-y-1/2 translate-x-1/2  ">
    //             <img
    //               src="/assets/songket_2.jpg"
    //               className=" z-0 opacity-80 w-full h-full rounded-lg"
    //             />
    //           </div>
    //           <div className="absolute right-1/2 top-1/2  z-10  -translate-y-1/2 translate-x-1/2   w-[95%] h-[95%] border border-[#40170f] "></div>
    //           <Typography
    //             variant="subtitle"
    //             className=" text-center tracking-tight absolute left-1/2 top-6 text-[#40170f] -translate-x-1/2"
    //             // className={`${great_vibes.className} text-center tracking-tight text-[72px]`}
    //           >
    //             Jemputan ke Majlis Perkahwinan
    //           </Typography>
    //           <div className="flex flex-col h-full justify-center  gap-8 mt-[50px]">
    //             <Typography
    //               variant="h1"
    //               // className=" text-center tracking-tight"
    //               className={`${great_vibes.className} text-center text-[#40170f] z-40 tracking-tight text-[48px]`}
    //             >
    //               Shaffan
    //             </Typography>
    //             <Typography
    //               variant="h1"
    //               // className=" text-center tracking-tight"
    //               className={`${great_vibes.className} text-center z-40 text-[#40170f] tracking-tight text-[48px]`}
    //             >
    //               &
    //             </Typography>
    //             <Typography
    //               variant="h1"
    //               // className=" text-center tracking-tight"
    //               className={`${great_vibes.className} text-center z-40 text-[#40170f] tracking-tight text-[48px]`}
    //             >
    //               Basyirah
    //             </Typography>
    //           </div>
    //         </Card>
    //         <div className="flex gap-2 w-full ">
    //           <Card maxWidth="w-1/2 " padding="px-2 py-4">
    //             <div className="flex items-center justify-center gap-2">
    //               <BsCalendarEventFill className="text-[#9a3612] " size={18} />
    //               <Typography variant="subtitle" className="text-[#40170f]">
    //                 22 Disember 2023
    //               </Typography>
    //             </div>
    //           </Card>
    //           <Card maxWidth="w-1/2" padding="px-2 py-4">
    //             <div className="flex items-center justify-center gap-2">
    //               <BsPinMapFill className="text-[#9a3612] " size={18} />
    //               <Typography variant="subtitle" className="text-[#40170f]">
    //                 Evo Mall, Bangi
    //               </Typography>
    //             </div>
    //           </Card>
    //         </div>
    //       </div>
    //       {/* <div className="sm:w-1/2 w-full h-full flex justify-center items-end px-2 ">
    //         <Card maxWidth="h-full">
    //           <div className="  flex justify-center">
    //             <img
    //               src="/assets/EDL_RRwebsite.jfif"
    //               className="h-full w-full select-none object-cover"
    //             />
    //           </div>
    //         </Card>
    //       </div> */}
    //     </div>
    //     <div className="flex w-full gap-4 justify-center mt-12 ">
    //       <Card padding="px-2 py-4 " >
    //         <Countdown />
    //       </Card>
    //     </div>
    //   </div>
    //   {/* second part  */}
    //   <div className=" flex flex-col mt-24 mb-12">
    //     <Typography variant="h3" className="text-center">
    //       Lorem Ipsum
    //     </Typography>
    //     <div className="mt-12">
    //       <Itinerary />
    //     </div>
    //   </div>
    //   {/* third part */}
    //   <div className="max-h-[calc(100vh-0px)] mt-24 mb-12">
    //     <Typography variant="h3" className="text-center">
    //       Lorem Ipsum
    //     </Typography>
    //   </div>
    // </Container>

    <div className="relative w-screen h-screen max-h-screen bg-[#faf7f2]">
      <div className="w-full h-[85%] relative">
        <img
          src="/assets/gambar.jpg"
          className="h-full w-full select-none object-cover"
          alt="gambar"
        />
        <div className="absolute inset-0 bg-[#bc8c53] opacity-60"></div>
        <div
          className={`${great_vibes.className} absolute inset-0 pt-8 flex flex-col gap-2 `}
        >
          <Typography variant="h3" className="text-center text-[#faf7f2]">
            Solemnization
          </Typography>
          <Typography variant="h3" className="text-center text-[#faf7f2]">
            of
          </Typography>
          <Typography
            variant="h2"
            className="text-center text-[#faf7f2]  font-semibold"
          >
            Shaffan & Basyirah
          </Typography>
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
