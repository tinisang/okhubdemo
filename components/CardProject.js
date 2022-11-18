import React from 'react'
import Image from 'next/image';
import cardProjectImg from "../public/imgs/cardProjectImg.png"

export const CardProject = (props) => {
  return (
    <div className='card__project--container'>
        <div className='card__project--img'>
          <div className='card__project--img-sub'>
            <div className='card__project--img-eclipse'></div>
            <div className='card__project--img-eclipse'></div>
            <div className='card__project--img-eclipse'></div>
          </div>
            <Image src = {cardProjectImg} slt = '' />
        </div>
        <div className='card__project--title'>
            <p>{props.title}</p>
        </div>
        <div className='card__project--des'>
            <div className='card__project--des-todo'>{props.toDo}</div>
            <div className='card__project--des-category'>{props.category}</div>
        </div>
    </div>

  )
}
