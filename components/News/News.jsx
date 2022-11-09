import React from "react";
import aroowLeft from "../../public/imgs/arrow-up-left-news.png"
import calendarNews from "../../public/imgs/calendar-edit-news.png"
import userNews from "../../public/imgs/user-edit-news.png"
import imagePrimaryNews from "../../public/imgs/imageNewsPrimary.png"

import Image from "next/image";
export const News = () => {
  return (
    <div className="container">
      <div className="news__back">
          <Image src = {aroowLeft}/>
          <p>Quay lại trang danh sách</p>
      </div>
      {/*  */}
      <div className="news__primary">
         <div className="news__primary-info">
         <div className="news__primary-time">
              <Image src = {calendarNews} />
              <p>Posted on 05/11/2022</p>
          </div>
          <div className="news__primary-user">
              <Image src = {userNews}/>
              <p>Tien Dung Tran</p>
          </div>
         </div>
          <p className="news__primary-title">
          Bức tranh thị trường thời trang trong <br></br>
            thời kỳ suy thoái kinh tế toàn cầu
          </p>
          <Image src = {imagePrimaryNews}  className="news__primary-img"/>
      </div>
      <div className="news__info">
          <div className="news__info--categories">
                    <p>Tin nổi bật</p>
                    <p>Thời gian</p>
                    <p>Thời gian</p>
                    <p>Thời gian</p>
                    <p>Thời gian</p>
                    <p>Thời gian</p>
                    <p>Thời gian</p>
                    <p>Thời gian</p>
          </div>
          <div className="news__info-des">
            <p>
            Suy thoái kinh tế tiếp tục leo thang, sự căng thẳng tiếp 
            diễn và là động thái để các nhãn hàng thời trang chuẩn bị cho một kịch bản tồi tệ nhất.
            Suy thoái kinh tế tiếp tục leo thang, sự căng thẳng tiếp 
            diễn và là động thái để các nhãn hàng thời trang chuẩn bị cho một kịch bản tồi tệ nhất.
    
            </p>
          </div>

      </div>
      <div className="news__share"></div>
      <div className="news__status"></div>
      <div className="news__document"></div>
    </div>
  );
};
