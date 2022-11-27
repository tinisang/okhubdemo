import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion"

export const Base = (props) => {
  // console.log(props)
  const router = useRouter()

  useEffect(()=>{

    var routChangeDiv = document.querySelector('.route-change');
    routChangeDiv.classList.remove('loading')
  },[router.asPath])


  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}
  
  return (
    <>

    
    <Head>
      <title>OKHUB</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/imgs/logo.svg" />
    </Head>
    
      
      <Header/>
      <div className="route-change">
        OKHUB
      </div>
 
        {props.children}
       
      <Footer/>
 
    </>
  );
};
