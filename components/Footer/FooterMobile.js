import React from "react";
import Link from "next/link";

export const FooterMobile = () => {
  return (
    <div className="footer-mobile__container">
      <div className="footer-mobile__nav">
        <div className="mobile__nav--home">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1168_3198)">
              <path
                d="M11.3284 3.47527L3.53219 9.71901C2.65469 10.4165 2.09219 11.8903 2.28344 12.9928L3.77969 21.9478C4.04969 23.5453 5.57968 24.839 7.19968 24.839H19.7997C21.4084 24.839 22.9497 23.534 23.2197 21.9478L24.7159 12.9928C24.8959 11.8903 24.3334 10.4165 23.4672 9.71901L15.6709 3.48653C14.4672 2.51903 12.5209 2.51902 11.3284 3.47527Z"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 17.7402C15.0533 17.7402 16.3125 16.481 16.3125 14.9277C16.3125 13.3744 15.0533 12.1152 13.5 12.1152C11.9467 12.1152 10.6875 13.3744 10.6875 14.9277C10.6875 16.481 11.9467 17.7402 13.5 17.7402Z"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1168_3198">
                <rect
                  width="27"
                  height="27"
                  fill="white"
                  transform="translate(0 0.302734)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>Trang chủ</p>
        </div>
        <div className="mobile__nav--service">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.125 11.5527H21.375C23.625 11.5527 24.75 10.4277 24.75 8.17773V5.92773C24.75 3.67773 23.625 2.55273 21.375 2.55273H19.125C16.875 2.55273 15.75 3.67773 15.75 5.92773V8.17773C15.75 10.4277 16.875 11.5527 19.125 11.5527Z"
              stroke="#C0C0C0"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.625 25.0527H7.875C10.125 25.0527 11.25 23.9277 11.25 21.6777V19.4277C11.25 17.1777 10.125 16.0527 7.875 16.0527H5.625C3.375 16.0527 2.25 17.1777 2.25 19.4277V21.6777C2.25 23.9277 3.375 25.0527 5.625 25.0527Z"
              stroke="#C0C0C0"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.75 11.5527C9.23528 11.5527 11.25 9.53802 11.25 7.05273C11.25 4.56745 9.23528 2.55273 6.75 2.55273C4.26472 2.55273 2.25 4.56745 2.25 7.05273C2.25 9.53802 4.26472 11.5527 6.75 11.5527Z"
              stroke="#C0C0C0"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.25 25.0527C22.7353 25.0527 24.75 23.038 24.75 20.5527C24.75 18.0675 22.7353 16.0527 20.25 16.0527C17.7647 16.0527 15.75 18.0675 15.75 20.5527C15.75 23.038 17.7647 25.0527 20.25 25.0527Z"
              stroke="#C0C0C0"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>Dịch vụ</p>
        </div>
        <div className="mobile__nav--chat">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1168_3216)">
              <path
                d="M24.75 11.5527V14.9277C24.75 19.4277 22.5 21.6777 18 21.6777H17.4375C17.0887 21.6777 16.7512 21.8465 16.5375 22.1277L14.85 24.3777C14.1075 25.3677 12.8925 25.3677 12.15 24.3777L10.4625 22.1277C10.2825 21.8802 9.86625 21.6777 9.5625 21.6777H9C4.5 21.6777 2.25 20.5527 2.25 14.9277V9.30273C2.25 4.80273 4.5 2.55273 9 2.55273H15.75"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9375 8.17773C23.4908 8.17773 24.75 6.91854 24.75 5.36523C24.75 3.81193 23.4908 2.55273 21.9375 2.55273C20.3842 2.55273 19.125 3.81193 19.125 5.36523C19.125 6.91854 20.3842 8.17773 21.9375 8.17773Z"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9958 12.6777H18.0059"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4948 12.6777H13.5049"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99382 12.6777H9.00393"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1168_3216">
                <rect
                  width="27"
                  height="27"
                  fill="white"
                  transform="translate(0 0.302734)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>Chat live</p>
        </div>
        <div className="mobile__nav--project">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.446 4.25136L17.426 8.21136C17.696 8.76261 18.416 9.29136 19.0235 9.39261L22.6123 9.98886C24.9073 10.3714 25.4473 12.0364 23.7935 13.6789L21.0035 16.4689C20.531 16.9414 20.2723 17.8526 20.4185 18.5051L21.2173 21.9589C21.8473 24.6926 20.396 25.7501 17.9773 24.3214L14.6135 22.3301C14.006 21.9701 13.0048 21.9701 12.386 22.3301L9.02228 24.3214C6.61478 25.7501 5.15228 24.6814 5.78228 21.9589L6.58103 18.5051C6.72728 17.8526 6.46853 16.9414 5.99603 16.4689L3.20603 13.6789C1.56353 12.0364 2.09228 10.3714 4.38728 9.98886L7.97603 9.39261C8.57228 9.29136 9.29228 8.76261 9.56228 8.21136L11.5423 4.25136C12.6223 2.10261 14.3773 2.10261 15.446 4.25136Z"
              fill="none"
              stroke="#C0C0C0"
            />
          </svg>

          <p>Dự án</p>
        </div>

        <div className="mobile__nav--project">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1168_3209)">
              <path
                d="M13.5 25.0527C19.6875 25.0527 24.75 19.9902 24.75 13.8027C24.75 7.61523 19.6875 2.55273 13.5 2.55273C7.3125 2.55273 2.25 7.61523 2.25 13.8027C2.25 19.9902 7.3125 25.0527 13.5 25.0527Z"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9958 13.8027H18.0059"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4948 13.8027H13.5049"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99382 13.8027H9.00393"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1168_3209">
                <rect
                  width="27"
                  height="27"
                  fill="white"
                  transform="translate(0 0.302734)"
                />
              </clipPath>
            </defs>
          </svg>
          <p>Menu</p>
        </div>

        <div className="mobile__nav--menu">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1168_3209)">
              <path
                d="M13.5 25.0527C19.6875 25.0527 24.75 19.9902 24.75 13.8027C24.75 7.61523 19.6875 2.55273 13.5 2.55273C7.3125 2.55273 2.25 7.61523 2.25 13.8027C2.25 19.9902 7.3125 25.0527 13.5 25.0527Z"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9958 13.8027H18.0059"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4948 13.8027H13.5049"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99382 13.8027H9.00393"
                stroke="#C0C0C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1168_3209">
                <rect
                  width="27"
                  height="27"
                  fill="white"
                  transform="translate(0 0.302734)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>Menu</p>
        </div>
      </div>
      <div className="footer-mobile__control">
        <svg
          width="141"
          height="5"
          viewBox="0 0 141 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.302734" width="141" height="4" rx="2" fill="#8A8A8A" />
        </svg>
      </div>
    </div>
  );
};
