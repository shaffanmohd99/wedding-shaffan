import Card from "../reuseable/Card";
import Typography from "../reuseable/Typography";

export default function IntenaryAkad() {
  return (
    <div className="mt-[20px]">
      <Card>
        <div>
          <Typography
            variant="h5"
            className="text-textLight text-left  font-semibold  "
          >
            Akad Nikah @ Masjid Al-Umm, Bangi
          </Typography>
          <Typography variant="body" className="text-textLight text-left  ">
            (You are welcome to join us!)
          </Typography>
        </div>
        <div className="w-full flex flex-col gap-4 mt-[10px]">
          <div className="w-full flex">
            <div className="w-1/3">
              <Typography variant="body" className="text-textLight text-left  ">
                1600
              </Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="body" className="text-textLight text-left  ">
                Arrived and Solat Asar at Masjid Al-Umm, Bangi
              </Typography>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              <Typography variant="body" className="text-textLight text-left  ">
                1700
              </Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="body" className="text-textLight text-left  ">
                Akad Nikah
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
