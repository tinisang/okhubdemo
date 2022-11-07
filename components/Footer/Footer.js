import Image from "next/image";

import { FooterForm } from "./FooterForm";
import { FooterContact } from "./FooterContact";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <FooterForm/>
        {/*Contact */}
      <FooterContact/>
      </div>

      {/*  */}

      <div className="footer__nav">
        <div className="footer__nav--sub">
          <div>
            <div src="footer__nav--logo"></div>
            <p className="footer__nav--name"></p>
          </div>
          <div className="footer__nav--icon">
            <div className="footer__nav--fb" src=""></div>
            <div className="footer__nav--ins" src=""></div>
            <div className="footer__nav--be" src=""></div>
            <div className="footer__nav--other" src=""></div>
            <div className="footer__nav--tiktok" src=""></div>
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
    </>
  );
};
