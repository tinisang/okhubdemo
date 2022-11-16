import React from "react";
import Link from "next/link";
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
import newsDetailStatusBtnPrev from "../../public/imgs/newsDetailStatusBtnPrev.png";
import newsDetailStatusBtnNext from "../../public/imgs/newsDetailStatusBtnNext.png";
import arrowLeftNewsDetailDocuments from "../../public/imgs/arrowLeftNewsDetailDocuments.png";
import arrowNextNewsDetailDocuments from "../../public/imgs/arrowNextNewsDetailDocuments.png";

import Image from "next/image";
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
        <Image src={aroowLeft} />
        <p>Quay lại trang danh sách</p>
      </div>
      {/*  */}
      <div className="NewsDetail__primary">
        <div className="NewsDetail__primary-info">
          <div className="NewsDetail__primary-time">
            <Image src={calendarNewsDetail} />
            <p>Posted on 05/11/2022</p>
          </div>
          <div className="NewsDetail__primary-user">
            <Image src={userNewsDetail} />
            <p>Tien Dung Tran</p>
          </div>
        </div>
        <p className="NewsDetail__primary-title">
          Bức tranh thị trường thời trang trong 
          thời kỳ suy thoái kinh tế toàn cầu
        </p>
        <Image
          src={imagePrimaryNewsDetail}
          className="NewsDetail__primary-img"
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
              <Image src={NewsDetailFbIcon} />
            </Link>
            <Link href="facebook.com">
              <Image src={NewsDetailInsIcon} />
            </Link>
            <Link href="facebook.com">
              <Image src={NewDetailBeIcon} />
            </Link>
            <Link href="facebook.com">
              <Image src={NewsDetailFbIcon} />
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
            <Image src={newsDetailStatusBtnPrev} />
          </div>
          <div className="newsDetail__status--next">
            <Image src={newsDetailStatusBtnNext} />
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
            <Image src={arrowLeftNewsDetailDocuments} className="image-item" />
          </div>
          <div className="NewsDetail__document--next">
            <Image src={arrowNextNewsDetailDocuments} />
          </div>
        </div>
      </div>

      {/* arrow */}
    </div>
  );
};
