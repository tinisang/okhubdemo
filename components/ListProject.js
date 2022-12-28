import React from 'react'
import Link from 'next/link'

export const ListProject = ({id, name, toDoData, category, hoverFunction, index}) => {

    
  return (
    <div className = {`list__peoject--item-${index}`} onMouseEnter={hoverFunction} >

    
    <Link href="/project/abc" className='list--container' >
        <div className='list__NO' >
            <p>{id}</p>
        </div>
        <div className='list__name'>
            <p>{name}</p>
        </div>
        <div className='list__to-do'>
            {
                toDoData?.map((name) => (
                    <p key = {name} >{name}</p>
                ))
            }
        </div>
        <div className='list__category'>
            <p>{category}</p>
        </div>
    </Link>
    </div>
  )
}
