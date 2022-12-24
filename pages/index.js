import Head from "next/head";
import Image from "next/image";
// import ExpandSection from '../components/HOME Components/Expand Section/ExpandSection'
import { ExpandSection } from "../components/HOME Components/Expand Section/ExpandSection";
import { CategorySlide } from "../components/HOME Components/Iconic Projects/CategorySlide";
import { IconicSlide } from "../components/HOME Components/Iconic Projects/IconicSlide";
import { ClientsSection } from "../components/HOME Components/ClientsSection";
import { Footer } from "../components/Footer/Footer";
import dynamic from "next/dynamic";
import { ReviewSection } from "../components/HOME Components/ReviewSection";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { PostMarqueSlide } from "../components/HOME Components/Expand Section/PostMarqueeSlide";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import {
  ProjectSpecial,
  ProjectSpecialMobile,
} from "../components/HOME Components/HomeMobile/ProjectSpecialMobile";
import { ClienSectionMobile } from "../components/HOME Components/HomeMobile/ClienSectionMobile";
import { ContactMobile } from "../components/HOME Components/HomeMobile/ContactMobile";
import { getMarqueePosts } from "../api store/news";
import { ExpandSectionMobile } from "../components/HOME Components/HomeMobile/ExphanSectionMobile";
import { SelectScrollMobile } from "../components/HOME Components/HomeMobile/SelectScrollMobile";
import { useMediaQuery } from "react-responsive";

export default function Home(props) {
  const { scroll: locoScroll } = useLocomotiveScroll();

  const isMobile = useMediaQuery({
    maxDeviceWidth: 768
  }, );

  return (
    <>
      <div>
        {isMobile ? ( 
          <div>
            <ExpandSectionMobile />
            <SelectScrollMobile />
            <ProjectSpecialMobile />
            <ClienSectionMobile />
            <ContactMobile />
          </div>
        ) : (
          <div>
            <ExpandSection postData={props.marqueePosts} />
            <IconicSlide />
            <CategorySlide />
            <ClientsSection />
            <ReviewSection />
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const marqueePosts = await getMarqueePosts(2);
  return {
    props: {
      marqueePosts: marqueePosts?.data?.data?.posts?.nodes || null,
    },
    revalidate: 1,
  };
}
