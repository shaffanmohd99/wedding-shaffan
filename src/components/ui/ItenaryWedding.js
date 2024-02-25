import Card from "../reuseable/Card";
import Typography from "../reuseable/Typography";

export default function IntenaryWedding() {
  return (
    <div className="mt-[20px]">
      <Card>
        <div>
          <Typography
            variant="h5"
            className="text-textLight text-left  font-semibold "
          >
            Reception @ Evo Mall, Bangi
          </Typography>
        </div>
        <div className="w-full flex flex-col gap-4 mt-[10px]">
          <div className="w-full flex">
            <div className="w-1/3">
              <Typography variant="body" className="text-textLight text-left  ">
                1900
              </Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="body" className="text-textLight text-left  ">
                Doors open
              </Typography>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              <Typography variant="body" className="text-textLight text-left  ">
                2030
              </Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="body" className="text-textLight text-left  ">
                {`Bride and Groom's Entrance`}
              </Typography>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              <Typography variant="body" className="text-textLight text-left  ">
                2100
              </Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="body" className="text-textLight text-left  ">
                Perfomances by friends and family <br /> (Let us know if you
                wanna perform!)
              </Typography>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              <Typography variant="body" className="text-textLight text-left  ">
                2300
              </Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="body" className="text-textLight text-left  ">
                End of event
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
