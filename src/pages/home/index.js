import Card from "@/components/reuseable/Card";
import Typography from "@/components/reuseable/Typography";
import { BsCalendarEventFill, BsPinMapFill, BsClockFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="relative w-screen n max-h-screen bg-[#faf7f2]">
      {/* first page */}
      <div className="w-full h-screen ">
        <div className="p-4">
          <div className="pt-8">
            <Typography variant="h5" className="text-[#332117">
              You're invited to our wedding!
            </Typography>
            <Typography variant="sub" className="text-[#332117]/50">
              (PS:This is not your typical wedding)
            </Typography>
            <Typography
              variant="body"
              className="text-[#332117] pt-8 font-semibold"
            >
              Event Details
            </Typography>
          </div>
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
