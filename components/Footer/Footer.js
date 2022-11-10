import Image from "next/image";

import { FooterForm } from "./FooterForm";
import { FooterContact } from "./FooterContact";
import { FooterNav } from "./FooterNav";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Footer = ({active}) => {
    useEffect(()=>{
      return ()=>{
        ScrollTrigger.getAll().forEach(ST => ST.kill());
        gsap.globalTimeline.clear();
      }
    })
  return (
    <>
   <div className="footer__container">
   <div className="footer">
        <FooterForm/>
        {/*Contact */}
      <FooterContact/>
      </div>

      {/*  */}

        <FooterNav/>
   </div>
    </>
  );
};
