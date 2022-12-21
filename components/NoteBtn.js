import React from "react";
import Link from "next/link";

export const NoteBtn = ({ title, catLink }) => {

  return (
    <>
    <div className="link">

    <Link href={catLink}>
      <p className="card--btn">{title}</p>
    </Link>
    </div>
   
    </>
  );
};
