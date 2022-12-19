
import React from 'react'
import calendarCard from "../public/imgs/calendar-edit-NewsDetail.svg";
import Image from "next/image";
import arrowDownCardReport from "../public/imgs/arrowDownCardReport.svg"
import Link from 'next/link';

export const CardReport = () => {
  return (
   <div className= "card-report__container">
      <Link href="/news/dgd" >
       <div className="card-report__title">
         <p>Báo cáo thị trường ngành hàng thời trang 3 quý đầu năm 2022</p>
       </div>
       <div className="card-report__time-dow">
         <div className="card-report__time">
           <Image src = {calendarCard}alt = ""/>
           <p>Posted on 05/11/2022</p>
         </div>
         <div className="card-report__dow">
          <div className='card-report__dow-img'>
          <Image src = {arrowDownCardReport} alt = ""/>
          </div>
          <p>TẢI XUỐNG</p>
         </div>
       </div>
    </Link>
   </div>
  )
}
