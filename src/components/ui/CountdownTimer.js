import { useState, useEffect } from "react";
import { differenceInMilliseconds } from "date-fns";
import Card from "../reuseable/Card";
import Typography from "../reuseable/Typography";

export default function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);

  function getTimeRemaining() {
    const now = new Date();
    const difference = differenceInMilliseconds(targetDate, now);
    return difference > 0 ? difference : 0;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex w-full ">
      <Card maxWidth="w-full">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center">
            <Typography variant="body" className="text-white">
              {days}
            </Typography>
            <Typography variant="body" className="text-white">
              days
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="body" className="text-white">
              {hours}
            </Typography>
            <Typography variant="body" className="text-white">
              hours
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="body" className="text-white">
              {minutes}
            </Typography>
            <Typography variant="body" className="text-white">
              minutes
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="body" className="text-white">
              {seconds}
            </Typography>
            <Typography variant="body" className="text-white">
              seconds
            </Typography>
          </div>
        </div>
      </Card>
      {/* <Card>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="body" className=" text-white">
            {hours}
          </Typography>
          <Typography variant="body" className=" text-white">
            hours
          </Typography>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="body" className=" text-white">
            {minutes}
          </Typography>
          <Typography variant="body" className=" text-white">
            minutes
          </Typography>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="body" className=" text-white">
            {seconds}
          </Typography>
          <Typography variant="body" className=" text-white">
            seconds
          </Typography>
        </div>
      </Card> */}
    </div>
  );
}
