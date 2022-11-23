import React from 'react'
import Image from 'next/image'

export const CardTeams = ({image, team}) => {
  return (
    <div className='card__team--container'>
        <Image src = {image} alt = '' />
        <div className="card__team--btn">
           <div className='card__team--btn--bg'>
           <p>{team}</p>
           </div>
        </div>
    </div>
  )
}
