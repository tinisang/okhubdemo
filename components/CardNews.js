import React from "react";
import Image from "next/image";
import { NoteBtn } from "./NoteBtn";
import calendarCard from "../public/imgs/calendar-edit-NewsDetail.svg";
import userCard from "../public/imgs/user-edit-NewsDetail.svg";
import nextIcon from "../public/imgs/nextIcon.svg";
import imgCard from "../public/imgs/imgCard.png"
import Link from "next/link";
export const CardNews = () => {
  const data = [
    {
      title: "Tin nổi bật",
    },
    {
      title: "Mỹ phẩm",
    },
  ];
  return (
    <Link href="/news/abc" >
      <div className="card__container">
        <div className="card__img">
          <Image src={imgCard} alt="" />
        </div>
        <div className="card__content">
          <div className="card__note">
            {data.map((item, index) => (
              <NoteBtn key={index} title={item.title} />
            ))}
          </div>
          <div className="card__title">
            “Ngành mỹ phẩm đang bị thoái
            trào” - Điều này liệu có đúng?
          </div>
          <div className="card__info">
            <div className="card__infor-time">
              <Image src={calendarCard} alt="" />
              <p>Posted on 05/11/2022</p>
            </div>
            <div className="card__info-user">
              <Image src={userCard} alt="" />
              <p>Tien Dung Tran</p>
            </div>
          </div>
          <div className="card__btn-next">
            <div className="card__btn">
              <Image src={nextIcon} alt="" />
            </div>
            <div className="card__next-text">ĐỌC TIẾP</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
