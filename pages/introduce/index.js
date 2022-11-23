import { Button } from "../../components/Button/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import introduceHeaderImage from "../../public/imgs/introduceHeaderImage.png";
import playVideoIntroducesBtn from "../../public/imgs/playVideoIntroducesBtn.svg";
// import introduceHeaderVideo from "../../public/imgs/introduceHeaderVideo.mp4"
import introduceOverviewImg from "../../public/imgs/introduceOverviewImg.png";
import introduceImgIcon from "../../public/imgs/introduceImgIcon.svg";
import { CardTeams } from "../../components/CardTeams";
import { ReviewSection } from "../../components/HOME Components/ReviewSection";
import {ClientsSection} from "../../components/HOME Components/ClientsSection"
import imageIntroduceTeam from "../../public/imgs/imageIntroduceTeam.png";

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
              mục tiêu tạo ra các sản phẩm thiết kế và tiếp thị{" "}
              <strong>lấy người dùng làm trung tâm</strong>
            </p>
            <p>
              Chúng tôi cảm thấy biết ơn và tự hào khi được đồng hành cùng các
              khách hàng trong hành trình <strong>kinh doanh</strong> và{" "}
              <strong> phát triển thương hiệu.</strong>
            </p>
          </div>
        </div>
        <div className="introduce__overview--body">
          <div className="introduce__overview--body-text">
            <div className="body-text--title">
              <p>Xây dựng văn hóa làm việc hiện đại</p>
            </div>
            <div className="body-text--des">
              <p>
                Đề cao sự phát triển của những con người trong tổ chức. Vì vậy,
                chúng tôi luôn cố gắng xây dựng một môi trường làm việc văn
                minh.
              </p>
            </div>
          </div>
          <div className="introduce__overview--body-btn">
            <Button text="Credential" />
          </div>
          <div className="introduce__overview--bg-VN">
            <p>VIET NAM</p>
          </div>
        </div>

        <div className="introduce__overview--bg-okhub">
          <p>OKHUB</p>
        </div>
      </div>
      <div className="introduce__overview--img">
        <Image src={introduceOverviewImg} />
        <div className="introduce__img--text">
          <p>
            Với niềm tin: Về cơ bản <strong>con người Là tốt</strong>
          </p>
        </div>
        <div className="introduce__img--icon">
          <Image src={introduceImgIcon} />
        </div>
      </div>
      <div className="introduce__people">
        <div className="introduce__people-title">
          <div className="people__title--filde">
            <div className="people__title--filde-point"></div>
            <p>VỀ CON NGƯỜI</p>
          </div>
          <div className="people__title--text">
            <p>Tất cả chúng tôi làm việc vì mục tiêu chung</p>
          </div>
          <div className="people__title--bg">
            <p>PEOPLE</p>
          </div>
          <div className="people__title--panigation">
           
          </div>
        </div>
        <div className="introduce__people-des">
          <p>
            Ở OkHub Việt Nam, mỗi cá nhân đều tự đặt ra các mục tiêu gắn theo
            mục tiêu chung của tổ chức và nỗ lực hoàn thành.
          </p>
        </div>
      </div>

      <div className="introduce__teams--container">
        <Swiper
          className="introduce__teams"
          slidesPerView={3}
          // spaceBetween={32}
          slidesPerGroup={1}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          navigation={{
            prevEl: ".introduce__teams--prev",
            nextEl: ".introduce__teams--next",
          }}
          pagination={{
           
            el: ".people__title--panigation",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class= "  people__title--panigation-item ' + className + '"></span>';
            },
           
          
          }}
          modules={[Pagination, Navigation, ]}
        >
          <SwiperSlide>
            <CardTeams image={imageIntroduceTeam} team="Team Design" />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeams image={imageIntroduceTeam} team="Team Dev" />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeams image={imageIntroduceTeam} team="Team Account" />
          </SwiperSlide>
        </Swiper>
        <div className="introduce__teams--prev">
          <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_1570_3178)">
              <circle cx="33" cy="33" r="33" fill="white" fill-opacity="0.65" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.0557 32.0294L39.2632 43.2369L37.0899 45.4102L23.7091 32.0294L37.0899 18.6486L39.2632 20.8219L28.0557 32.0294Z"
                fill="#515151"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1570_3178"
                x="-4"
                y="-4"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1570_3178"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1570_3178"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="introduce__teams--next">
          <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_1570_3188)">
              <circle
                cx="33"
                cy="33"
                r="33"
                transform="rotate(-180 33 33)"
                fill="white"
                fill-opacity="0.65"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.9444 33.9706L26.7369 22.7631L28.9102 20.5898L42.291 33.9706L28.9102 47.3514L26.7369 45.1781L37.9444 33.9706Z"
                fill="#515151"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1570_3188"
                x="-4"
                y="-4"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1570_3188"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1570_3188"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>


      <ClientsSection/>
      <ReviewSection/>
    </div>
  );
}
