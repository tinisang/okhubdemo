import React from 'react'

export const ButtonCategory = ({category, active}) => {
    return (
        <>
          <button className={`button__category ${active ? `active` : ``}`}>
            <p>{category}</p>
          </button>
        </>
      );
}
