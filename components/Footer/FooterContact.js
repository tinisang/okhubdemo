import React from 'react'
import logo from "../../public/imgs/logo.png"
import imgFooter1 from "../../public/imgs/imgfooter1.png";
import imgFooter2 from "../../public/imgs/imgFooter2.png";
import imgFooter3 from "../../public/imgs/imgFooter3.png";
import Image from 'next/image';
import gsap from "gsap";

export const FooterContact = () => {
    
  return (
    <>
      <div className="footer__contact">
          <div className="footer__contact--logo">
            <Image src = {logo} alt = ""/>
          </div>
          <p className="footer__contact--title">THÔNG TIN LIÊN HỆ</p>
          <p className="footer__contact--des">
            info@okhub.vn <br></br> +84 962 582 380
          </p>
          <p className="footer__contact--title">ĐỊA CHỈ VĂN PHÒNG ĐẠI DIỆN</p>
          <p className="footer__contact--des">
            1917 HPC Landmark 105 Văn Khê, <br></br>
            Phường La Khê, Quận Hà Đông, Thành phố <br></br>
            Hà Nội, Việt Nam.
          </p>
          <p className="footer__contact--title">WEBSITE</p>
          <p className="footer__contact--des">www.okhub.vn</p>
          <div className="footer__contact--img1">
            <Image src={imgFooter1} alt = ""/>
          </div>
          <div className="footer__contact--img2">
            <Image src={imgFooter2} alt = ""/>
          </div>
          <div className="footer__contact--img3">
            <Image src={imgFooter3} alt = ""/>
          </div>
        </div>
    </>
  )
}