import logoNewsDetail from "../../public/imgs/logoNewsDetail.png";
import menuNewsDetail from "../../public/imgs/menuNewsDetail.png";

import whitelogo from '../../public/imgs/whitelogo.svg'

import Image from "next/image";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import { DropDown } from "./Dropdown";

export const Header = () => {

  const [isOpen,setOpen] = useState(false)
  const header = useRef()

  const handleOpenMenu= ()=>{
    
    setOpen(!isOpen)
  }


  useEffect(()=>{
    var fakeScrollY = 0;
    window.addEventListener("scroll", function () {
      var thisScrollY = this.scrollY;
        if (this.scrollY > 0) {
      
       
        } else {
          header.current.style.backdropFilter = "blur(0px)";
        
        }

        if (fakeScrollY > thisScrollY) {

          header.current.style.transform = "translateY(0%)"

        }

        if (fakeScrollY < thisScrollY && thisScrollY > 300) {

          header.current.style.transform = "translateY(-100%)"

        }

        if (fakeScrollY == thisScrollY)

          if (thisScrollY == 0) {
            header.current.style.transform = "translateY(0%)"
          }

     
      fakeScrollY = thisScrollY
    });


    return ()=>{
      window.removeEventListener('scroll',function(){})
    }


    
  })
  
  
  return (
    <>
    <div className="header-wrapper">

    
      <div className={" container-padding header-section "+ (isOpen ? 'opening' : '')} ref={header} >
          <div className="logo-area">
              <Link href='/'>
              <div className="logo-icon">
                <Image src={isOpen ? whitelogo : logoNewsDetail} alt=''   />
              </div>

              </Link>
          </div>

          <div className={"menu-trigger "+ (isOpen ? 'opening' : '')} onClick={()=>{handleOpenMenu()}} >
            <div className="hamburger-icon">
              <span className="line1 line"></span>
              <span className="line2 line"></span>
              <span className="line3 line"></span>
            </div>
          </div>
          
      </div>

    {<DropDown status={isOpen} />}
      </div>
    </>
  );
};
