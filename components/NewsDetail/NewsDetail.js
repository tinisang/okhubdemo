import React, { useEffect } from "react";
import Link from "next/link";
// import {Link} from "react-router-dom";
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
import calendarNewsDetail from "../../public/imgs/calendar-edit-NewsDetail.svg";
import userNewsDetail from "../../public/imgs/user-edit-NewsDetail.svg";
import imagePrimaryNewsDetail from "../../public/imgs/imageNewsDetailPrimary.png";
import NewsDetailFbIcon from "../../public/imgs/newsDetailFbIcon.png";
import NewsDetailInsIcon from "../../public/imgs/NewDetailInsIcon.png";
import NewDetailBeIcon from "../../public/imgs/NewsDetailBeIcon.png";
import arrowLeftNewsDetailDocuments from "../../public/imgs/arrowLeftNewsDetailDocuments.png";
import arrowNextNewsDetailDocuments from "../../public/imgs/arrowNextNewsDetailDocuments.png";


import {
   FacebookShareButton,
   
  } from "react-share";





import { useLocomotiveScroll } from "react-locomotive-scroll";


import gsap from "gsap";

export const NewsDetail = ({data,relatedPosts, allDocuments}) => {
  


  var postDate = new Date(data.date);
  var month = postDate.getMonth()
  var year = postDate.getFullYear()
  var day = postDate.getDate()


  
  const dataInfoCategory = data.categories.nodes.map((value, index)=>{
    return {
      title: value.name,
      link: value.link
    }
  })




  const {scroll : locoScroll} = useLocomotiveScroll()

  
  useEffect(()=>{

  })
  
  return (
    <div className="container">
      <Link href={'/news'} className="NewsDetail__back">
        <Image src={aroowLeft} alt="" />
        <p>Quay lại trang danh sách</p>
      </Link>
      {/*  */}
      <div className="NewsDetail__primary">
        <div className="NewsDetail__primary-info">
          <div className="NewsDetail__primary-time">
            <Image src={calendarNewsDetail} alt="" />
            <p>{`Posted on ${[(day <= 9 ? ('0'+day) : day ),month,year].join('/')} `}</p>
          </div>
          <div className="NewsDetail__primary-user">
            <Image src={userNewsDetail} alt="" />
            <p>{data.author.node.name}</p>
          </div>
        </div>
        <p className="NewsDetail__primary-title">{data.title}</p>
        <div className="image-container NewsDetail__primary-img-container">

          <Image
            src={data.featuredImage.node.mediaItemUrl}
            className="image-item NewsDetail__primary-img"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="NewsDetail__info">
        <div className="NewsDetail__info--categories">
          {dataInfoCategory.map((item, index) => {
           
            return <NoteBtn key={index} title={item.title} catLink={item.link}/>;
          })}
        </div>
        <div className="NewsDetail__info-des" dangerouslySetInnerHTML={{__html: data.excerpt}}></div>
      </div>
      <div className="NewsDetail__share">
        <div className="NewsDetail__share--icons">
          <p>Chia sẻ</p>
          <div className="NewsDetail__share--icons-item">
            <Link href="facebook.com" target="_blank">
              <div className="NewDetail__share NewsDetail__share--fb">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="29.5" stroke="white" />
                  <g clipPath="url(#clip0_518_2462)">
                    <path d="M32.4965 21.984H34.6875V18.168C34.3095 18.116 33.0095 17.999 31.4955 17.999C28.3365 17.999 26.1725 19.986 26.1725 23.638V26.999H22.6865V31.265H26.1725V41.999H30.4465V31.266H33.7915L34.3225 27H30.4455V24.061C30.4465 22.828 30.7785 21.984 32.4965 21.984Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_518_2462">
                      <rect width="24" height="24" fill="white" transform="translate(16.5 17.999)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* <Image src={NewsDetailFbIcon} alt="" /> */}
            </Link>
            <Link href="facebook.com" target="_blank">
              <div className="NewDetail__share NewsDetail__share--ins">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="29.5" stroke="white" />
                  <g clipPath="url(#clip0_1375_3261)">
                    <path d="M30.0037 23.8372C26.6007 23.8372 23.8457 26.5952 23.8457 29.9952C23.8457 33.3982 26.6037 36.1532 30.0037 36.1532C33.4067 36.1532 36.1617 33.3952 36.1617 29.9952C36.1617 26.5922 33.4037 23.8372 30.0037 23.8372ZM30.0037 33.9922C27.7947 33.9922 26.0067 32.2032 26.0067 29.9952C26.0067 27.7872 27.7957 25.9982 30.0037 25.9982C32.2117 25.9982 34.0007 27.7872 34.0007 29.9952C34.0017 32.2032 32.2127 33.9922 30.0037 33.9922Z" fill="white" />
                    <path d="M34.9473 18.0751C32.7393 17.9721 27.2703 17.9771 25.0603 18.0751C23.1183 18.1661 21.4053 18.6351 20.0243 20.0161C17.7163 22.3241 18.0113 25.4341 18.0113 29.9951C18.0113 34.6631 17.7513 37.7011 20.0243 39.9741C22.3413 42.2901 25.4963 41.9871 30.0033 41.9871C34.6273 41.9871 36.2233 41.9901 37.8583 41.3571C40.0813 40.4941 41.7593 38.5071 41.9233 34.9381C42.0273 32.7291 42.0213 27.2611 41.9233 25.0511C41.7253 20.8381 39.4643 18.2831 34.9473 18.0751ZM38.4423 38.4471C36.9293 39.9601 34.8303 39.8251 29.9743 39.8251C24.9743 39.8251 22.9693 39.8991 21.5063 38.4321C19.8213 36.7551 20.1263 34.0621 20.1263 29.9791C20.1263 24.4541 19.5593 20.4751 25.1043 20.1911C26.3783 20.1461 26.7533 20.1311 29.9603 20.1311L30.0053 20.1611C35.3343 20.1611 39.5153 19.6031 39.7663 25.1471C39.8233 26.4121 39.8363 26.7921 39.8363 29.9941C39.8353 34.9361 39.9293 36.9531 38.4423 38.4471Z" fill="white" />
                    <path d="M36.4048 25.033C37.1996 25.033 37.8438 24.3888 37.8438 23.594C37.8438 22.7993 37.1996 22.155 36.4048 22.155C35.6101 22.155 34.9658 22.7993 34.9658 23.594C34.9658 24.3888 35.6101 25.033 36.4048 25.033Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1375_3261">
                      <rect width="24" height="24" fill="white" transform="translate(17.999 17.999)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* <Image src={NewsDetailInsIcon} alt="" /> */}
            </Link>
            <Link href="facebook.com" target="_blank">
              <div className="NewDetail__share NewsDetail__share--be">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="29.5" stroke="white" />
                  <path d="M30.496 34.4756C30.496 32.3572 29.5009 30.7913 27.445 30.2044C28.945 29.4811 29.7273 28.3852 29.7273 26.6806C29.7273 23.3196 27.2458 22.5 24.3827 22.5H16.5V39.375H24.6035C27.642 39.375 30.496 37.9043 30.496 34.4756ZM20.1747 25.3807H23.6231C24.9487 25.3807 26.142 25.7567 26.142 27.3088C26.142 28.7417 25.2137 29.3183 23.9004 29.3183H20.1747V25.3807ZM20.1736 36.5092V31.862H24.1789C25.7967 31.862 26.8201 32.5429 26.8201 34.2716C26.8201 35.9762 25.5986 36.5092 24.1031 36.5092H20.1736Z" fill="white" />
                  <path d="M36.6909 37.9307C39.5822 37.9307 41.4547 36.6159 42.3558 33.8211H39.4215C39.1056 34.8643 37.8037 35.4157 36.7939 35.4157C34.8456 35.4157 33.8222 34.2636 33.8222 32.3057H42.5539C42.8302 28.3876 40.6747 25.0483 36.6897 25.0483C33.0003 25.0483 30.4961 27.8477 30.4961 31.5147C30.4961 35.3205 32.8689 37.9307 36.6909 37.9307ZM36.5867 27.584C38.2565 27.584 39.0966 28.5744 39.2369 30.1942H33.8267C33.9365 28.5882 34.9927 27.584 36.5867 27.584Z" fill="white" />
                  <path d="M33.1484 23.3862H39.9274V25.0484H33.1484V23.3862Z" fill="white" />
                </svg>
              </div>
              {/* <Image src={NewDetailBeIcon} alt="" /> */}
            </Link>
            <Link href="facebook.com" target="_blank">
              <div className="NewDetail__share NewsDetail__share--tiktok">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="29.5" stroke="white" />
                  <g clipPath="url(#clip0_518_2490)">
                    <path d="M40.5137 24.0173C39.1441 24.0173 37.8803 23.5636 36.8655 22.7981C35.7016 21.9206 34.8653 20.6334 34.57 19.1498C34.4969 18.7833 34.4575 18.405 34.4537 18.0173H30.5411V28.7086L30.5364 34.5647C30.5364 36.1303 29.5169 37.4578 28.1036 37.9247C27.6934 38.0602 27.2505 38.1244 26.7892 38.0991C26.2005 38.0667 25.6487 37.8891 25.1692 37.6022C24.1487 36.9919 23.4569 35.8847 23.4381 34.6181C23.4086 32.6386 25.0089 31.0247 26.987 31.0247C27.3775 31.0247 27.7525 31.0884 28.1036 31.2042V28.282V27.2316C27.7333 27.1767 27.3564 27.1481 26.9753 27.1481C24.8101 27.1481 22.7851 28.0481 21.3376 29.6695C20.2436 30.8948 19.5873 32.4581 19.4861 34.0973C19.3534 36.2508 20.1414 38.2978 21.6695 39.8081C21.8941 40.0299 22.1298 40.2356 22.3764 40.4255C23.6866 41.4338 25.2883 41.9803 26.9753 41.9803C27.3564 41.9803 27.7333 41.9522 28.1036 41.8974C29.6795 41.6639 31.1336 40.9425 32.2811 39.8081C33.6911 38.4145 34.4702 36.5644 34.4786 34.5952L34.4584 25.8502C35.1311 26.3691 35.8666 26.7984 36.6559 27.1317C37.8836 27.6497 39.1853 27.9122 40.525 27.9117V25.0706V24.0164C40.5259 24.0173 40.5147 24.0173 40.5137 24.0173Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_518_2490">
                      <rect width="24" height="24" fill="white" transform="translate(17.999 17.999)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* <Image src={NewsDetailFbIcon} alt="" /> */}
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="NewsDetail__share-content" dangerouslySetInnerHTML={{__html: data.content}}>
          
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
            {
              relatedPosts.map((item, index) =>{
                return (
                  <SwiperSlide key={index+''+item.slug}>
                    <CardNews postData={item} />
                  </SwiperSlide>
                )
              })
            }
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
                  fillOpacity="0.65"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                  fillOpacity="0.65"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

        {
          allDocuments?.map((value, index)=>{

            if ((index % 2 == 0) && (index <= (allDocuments.length - 2)) ){
              return(
                <SwiperSlide key={index+": "+value.title}>
                  <div>
                    <CardReport data={allDocuments[index]} />
                    <CardReport data={allDocuments[index+1]} />
                  </div>
                </SwiperSlide>
              )
            } else {
              return <></>
            }

          })
        }
          
        </Swiper>
        <div className="image-container">
          <div className="NewsDetail__document--prev">
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
                  fillOpacity="0.65"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <div className="NewsDetail__document--next">
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
                  fillOpacity="0.65"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

      {/* arrow */}
    </div>
  );
};
