import Head from 'next/head'
import Image from 'next/image'
// import { ExpandSection } from '../components/HOME Components/Expand Section/ExpandSection'
import { CategorySlide } from '../components/HOME Components/Iconic Projects/CategorySlide'
import { IconicSlide } from '../components/HOME Components/Iconic Projects/IconicSlide'
import { ClientsSection } from '../components/HOME Components/ClientsSection'
import { Footer } from '../components/Footer/Footer'
import dynamic from 'next/dynamic'

const ExpandSection = dynamic(() => import("../components/HOME Components/Expand Section/ExpandSection"), { ssr: true });


export default function Home() {
  return (
    <>
       
      <ExpandSection/>
      <IconicSlide/>
      <CategorySlide/>

      <ClientsSection/>
      
   


    </>
  )
}
