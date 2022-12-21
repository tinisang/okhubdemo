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
import { ClienSectionMobile } from '../components/HOME Components/HomeMobile/ClienSectionMobile'
import { ContactMobile } from '../components/HOME Components/HomeMobile/ContactMobile'


import { getAllPostSlug } from '../api store/news'
import { ExpandSectionMobile } from '../components/HOME Components/HomeMobile/ExphanSectionMobile'
import { SelectScrollMobile } from '../components/HOME Components/HomeMobile/SelectScrollMobile'



export default function Home(props) {
  console.log(props.AllSlugs)
  
  const { scroll : locoScroll} = useLocomotiveScroll()

  const [isMobile, setIsMobile] = useState ();


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
  }, [])
  
  return (
    <>
       <div  >
    {
      isMobile == false ?  <ExpandSection/> : <ExpandSectionMobile/>
    }

    {
      isMobile == true  && <SelectScrollMobile/>
    }

      {
        isMobile == false ? <IconicSlide/> : <IconSlideMobile/>
      }
      {
        isMobile == false ? <CategorySlide/> : <ProjectSpecialMobile/>
      }

      {
        isMobile == false ?  <ClientsSection/> : <ClienSectionMobile/>
      }

      {
        isMobile == false ? <ReviewSection/> : <ContactMobile/>
      }

       </div>
   


    </>
  )
}



export async function getStaticProps({ params }) {

  const [allNew, res1] = await  Promise.all([getAllPostSlug()]);


  return {
    props: {
      AllSlugs: allNew?.data?.data?.posts?.nodes || null,
     

    },
    revalidate: 1,
  };
}
