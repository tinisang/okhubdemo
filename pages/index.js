import Head from 'next/head'
import Image from 'next/image'
import { ExpandSection } from '../components/HOME Components/Expand Section/ExpandSection'
import { CategorySlide } from '../components/HOME Components/Iconic Projects/CategorySlide'
import { IconicSlide } from '../components/HOME Components/Iconic Projects/IconicSlide'
import { Footer } from '../components/Footer/Footer'


export default function Home() {
  return (
    <>
       
      <ExpandSection/>
      <IconicSlide/>
      <CategorySlide/>
   


    </>
  )
}
