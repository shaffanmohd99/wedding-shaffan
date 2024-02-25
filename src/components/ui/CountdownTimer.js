import { useState, useEffect } from "react";
import { differenceInMilliseconds } from "date-fns";
import Card from "../reuseable/Card";
import Typography from "../reuseable/Typography";

export default function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);
  const [loading, setLoading] = useState(true);

  function getTimeRemaining() {
    const now = new Date();
    const difference = differenceInMilliseconds(targetDate, now);
    return difference > 0 ? difference : 0;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining);
    }, 1000);
    // Set loading to false once the component has mounted
    setLoading(false);
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  if (loading) {
    // You can return a loading state here, for example:
    return <p>Loading...</p>;
  } else {
    return (
      <div className="flex w-full ">
        <Card maxWidth="w-full">
          {seconds === 0 && days === 0 && hours === 0 && minutes === 0 ? (
            <div className="flex items-center justify-center">
              <Typography variant="body" className="text-textLight">
                It is today! See you soon
              </Typography>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center">
                <Typography variant="body" className="text-textLight">
                  {days}
                </Typography>
                <Typography variant="body" className="text-textLight">
                  Days
                </Typography>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Typography variant="body" className="text-textLight">
                  {hours}
                </Typography>
                <Typography variant="body" className="text-textLight">
                  Hours
                </Typography>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Typography variant="body" className="text-textLight">
                  {minutes}
                </Typography>
                <Typography variant="body" className="text-textLight">
                  Minutes
                </Typography>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Typography variant="body" className="text-textLight">
                  {seconds}
                </Typography>
                <Typography variant="body" className="text-textLight">
                  Seconds
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
