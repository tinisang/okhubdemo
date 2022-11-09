import Image from "next/image";

import { FooterForm } from "./FooterForm";
import { FooterContact } from "./FooterContact";
import { FooterNav } from "./FooterNav";

export const Footer = () => {
  return (
    <>
   <div className="footer__container">
   <div className="footer">
        <FooterForm/>
        {/*Contact */}
      <FooterContact/>
      </div>

      {/*  */}

    <FooterNav/>
   </div>
    </>
  );
};
