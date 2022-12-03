import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import loadingImage from '../public/imgs/loading.svg'
import Image from "next/image";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";



export const Base = (props) => {
  // console.log(props)
  const containerRef = useRef(null)
  const [loading, isLoading] = useState(false)
  const router = useRouter()

  useEffect(()=>{

    router.events.on('routeChangeStart', (url, { shallow }) => {
      console.log(url == router.asPath)
      if (router.asPath != url){
        isLoading(true)

      }
    });
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      isLoading(false)
      ScrollTrigger.refresh()
          
    });
    
  },[])
  
  
  const handleComplete = ()=>{
    
    ScrollTrigger.refresh()
  }
  return (
    <>

    
    <Head>
      <title>OKHUB</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/imgs/logo.svg" />
    </Head>
    
    {
            loading && (
            <motion.div 
            key={'loading-section'}
            className="loading-section"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onAnimationComplete={handleComplete}

            >
              <Image src={loadingImage} alt='' />
            </motion.div>

            )
          }
          <Header/>
        
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>

         

    
            {props.children}
          
          <Footer/>
      </main>
    </LocomotiveScrollProvider>
      
 
    </>
  );
};
