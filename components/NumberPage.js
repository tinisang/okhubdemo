import React from "react";

export const NumberPage = ({ number, active }) => {
  return (
    <>
      <div className={`number__page ${active ? `active` : ``}`}>
        <p>{number}</p>
      </div>
    </>
  );
};
