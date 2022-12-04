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
            <Image src={logoFooter} />
          </div>
          <p className="footer__nav--name">
            CÔNG TY CỔ PHẦN OKHUB VIỆT NAM
          </p>
        </div>
        <div className="footer__nav--icon">
          <div className="footer__nav--fb" >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.5" stroke="white" />
              <g clip-path="url(#clip0_518_2462)">
                <path d="M32.4965 21.984H34.6875V18.168C34.3095 18.116 33.0095 17.999 31.4955 17.999C28.3365 17.999 26.1725 19.986 26.1725 23.638V26.999H22.6865V31.265H26.1725V41.999H30.4465V31.266H33.7915L34.3225 27H30.4455V24.061C30.4465 22.828 30.7785 21.984 32.4965 21.984Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_518_2462">
                  <rect width="24" height="24" fill="white" transform="translate(16.5 17.999)" />
                </clipPath>
              </defs>
            </svg>
            {/* <Image src={fbIcon} alt="" /> */}
          </div>
          <div className="footer__nav--ins" >
            <Image src={insIcon} alt="" />
          </div>
          <div className="footer__nav--be" >
            <Image src={beIcon} alt="" />
          </div>
          <div className="footer__nav--other" >
            <Image src={otherIcon} alt="" />
          </div>
          <div className="footer__nav--tiktok" >
            <Image src={tiktokIcon} alt="" />
          </div>
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
