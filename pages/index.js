import Head from 'next/head'
import Image from 'next/image'
// import { ExpandSection } from '../components/HOME Components/Expand Section/ExpandSection'
import { CategorySlide } from '../components/HOME Components/Iconic Projects/CategorySlide'
import { IconicSlide } from '../components/HOME Components/Iconic Projects/IconicSlide'
import { ClientsSection } from '../components/HOME Components/ClientsSection'
import { Footer } from '../components/Footer/Footer'
import dynamic from 'next/dynamic'
import { ReviewSection } from '../components/HOME Components/ReviewSection'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// const ExpandSection = dynamic(() => import("../components/HOME Components/Expand Section/ExpandSection"), { ssr: true });

import ExpandSection from '../components/HOME Components/Expand Section/ExpandSection'

export default function Home() {

  useEffect(()=>{
    // ScrollTrigger.refresh()
    return ()=>{
      window.removeEventListener('mousemove',function(){})

    }
  })
  
  return (
    <>
       <div>

      <ExpandSection/>
      <IconicSlide/>
      <CategorySlide/>
      <ClientsSection/>
      <ReviewSection/>
       </div>
   


    </>
  )
}
