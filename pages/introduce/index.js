import Image from "next/image";
import introduceHeaderImage from "../../public/imgs/introduceHeaderImage.png";
import playVideoIntroducesBtn from "../../public/imgs/playVideoIntroducesBtn.svg";
// import introduceHeaderVideo from "../../public/imgs/introduceHeaderVideo.mp4"

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
              Luôn hành động với lòng say mê <br></br> sự ca<span>n đảm</span>
              <br></br> và <span> đôi mắt sáng ngời</span>
            </p>
          </div>
        </div>
        <div className="introduce__header--video">
          {/* <video width="320" height="240">
            <source src = {introduceHeaderVideo} type = 'video/mp4'></source>
          </video> */}
        </div>
      </div>
      <div className="introduce__overview">
        <div className="introduce__overview--header">
          <div className="introduce__overview--header-title">
            <div className="introduce__overview--header-title-point"></div>
            <div className="introduce__overview--header-title-text">
              <p>TỔNG QUAN</p>
            </div>
          </div>
          <div className="introduce__overview--header-des">
            <p>
              OKHUB VIỆT NAM® hoạt động từ 2020, có văn phòng tại Hà Nội. Với
              mục tiêu tạo ra các sản phẩm thiết kế và tiếp thị <strong>lấy người dùng
              làm trung tâm</strong>
            </p>
            <p>
              Chúng tôi cảm thấy biết ơn và tự hào khi được đồng hành cùng các
              khách hàng trong hành trình <strong>kinh doanh</strong> và <strong> phát triển thương hiệu.</strong>
            </p>
          </div>
        </div>
        <div className="introduce__overview--body">
          <div className="introduce__overview--body-text"></div>
          <div className="introduce__overview--body-btn"></div>
        </div>

        <div className="introduce__overview--bg-okhub"></div>
        <div className="introduce__overview--bg-VN"></div>
      </div>
      <div className="introduce__people"></div>
    </div>
  );
}
