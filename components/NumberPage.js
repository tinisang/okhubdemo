import React from "react";

export const NumberPage = ({ number, active, handlePagination }) => {
  return (
    <>
      <div className={`number__page ${active ? `active` : ``}`} onClick={handlePagination}>
        <p>{number}</p>
      </div>
    </>
  );
};
