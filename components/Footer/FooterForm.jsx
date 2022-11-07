
import React from 'react'

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
        <p>Dịch vụ bạn quan tâm</p>
        <input
          type="text"
          placeholder="Chọn dịch vụ bạn quan tâm"
        ></input>
      </div>
    </div>

    <div className="footer__form--note">
      <p>Lời nhắn của bạn cho chúng tôi</p>
      <input
        type="text"
        placeholder="Xin chào, tôi cần OkHub tư vấn về... *"
      ></input>
    </div>
    <button className = "footer__btn">Submit</button>
  </div>
  )
}
