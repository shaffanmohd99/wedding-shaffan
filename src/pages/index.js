import Typography from "@/components/reuseable/Typography";
import { Great_Vibes } from "next/font/google";
import HomePage from "./home";
import { motion } from "framer-motion";
import Head from "next/head";

const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="flex justify-center items-center bg-mainBg  ">
      <Head>
        <title>Walimatul Urus Shaffan & Basyirah</title>
        <meta
          name="description"
          content="11 Mei 2024 | Sungai Long Golf & Country Club, Kajang"
          key="desc"
        />
        <meta
          property="og:image"
          content="url('/assets/gambarhihi.jpeg')" // Replace with the correct path to your image
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="w-full max-w-lg">
        <div className="relative w-full h-screen max-h-screen bg-mainBg ">
          <div
            // className="w-full h-full bg-fixed absolute "
            className="w-full h-full   bg-fixed "
            style={{
              backgroundImage: "url('/assets/gambarhihi.jpeg')",
              backgroundSize: "cover", // Use 'cover' to scale the background image while maintaining its aspect ratio
              backgroundPosition: "center", // Optional: Center the background image
              backgroundRepeat: "no-repeat", // Optional: Prevent the background image from repeating
              minHeight: "100%", // Set a minimum height to maintain aspect ratio
            }}
          >
            {/* <img
              src="/assets/gambarhihi.jpeg"
              className="h-full w-full select-none object-cover "
              alt="gambar"
            /> */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 40 }}
              className={`${great_vibes.className} absolute inset-0 flex flex-col gap-2  `}
            >
              <div className="bg-mainBg flex  flex-col items-center justify-center rounded px-2 h-[100px] ">
                <Typography variant="h5" className="text-center text-black">
                  Walimatul Urus
                </Typography>

                <Typography
                  variant="h3"
                  className="text-center text-black  font-semibold"
                >
                  Shaffan & Basyirah
                </Typography>
              </div>
            </motion.div>
          </div>
        </div>
        <HomePage />
      </div>
    </div>
  );
}
