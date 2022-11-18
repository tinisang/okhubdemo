import React from 'react'

export const ListProject = ({id, name, toDoData, category}) => {
  return (
    <div className='list--container'>
        <div className='list__NO'>
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
    </div>
  )
}
