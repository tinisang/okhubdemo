
import React from 'react'
import calendarCard from "../public/imgs/calendar-edit-NewsDetail.png";
import Image from "next/image";
import arrowDownCardReport from "../public/imgs/arrowDownCardReport.png"
import Link from 'next/link';

export const CardReport = () => {
  return (
   <div className= " card-report__container">
      <Link href="#" target="_blank" >
       <div className="card-report__title">
         <p>Báo cáo thị trường ngành hàng thời trang 3 quý đầu năm 2022</p>
       </div>
       <div className="card-report__time-dow">
         <div className="card-report__time">
           <Image src = {calendarCard}/>
           <p>Posted on 05/11/2022</p>
         </div>
         <div className="card-report__dow">
          <Image src = {arrowDownCardReport} />
          <p>TẢI XUỐNG</p>
         </div>
       </div>
    </Link>
   </div>
  )
}
