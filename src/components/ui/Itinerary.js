import Card from "../reuseable/Card";
import Typography from "../reuseable/Typography";

const list = [
  {
    time: "8:00 AM",
    activity: "Terbang",
  },
  {
    time: "9:00 AM",
    activity: "Lompat",
  },
  {
    time: "4:00 PM",
    activity: "Lorem ipsum dolor sit amet, ",
  },
  {
    time: "10:00 PM",
    activity: "Tidurrrrrr",
  },
];

export default function Itinerary() {
  return (
    <div className="flex w-full justify-center">
      <Card maxWidth="sm:w-[50%] w-[90%]">
        <div className="absolute left-1 top-1 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 sm:left-1/2">
          <img
            src="/assets/flower-bg.png"
            className=" w-full  opacity-20 sm:transform sm:-rotate-12  "
          />
        </div>
        <div className="flex flex-col">
          {list.map((item, index) => (
            <div key={index} class="flex items-center ">
              <div
                class={`sm:w-1/5 w-2/5 border-r border-gray-400 flex items-center  ${
                  index === 0 || index === list.length - 1 ? "py-8" : "h-32"
                } `}
              >
                <Typography variant="h5">{item.time}</Typography>
              </div>
              <div class="sm:w-3/5 w-3/5 sm:pl-10 pl-16">
                <Typography variant="subtitle">{item.activity}</Typography>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
