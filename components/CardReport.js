
import React from 'react'
import calendarCard from "../public/imgs/calendar-edit-NewsDetail.svg";
import Image from "next/image";
import arrowDownCardReport from "../public/imgs/arrowDownCardReport.svg"
import Link from 'next/link';

export const CardReport = ({data}) => {

  

  var postDate = new Date(data.date);
  var month = postDate.getMonth()
  var year = postDate.getFullYear()
  var day = postDate.getDate()


  
  return (
   <div className= "card-report__container">

       <div className="card-report__title">
         <p>{data.title}</p>
       </div>
       <div className="card-report__time-dow">
         <div className="card-report__time">
           <Image src = {calendarCard}alt = ""/>
           <p>{`Posted on ${[(day <= 9 ? ('0'+day) : day ),month,year].join('/')} `}</p>
         </div>
         <a target={'blank'} href={data.File.file.mediaItemUrl} download={data.title} className="card-report__dow">
            <div className='card-report__dow-img'>
            <Image src = {arrowDownCardReport} alt = ""/>
            </div>
            <p>TẢI XUỐNG</p>
          </a>
       </div>
   
   </div>
  )
}
