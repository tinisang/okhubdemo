import React from 'react'
import Image from 'next/image';
import cardProjectImg from "../public/imgs/cardProjectImg.png"
import Link from 'next/link';

export const CardProject = (props) => {
  return (
    <Link href = "/project/abc" className='card__project--container'>
        <div className='card__project--img'>
          <div className='card__project--img-sub'>
            <div className='card__project--img-eclipse'></div>
            <div className='card__project--img-eclipse'></div>
            <div className='card__project--img-eclipse'></div>
          </div>

          <div className="image-feature">

            <img src = {props.image || cardProjectImg} alt = '' layout='fill' />
            <div className="view-project">
              View
            </div>
          </div>
        </div>
        <div className='card__project--title'>
            <p>{props.title}</p>
        </div>
        <div className='card__project--des'>
            <div className='card__project--des-todo'>{props.toDo}</div>
            <div className='card__project--des-category'>{props.category}</div>
        </div>
    </Link>

  )
}
