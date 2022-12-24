import React from 'react'

export const ButtonCategory = ({category, count, handleCatSelect}) => {
    return (
        <>
          <button onClick={handleCatSelect} className={`button__category`}>
            <p>{category} <span>{count || 0}</span></p>
           
          </button>
        </>
      );
}
