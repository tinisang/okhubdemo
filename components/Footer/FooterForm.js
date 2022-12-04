import React from "react";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import { Button } from "../Button/Button";
import { useState } from "react";
export const FooterForm = () => {
  const [ state , setState ] = useState(false);
  const handleClick = () => {
    const inputSelection = document.querySelector('.optionListContainer');
    if(!state){
      inputSelection.classList.replace('displayNone','displayBlock');
    }
    else{
      inputSelection.classList.replace('displayBlock','displayNone');
    }
    setState(!state);
  }
  return (
    <div className="footer__form">
      <div className="footer__form--title">
        Hãy kết nối <br></br> với chúng tôi ngay
      </div>
      <div className="footer__form--name-and-footer__form--company-name">
        {" "}
        <div className="footer__form--name">
          <p>Tên của bạn</p>
          <input placeholder="Lê Văn A *" />
        </div>
        <div className="footer__form--company-name">
          <p>Tên tổ chức của bạn</p>
          <input type="text" placeholder="Công ty Cổ phần ABC *"></input>
        </div>
      </div>

      <div className="footer__form--email-and-phone">
        <div className="footer__form--email">
          <p>Email của bạn</p>
          <input type="email" placeholder="info@abc.vn *"></input>
        </div>
        <div className="footer__form--phone">
          <p>Điện thoại</p>
          <input type="text" placeholder="098.xxx.xxx *"></input>
        </div>
      </div>

      <div className="footer__form-company-and-service">
        <div className="footer__form--service">
          <div className="footer__form--wrap">
            <p>Dịch vụ mà bạn quan tâm</p>
            <div className="footer__form--arrow" onClick={handleClick}></div>
          </div>
          <Multiselect
            displayValue="key"
            selectedValues={true}
            arrowRenderer={() =>
              <div className="custom-arrow" >
                {/* <CustomArrowComponent /> */}
              </div>
            }
            options={[
              {

                key: "Web Design",
              },
              {
                cat: "Group 1",
                key: "UI/UX Design",
              },
              {
                cat: "Group 1",
                key: "App Development",
              },
              {
                cat: "Group 2",
                key: "Design Branding",
              },
              {
                cat: "Group 3",
                key: "Design Packaging",
              },
              // {
              //   cat: "Group 2",
              //   key: "Design p1",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p2",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p3",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p4",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p5",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p6",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p7",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p8",
              // },
              // {
              //   cat: "Group 2",
              //   key: "Design p9",
              // }
            ]}
            showCheckbox
            placeholder=""
          />
        </div>
      </div>

      <div className="footer__form--note">
        <p>Lời nhắn của bạn cho chúng tôi</p>
        <input
          type="text"
          placeholder="Xin chào, tôi cần OkHub tư vấn về... *"
        ></input>
      </div>
      <Button text="Submit" className="submit-btn" />
    </div>
  );
};
