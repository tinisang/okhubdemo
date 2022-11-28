import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardNews } from "../CardNews";
import { NoteBtn } from "../NoteBtn";
import { CardReport } from "../CardReport";
import aroowLeft from "../../public/imgs/arrow-up-left-NewsDetail.png";
import calendarNewsDetail from "../../public/imgs/calendar-edit-NewsDetail.png";
import userNewsDetail from "../../public/imgs/user-edit-NewsDetail.png";
import imagePrimaryNewsDetail from "../../public/imgs/imageNewsDetailPrimary.png";
import NewsDetailFbIcon from "../../public/imgs/newsDetailFbIcon.png";
import NewsDetailInsIcon from "../../public/imgs/NewDetailInsIcon.png";
import NewDetailBeIcon from "../../public/imgs/NewsDetailBeIcon.png";
import arrowLeftNewsDetailDocuments from "../../public/imgs/arrowLeftNewsDetailDocuments.png";
import arrowNextNewsDetailDocuments from "../../public/imgs/arrowNextNewsDetailDocuments.png";

export const NewsDetail = () => {
  const dataInfoCategory = [
    {
      title: "Tin nổi bật",
    },
    {
      title: "Tin nổi bật",
    },
    {
      title: "Tin nổi bật",
    },
    {
      title: "Tin nổi bật",
    },
    {
      title: "Tin nổi bật",
    },
    {
      title: "Tin nổi bật",
    },
    {
      title: "Tin nổi bật",
    },
  ];
  return (
    <div className="container">
      <div className="NewsDetail__back">
        <Image src={aroowLeft} alt="" />
        <p>Quay lại trang danh sách</p>
      </div>
      {/*  */}
      <div className="NewsDetail__primary">
        <div className="NewsDetail__primary-info">
          <div className="NewsDetail__primary-time">
            <Image src={calendarNewsDetail} alt="" />
            <p>Posted on 05/11/2022</p>
          </div>
          <div className="NewsDetail__primary-user">
            <Image src={userNewsDetail} alt="" />
            <p>Tien Dung Tran</p>
          </div>
        </div>
        <p className="NewsDetail__primary-title">
          Bức tranh thị trường thời trang trong thời kỳ suy thoái kinh tế toàn
          cầu
        </p>
        <Image
          src={imagePrimaryNewsDetail}
          className="NewsDetail__primary-img"
          alt=""
        />
      </div>
      <div className="NewsDetail__info">
        <div className="NewsDetail__info--categories">
          {dataInfoCategory.map((item, index) => {
            return <NoteBtn key={index} title={item.title} />;
          })}
        </div>
        <div className="NewsDetail__info-des">
          <p>
            Suy thoái kinh tế tiếp tục leo thang, sự căng thẳng tiếp diễn và là
            động thái để các nhãn hàng thời trang chuẩn bị cho một kịch bản tồi
            tệ nhất. Suy thoái kinh tế tiếp tục leo thang, sự căng thẳng tiếp
            diễn và là động thái để các nhãn hàng thời trang chuẩn bị cho một
            kịch bản tồi tệ nhất.
          </p>
        </div>
      </div>
      <div className="NewsDetail__share">
        <div className="NewsDetail__share--icons">
          <p>Chia sẻ</p>
          <div className="NewsDetail__share--icons-item">
            <Link href="facebook.com">
              <Image src={NewsDetailFbIcon} alt="" />
            </Link>
            <Link href="facebook.com">
              <Image src={NewsDetailInsIcon} alt="" />
            </Link>
            <Link href="facebook.com">
              <Image src={NewDetailBeIcon} alt="" />
            </Link>
            <Link href="facebook.com">
              <Image src={NewsDetailFbIcon} alt="" />
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="NewsDetail__share-content">
          <p>
            What will it take to power the planet in a way that doesn{`&#39`};t
            hurt it? In a collective call to action, energy expert Chris Roe,
            Director of Energy {`&`} Sustainable Operations at Amazon, shares
            the company{`&#39;`} commitment to get to net-zero carbon and fully
            operate all buildings—data centers, distribution centers,
            warehouses, commercial offices, and grocery stores—on 100% renewable
            energy by 2025. He reveals the most critical part of achieving these
            goals: partnering with companies around the globe to spearhead new
            wind and solar projects. Modeling a collaborative approach to a
            climate-friendly future, Roe invites leaders and companies
            everywhere to set their ambitions high and create a world that runs
            on green energy–because we can only achieve this together. <br></br>
            <br></br> In The Green: The Business of Climate Action showcases
            steps Climate Pledge signatories are taking to transform business
            and industry on their path to net-zero carbon by 2040—or
            sooner!—while inspiring companies from all sectors and regions to
            set their own net-zero ambition.
          </p>
        </div>
      </div>
      <div className="NewsDetail__status">
        <div className="NewsDetail__status--title">
          <p className="NewsDetail__title--primary">Bài viết liên quan</p>
          <p className="NewsDetail__title--bg">Related Posts</p>
        </div>
        <div className="NewsDetail__status-container">
          {/* content item */}
          <Swiper
            className="NewsDetail__status-items"
            slidesPerView={3}
            spaceBetween={32}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              prevEl: ".newsDetail__status--prev",
              nextEl: ".newsDetail__status--next",
            }}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <CardNews />
            </SwiperSlide>
            <SwiperSlide>
              <CardNews />
            </SwiperSlide>
            <SwiperSlide>
              <CardNews />
            </SwiperSlide>
            <SwiperSlide>
              <CardNews />
            </SwiperSlide>
          </Swiper>
          <div className="newsDetail__status--prev">
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_1570_3178)">
                <circle
                  cx="33"
                  cy="33"
                  r="33"
                  fill="white"
                  fill-opacity="0.65"
                />
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
          <div className="newsDetail__status--next">
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
      </div>
      <div className="NewsDetail__document">
        <div className="NewsDetail__document--title">
          <p>Tài liệu - Báo cáo</p>
          <div className="NewsDetail__document--bg">Download</div>
        </div>

        <Swiper
          className="NewsDetail__document--reports"
          slidesPerView={3}
          spaceBetween={34}
          slidesPerGroup={1}
          loop={true}
          speed={200}
          navigation={{
            prevEl: ".NewsDetail__document--prev",
            nextEl: ".NewsDetail__document--next",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div>
              <CardReport />
              <CardReport />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <CardReport />
              <CardReport />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <CardReport />
              <CardReport />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="image-container">
          <div className="NewsDetail__document--prev">
            <Image
              src={arrowLeftNewsDetailDocuments}
              className="image-item"
              alt=""
            />
          </div>
          <div className="NewsDetail__document--next">
            <Image src={arrowNextNewsDetailDocuments} alt="" />
          </div>
        </div>
      </div>

      {/* arrow */}
    </div>
  );
};
