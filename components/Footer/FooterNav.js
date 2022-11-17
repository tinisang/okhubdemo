import React from 'react'
import logoFooter from "../../public/imgs/logoFooter.png"
import Image from 'next/image'
import fbIcon from "../../public/imgs/fb-icon-footer.png"
import insIcon from "../../public/imgs/ins-icon-footer.png"
import beIcon from "../../public/imgs/be-icon-footer.png"
import otherIcon from "../../public/imgs/other-icon-footer.png"
import tiktokIcon from "../../public/imgs/tiktok-icon-footer.png"

export const FooterNav = () => {
  return (
    <div className="footer__nav">
    <div className="footer__nav--sub">
      <div className='footer__nav--company'>
        <div className="footer__nav--logo">
          <Image src = {logoFooter}/>
        </div>
        <p className="footer__nav--name">
          CÔNG TY CỔ PHẦN OKHUB VIỆT NAM
        </p>
      </div>
      <div className="footer__nav--icon">
        <div className="footer__nav--fb" > <Image src = {fbIcon} alt = ""/> </div>
        <div className="footer__nav--ins" > <Image src = {insIcon} alt = ""/> </div>
        <div className="footer__nav--be" > <Image src = {beIcon} alt = ""/> </div>
        <div className="footer__nav--other" > <Image src = {otherIcon} alt = ""/> </div>
        <div className="footer__nav--tiktok" > <Image src = {tiktokIcon} alt = ""/> </div>
      </div>
    </div>
    {/*  */}
    <div className="footer__nav--primary">
      <p>Trang chủ</p>
      <p>Giới thiệu</p>
      <p>Dự án</p>
      <p>Dịch vụ</p>
      <p>Liên hệ</p>
    </div>
    {/*  */}
    <div className="footer__nav--note">
      <p>@2022 Bản quyền thuộc về OkHub Việt Nam</p>
    </div>
  </div>
  )
}
