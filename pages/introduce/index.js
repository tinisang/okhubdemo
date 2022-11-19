import Image from "next/image";
import introduceHeaderImage from "../../public/imgs/introduceHeaderImage.png";
import playVideoIntroducesBtn from "../../public/imgs/playVideoIntroducesBtn.png";

export default function Introduce() {
  return (
    <div className="introduce__container">
      <div className="introduce__header">
        <div className="introduce__header--img">
          <Image src={introduceHeaderImage} alt="" />
          <div className="introduce__header--play-btn">
            <Image src={playVideoIntroducesBtn} alt="" />
          </div>
          <div className="introduce__header--text">
            <p>
              Luôn hành động với lòng say mê <br></br> sự ca<span>n đảm</span><br></br> và <span> đôi mắt sáng ngời</span>
            </p>
          </div>
        </div>
      </div>
      <div className="introduce__overview"></div>
      <div className="introduce__people"></div>
    </div>
  );
}
