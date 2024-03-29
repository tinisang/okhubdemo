import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/imgs/logoPostMobile.svg";
import imgProject from "../../../public/imgs/imgProjectPostMobile.png";
import imgProject1 from "../../../public/imgs/imgProjectPostMobile.png";
import imgProject2 from "../../../public/imgs/imgProjectPostMobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const arrImgage = [
  {
    id: 0,
    img: imgProject,
  },
  {
    id: 1,
    img: imgProject1,
  },
  {
    id: 2,
    img: imgProject2,
  },
];

export const ProjectPost = ({
  projectName,
  hastags,
  amountLike,
  amountShare,
  desc,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div href="#" className="container__proejct-post">
      <div className="project-post__header">
        <div className="project-post__logo">
          <Image src={logo} alt="" />
        </div>
        <div className="project-post__text">
          <Link href="#" className="project-post__title">
            {projectName}
          </Link>
          <div className="project-post__hastag">
            {hastags.map((item, index) => {
              return (
                <Link key={index} href="#">
                  #<span>{item}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {arrImgage.map((item, index) => (
          <>
            <SwiperSlide>
              <div key={index} className="project-post__img">
                <Image src={item.img} alt="" />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      {/*  */}
      <div className="project-post__interactive">
        <div
          className="project-post__amout-like"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
              fill="#5052FD"
              stroke="none"
            >
              <path d="M15.7553 2.97083C14.0207 2.97083 12.4682 3.81416 11.5003 5.10791C10.5324 3.81416 8.97991 2.97083 7.24533 2.97083C4.30324 2.97083 1.91699 5.36666 1.91699 8.32791C1.91699 9.46832 2.09908 10.5225 2.41533 11.5C3.92949 16.2917 8.59658 19.1571 10.9062 19.9429C11.232 20.0579 11.7687 20.0579 12.0945 19.9429C14.4041 19.1571 19.0712 16.2917 20.5853 11.5C20.9016 10.5225 21.0837 9.46832 21.0837 8.32791C21.0837 5.36666 18.6974 2.97083 15.7553 2.97083Z" />
            </svg>
          ) : (
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="black"
            >
              <path d="M15.7553 2.97083C14.0207 2.97083 12.4682 3.81416 11.5003 5.10791C10.5324 3.81416 8.97991 2.97083 7.24533 2.97083C4.30324 2.97083 1.91699 5.36666 1.91699 8.32791C1.91699 9.46832 2.09908 10.5225 2.41533 11.5C3.92949 16.2917 8.59658 19.1571 10.9062 19.9429C11.232 20.0579 11.7687 20.0579 12.0945 19.9429C14.4041 19.1571 19.0712 16.2917 20.5853 11.5C20.9016 10.5225 21.0837 9.46832 21.0837 8.32791C21.0837 5.36666 18.6974 2.97083 15.7553 2.97083Z" />
            </svg>
          )}
          <p>
            <span>{amountLike}</span>
            lượt thích
          </p>
        </div>
        <div className="project-post__amout-share">
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2211 5.19521H11.7211L11.4774 5.19521C11.4773 5.19521 11.4771 5.19521 11.477 5.19521C11.4769 5.19521 11.4769 5.19521 11.4769 5.19521C8.56048 5.19844 5.76824 6.314 3.71176 8.29134C1.65583 10.2682 0.503202 12.9441 0.5 15.731L0.5 15.731C0.499954 15.7686 0.51192 15.8072 0.537159 15.8416C0.562452 15.876 0.600518 15.9051 0.648359 15.9216C0.696925 15.9377 0.750169 15.9391 0.79992 15.9254L0.932744 16.4075L0.799925 15.9254C0.849787 15.9117 0.890817 15.8843 0.919174 15.8504L12.2211 5.19521ZM12.2211 5.19521V4.69521V0.704214C12.2211 0.668283 12.2321 0.631454 12.2552 0.598291C12.2784 0.564868 12.3136 0.535942 12.3583 0.51812C12.4032 0.500244 12.4537 0.495286 12.5026 0.504622C12.5514 0.513944 12.5936 0.53652 12.625 0.566634L20.4388 8.07975L20.4391 8.07999C20.4597 8.09984 20.475 8.12233 20.4851 8.14565C20.4951 8.16892 20.5 8.19313 20.5 8.21708C20.5 8.24104 20.4951 8.26525 20.4851 8.28852C20.475 8.31184 20.4597 8.33433 20.4391 8.35418L20.4388 8.35442L12.625 15.8675M12.2211 5.19521L12.625 15.8675M12.2211 15.73V11.739V11.239H11.7211L9.80171 11.239L12.2211 15.73ZM12.2211 15.73C12.2211 15.7659 12.2321 15.8027 12.2552 15.8359C12.2784 15.8693 12.3136 15.8982 12.3583 15.9161C12.4032 15.9339 12.4537 15.9389 12.5026 15.9295C12.5514 15.9202 12.5936 15.8976 12.625 15.8675M12.2211 15.73L12.625 15.8675M1.6016 15.0331L0.919314 15.8503L9.80077 11.239H9.8012C8.2277 11.2361 6.67321 11.5751 5.2537 12.2314C3.83431 12.8877 2.58576 13.8447 1.60228 15.0322C1.60205 15.0325 1.60183 15.0328 1.6016 15.0331Z"
              stroke="black"
            />
          </svg>
          <p>
            <span>{amountShare}</span>
            lượt chia sẻ
          </p>
        </div>
      </div>

      <div className="project-post__desc">
        <p>
          <Link href="#">{desc}</Link>
        </p>
        <Link href="">Đọc tiếp</Link>
      </div>
    </div>
  );
};
