import React from "react";
import Image from "next/image";
import { NoteBtn } from "./NoteBtn";
import calendarCard from "../../public/imgs/calendar-edit-NewsDetail.png";
import userCard from "../../public/imgs/user-edit-NewsDetail.png";
import nextIcon from "../../public/imgs/arowNextCard.png";
import imgCard from "../../public/imgs/imgCard.png"

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
    <div className="card__container">
      <div className="card__img">
        <Image src = {imgCard}/>
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
            <Image src={calendarCard} />
            <p>Posted on 05/11/2022</p>
          </div>
          <div className="card__info-user">
            <Image src={userCard} />
            <p>Tien Dung Tran</p>
          </div>
        </div>
        <div className="card__btn-next">
          <div className="card__btn">
            <Image src={nextIcon} />
          </div>
          <div className="card__next-text">ĐỌC TIẾP</div>
        </div>
      </div>
    </div>
  );
};
