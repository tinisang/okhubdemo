import React from "react";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import { Button } from "../Button/Button";

export const FooterForm = () => {
  return (
    <div className="footer__form">
      <div className="footer__form--title">
        Hãy kết nối <br></br> với chúng tôi ngay
      </div>
      <div className="footer__form--name">
        {" "}
        <p> Tên của bạn</p>
        <input type="text" placeholder="Lê Văn A *"></input>
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
        <div className="footer__form--company-name">
          <p>Tên tổ chức của bạn</p>
          <input type="text" placeholder="Công ty Cổ phần ABC *"></input>
        </div>
        <div className="footer__form--service">
          <p>Dịch vụ mà bạn quan tâm</p>
          <Multiselect
            displayValue="key"
            selectedValues = {true}
            // onKeyPressFn={function noRefCheck(){}}
            // onRemove={function noRefCheck(){}}
            // onSearch={function noRefCheck(){}}
            // onSelect={function noRefCheck(){}}
     
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
                cat: "Group 2",
                key: "Design Packaging",
              },
          
          
            ]}
            showCheckbox
            placeholder="Chọn dịch vụ quan tâm"
            
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
     <Button text = "Submit"/>
    </div>
  );
};
