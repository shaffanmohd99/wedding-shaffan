import Image from "next/image";
import Typography from "./Typography";

export default function Card({
  title,
  subtitle,
  maxWidth = "max-w-sm",
  image,
  margin,
  flowerBorder,
  padding = "p-6",
  icon,
  children,
}) {
  return (
    <div
      className={`block ${margin} ${maxWidth} ${padding} relative bg-primary rounded-3xl shadow-primaryDark shadow-lg  object-cover `}
    >
      {children}
    </div>
  );
}

// {
//   flowerBorder && (
//     <>
//       <div className=" absolute top-1 left-1 ">
//         <img src="/assets/flower-border.png" className=" w-[20%]  " />
//       </div>
//       <div className=" absolute bottom-1 right-1 transform scale-x-[-1] scale-y-[-1]">
//         <img src="/assets/flower-border.png" className=" w-[20%] " />
//       </div>
//       <div className="absolute right-1/2 top-1/2  z-10  -translate-y-1/2 translate-x-1/2   w-[95%] h-[95%] border border-yellow-700 "></div>
//     </>
//   );
// }
// {
//   title && (
//     <Typography variant="h1" className="  tracking-tight">
//       {title}
//     </Typography>
//   );
// }

// {
//   subtitle && (
//     <div className="flex items-center gap-6">
//       {icon}
//       <Typography variant="subtitle">{subtitle}</Typography>
//     </div>
//   );
// }

// {
//   image && (
//     <div className="  flex justify-center">
//       {/* <Image
//             // key={index}
//             className="object-contain sm:object-cover"
//             src={image}
//             fill
//             // alt={`Slide ${index}`}
//           /> */}
//       <img
//         src={image}
//         // alt={`Slide ${index}`}
//         className="h-full w-full select-none object-cover"
//       />
//     </div>
//   );
// }
