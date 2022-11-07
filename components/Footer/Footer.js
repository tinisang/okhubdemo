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
            <img src="footer__nav--logo"></img>
            <p className="footer__nav--name"></p>
          </div>
          <div className="footer__nav--icon">
            <img className="footer__nav--fb" src=""></img>
            <img className="footer__nav--ins" src=""></img>
            <img className="footer__nav--be" src=""></img>
            <img className="footer__nav--other" src=""></img>
            <img className="footer__nav--tiktok" src=""></img>
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
