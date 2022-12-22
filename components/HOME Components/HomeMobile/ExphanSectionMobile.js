import React from "react";

export const ExpandSectionMobile = () => {
  return (
    <div className="expand-mobile__container">
      <h2 className="expand-mobile__title--1">User-centric</h2>
      <h2 className="expand-mobile__title--2">design</h2>
      <div className="expand-mobile__content">
        <h4 className="content__title">
          Thiết kế Lấy người dùng Làm trung tâm
        </h4>
        <p className="content__desc">
          Tạo ra các điểm chạm vào trái tim và trải nghiệm người dùng, gắn liền
          với các thiết kế trong sản phẩm Digital.
        </p>
      </div>

      <div className="expand-mobile__btn">
        <button className="btn__credential">Credential</button>
        <button className="btn__scroll">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8811 11.239L9.40392 15.7162L4.92676 11.239"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.40332 3.17725V15.5909"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
