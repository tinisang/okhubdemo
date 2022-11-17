import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Head from "next/head";

export const Base = (props) => {
  // console.log(props)
  return (
    <>
        <Head>
        <title>OKHUB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/imgs/logo.svg" />
      </Head>
      
      <Header/>
      <div className="content-all">

      {props.children}
      </div>
      <Footer/>
    </>
  );
};
