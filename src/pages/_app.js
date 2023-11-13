// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <NextNProgress color="#bc8c53" options={{ showSpinner: false }} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1.0"
        />
      </Head>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  );
}
