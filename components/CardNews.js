import React from "react";
import Image from "next/image";
import { NoteBtn } from "./NoteBtn";
import calendarCard from "../public/imgs/calendar-edit-NewsDetail.svg";
import userCard from "../public/imgs/user-edit-NewsDetail.svg";
import nextIcon from "../public/imgs/nextIcon.svg";
import imgCard from "../public/imgs/imgCard.png"
import Link from "next/link";
export const CardNews = ({postData}) => {
  
  var postDate = new Date(postData.date);
  var month = postDate.getMonth()
  var year = postDate.getFullYear()
  var day = postDate.getDate()


  const data =postData.categories.nodes.map((item, index)=>{
    return {
      title: item.name,
      link:'/'
    }
  })
  return (
  
      <div className="card__container">

        <div className="image-container card__img">
        <Link href={'/news/'+postData.slug} >
          <Image src={postData.featuredImage.node.mediaItemUrl} alt="" className="image-item" fill />
        </Link>
        </div>
        <div className="card__content">
          <div className="card__note">
            {data.map((item, index) => (
              <NoteBtn key={index} title={item.title} catLink={item.link} />
            ))}
          </div>
          <Link href={'/news/'+postData.slug} >

          <div className="card__title">{postData.title}</div>
          </Link>
          <div className="card__info">
            <div className="card__infor-time">
              <Image src={calendarCard} alt="" />
              <p>{`Posted on ${[(day <= 9 ? ('0'+day) : day ),month,year].join('/')} `}</p>
            </div>
            <div className="card__info-user">
              <Image src={userCard} alt="" />
              <p>{postData.author.node.name}</p>
            </div>
          </div>
          <Link href={'/news/'+postData.slug} >

          <div className="card__btn-next">
            <div className="card__btn">
              <Image src={nextIcon} alt="" />
            </div>
            <div className="card__next-text">ĐỌC TIẾP</div>
          </div>
          </Link>
        </div>
      </div>
   
  );
};
