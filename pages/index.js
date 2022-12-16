import Head from 'next/head'
import Image from 'next/image'
// import ExpandSection from '../components/HOME Components/Expand Section/ExpandSection'
import { ExpandSection } from '../components/HOME Components/Expand Section/ExpandSection'
import { CategorySlide } from '../components/HOME Components/Iconic Projects/CategorySlide'
import { IconicSlide } from '../components/HOME Components/Iconic Projects/IconicSlide'
import { ClientsSection } from '../components/HOME Components/ClientsSection'
import { Footer } from '../components/Footer/Footer'
import dynamic from 'next/dynamic'
import { ReviewSection } from '../components/HOME Components/ReviewSection'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { PostMarqueSlide } from '../components/HOME Components/Expand Section/PostMarqueeSlide'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { IconSlideMobile } from '../components/HOME Components/HomeMobile/IconSlideMobile'
import { ProjectSpecial, ProjectSpecialMobile } from '../components/HOME Components/HomeMobile/ProjectSpecialMobile'



export default function Home() {
  const { scroll : locoScroll} = useLocomotiveScroll()
  useEffect(()=>{
   
    ScrollTrigger.refresh();
  })

  const [isMobile, setIsMobile] = useState ();

  const size = window.innerWidth;
  useEffect(() => {
    var mediaQueryMobile =  window.matchMedia('(max-width: 768px)')
    if (mediaQueryMobile.matches){
      setIsMobile(true)
    }else setIsMobile(false)

    window.addEventListener('resize', () => {
      if (mediaQueryMobile.matches){
        setIsMobile(true);
      }else setIsMobile(false)
    })


    console.log(isMobile)
  }, [size])
  
  return (
    <>
       <div  >

 <ExpandSection/>
      {
        isMobile == false ? <IconicSlide/> : <IconSlideMobile/>
      }
      {
        isMobile == false ? <CategorySlide/> : <ProjectSpecialMobile/>
      }
      <ClientsSection/>
      <ReviewSection/>
       </div>
   


    </>
  )
}
