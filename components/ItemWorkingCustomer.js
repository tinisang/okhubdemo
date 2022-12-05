import React from 'react'
import Image from 'next/image'

export const ItemWorkingCustomer = ({no, title, des, img}) => {
  return (
    <div className='item--working__customer--container'>
        <div className="item--working--content-NO"> <p>{no}</p></div>
          <div className="item--working--content-title"><p>{title}</p></div>
          <div className = "item--working--content-des"><p>{des}</p></div>
          <div className = "item--working--content-img">
              <Image src = {img} alt = ""/>
              <div className="fake-border"></div>
          </div>
    </div>
  )
}
