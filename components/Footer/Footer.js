import Image from "next/image";
import imgFooter1 from "../../public/imgs/imgfooter1.png";
import imgFooter2 from "../../public/imgs/imgFooter2.png";
import imgFooter3 from "../../public/imgs/imgFooter3.png";
import { FooterForm } from "./FooterForm";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <FooterForm/>
        {/*Contact */}
        <div className="footer__contact">
          <img className="footer__contact--logo"></img>
          <p className="footer__contact--title">Thông tiin liên hệ</p>
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
            <Image src={imgFooter1} />
          </div>
          <div className="footer__contact--img2">
            <Image src={imgFooter2} />
          </div>
          <div className="footer__contact--img3">
            <Image src={imgFooter3} />
          </div>
        </div>
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
