import React from 'react'

export const ButtonCategory = ({category, onClick}) => {
    return (
        <>
          <button onClick={onClick} className={`button__category`}>
            <p>{category}</p>
          </button>
        </>
      );
}
