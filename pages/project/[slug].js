import { useEffect, useState } from "react";
import { ExpandingLogo } from "../../components/SingleProject/ExpandingLogo";
import { Showcase } from "../../components/SingleProject/Showcase";
import { WhyOKHUB } from "../../components/SingleProject/WhyOKHUB";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { BackgroundHeader } from "../../components/SingleProject/BackgroundHeader";
import { TheProblem } from "../../components/SingleProject/TheProblem";
import { JudgeOkhub } from "../../components/SingleProject/JudgeOkhub";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonMobile } from "../../components/Button/ButtonMobile";
import { ProjectPost } from "../../components/HOME Components/HomeMobile/ProjectPost";
import descConectImg from "../../public/imgs/descConectImg.png";
import logoMobile from "../../public/imgs/logoMobileProjectDetail.png";
let tab = 1;

const dataPrevProblemMobile = [
  "Trải nghiệm mua hàng gặp nhiều trở ngại",
  "Giao diện cũ và không còn phù hợp với nhận diện",
  "Khó khăn trong việc kết nối với khách hàng",
  "Website cũ khó tùy biến giao diện",
];
export default function SingleProject() {
  const { scroll: locoScroll } = useLocomotiveScroll();
  useEffect(() => {
    ScrollTrigger.refresh();
  });
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      setIsMobile(true);
    } else setIsMobile(false);

    window.addEventListener("resize", () => {
      if (mediaQuery.matches) {
        setIsMobile(true);
      } else setIsMobile(false);
    });
  }, []);

  // Mobile
  const dataProjectSpecial = [
    {
      id: 0,
      // logo: require('../../../public/imgs/logoPostMobile.svg').default,
      projectName: "Thiết kế website BaaBaby",
      hastags: ["thoitrang", "duannoibat"],
      // imgProject: {imgProject},
      amountLike: 198,
      amountShare: 56,
      desc: "Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại. Gumac đã quyết định làm lại khi website cũ có những vấn đề Đọc tiếp",
    },
    {
      id: 1,
      // logo: "https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg",
      projectName: "Thiết kế website BaaBaby",
      hastags: ["thoitrang", "duannoibat"],
      // imgProject: {imgProject},
      amountLike: 198,
      amountShare: 56,
      desc: "Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại. Gumac đã quyết định làm lại khi website cũ có những vấn đề Đọc tiếp",
    },
    {
      id: 2,
      // logo: "https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg",
      projectName: "Thiết kế website BaaBaby",
      hastags: ["thoitrang", "duannoibat"],
      // imgProject: {imgProject},
      amountLike: 198,
      amountShare: 56,
      desc: "Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại. Gumac đã quyết định làm lại khi website cũ có những vấn đề Đọc tiếp",
    },
  ];

  const [desc, setDesc] = useState(true);
  const [result, setResult] = useState();
  const [more, setMore] = useState();

  const handelDesc = () => {
    setResult(false);
    setMore(false);
    tab = 1;
    return setDesc(true);
  };

  const handelResult = () => {
    setMore(false);
    setDesc(false);
    tab = 2;
    return setResult(true);
  };

  const handelMore = () => {
    setDesc(false);
    setResult(false);
    tab = 3;
    return setMore(true);
  };
  return (
    <>
      {isMobile == false && <BackgroundHeader />}
      {isMobile == false ? (
        <div className="">
          <TheProblem />
          <WhyOKHUB />
          {/* <ExpandingLogo /> */}
          <Showcase />
          <JudgeOkhub />
        </div>
      ) : (
        <div className="project-detail__mobile">
          <div className="mobile__header">
            <div className="mobile__header--arrow">
              <svg
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.62467 17.75L1.83301 10.9583C1.03092 10.1562 1.03092 8.84375 1.83301 8.04167L8.62467 1.25"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mobile__header--title">Thiết kế website GUMAC</div>
            <div className="mobile__header--search">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9788 21.8752C17.4442 21.8752 21.8747 17.4446 21.8747 11.9793C21.8747 6.51401 17.4442 2.0835 11.9788 2.0835C6.51352 2.0835 2.08301 6.51401 2.08301 11.9793C2.08301 17.4446 6.51352 21.8752 11.9788 21.8752Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.9163 22.9168L20.833 20.8335"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="logo">
              <Image src={logoMobile} alt="" />
            </div>

          <div className="mobile__body">
            
            <div className="mobile__hastag">
              #<span>thoitrang </span>#<span>duantieubieu</span>
            </div>
            <div className="mobile__parameter">
              <div className="co-operate">
                <p>1</p>
                <p>Dự án hợp tác</p>
              </div>
              <div className="amount-like">
                <p>198</p>
                <p>Lượt yêu thích</p>
              </div>
              <div className="amount-share">
                <p>56</p>
                <p>Lượt chia sẻ</p>
              </div>
            </div>

            <div className="button__mobile">
              <Link target="_blank" href="https://gumac.vn">
                <button className="mobile__btn--liveSitte">
                  <p>
                    Live site
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.875 4.12505L7.95 1.05005"
                        stroke="white"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.2502 2.55V0.75H6.4502"
                        stroke="white"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.125 0.75H3.375C1.5 0.75 0.75 1.5 0.75 3.375V5.625C0.75 7.5 1.5 8.25 3.375 8.25H5.625C7.5 8.25 8.25 7.5 8.25 5.625V4.875"
                        stroke="white"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                  <p>https://gumac.vn</p>
                </button>
              </Link>
              <Link href="https://gumac.vn">
                <button className="mobile__btn--tuVan">Tư vấn</button>
              </Link>
            </div>

            <div className="mobile__tab">
              <div className="mobbile__tab--desc" onClick={handelDesc}>
                {desc == true ? (
                  <>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 12.0834C11.0858 12.0834 10.75 12.4192 10.75 12.8334C10.75 13.2476 11.0858 13.5834 11.5 13.5834V12.0834ZM13.8333 12.8334V13.5834V12.8334ZM16.5 10.1667H15.75H16.5ZM16.5 3.83337H17.25H16.5ZM2.94938 1.18101L3.04728 1.92459L3.04728 1.92459L2.94938 1.18101ZM0.75 3.11115C0.75 3.52536 1.08579 3.86115 1.5 3.86115C1.91421 3.86115 2.25 3.52536 2.25 3.11115H0.75ZM1.51426 2.61582L0.770675 2.51793V2.51793L1.51426 2.61582ZM16.3185 2.07678L16.9868 1.73629L16.3185 2.07678ZM15.5898 1.3484L15.9303 0.680149V0.680149L15.5898 1.3484ZM15.5898 12.6517L15.9303 13.32L15.5898 12.6517ZM16.3185 11.9234L16.9868 12.2639L16.3185 11.9234ZM2.41667 12.8334C2.41667 13.2476 2.75245 13.5834 3.16667 13.5834C3.58088 13.5834 3.91667 13.2476 3.91667 12.8334H2.41667ZM1.5 10.4167C1.08579 10.4167 0.75 10.7525 0.75 11.1667C0.75 11.581 1.08579 11.9167 1.5 11.9167V10.4167ZM4.91667 12.8334C4.91667 13.2476 5.25245 13.5834 5.66667 13.5834C6.08088 13.5834 6.41667 13.2476 6.41667 12.8334H4.91667ZM1.5 7.91675C1.08579 7.91675 0.75 8.25254 0.75 8.66675C0.75 9.08096 1.08579 9.41675 1.5 9.41675V7.91675ZM7.41667 12.8334C7.41667 13.2476 7.75245 13.5834 8.16667 13.5834C8.58088 13.5834 8.91667 13.2476 8.91667 12.8334H7.41667ZM1.5 5.41675C1.08579 5.41675 0.75 5.75253 0.75 6.16675C0.75 6.58096 1.08579 6.91675 1.5 6.91675V5.41675ZM11.5 13.5834H13.8333V12.0834H11.5V13.5834ZM17.25 10.1667V3.83337H15.75V10.1667H17.25ZM13.8331 0.416748H3.44417V1.91675H13.8331V0.416748ZM3.44417 0.416748C3.20994 0.416748 3.0208 0.415132 2.85149 0.437423L3.04728 1.92459C3.09457 1.91836 3.16239 1.91675 3.44417 1.91675V0.416748ZM2.25 3.11115C2.25 2.8293 2.25162 2.761 2.25784 2.71372L0.770675 2.51793C0.748383 2.68726 0.75 2.87697 0.75 3.11115H2.25ZM2.85149 0.437423C1.76724 0.580167 0.913469 1.4333 0.770675 2.51793L2.25784 2.71372C2.31197 2.30257 2.63575 1.97877 3.04728 1.92459L2.85149 0.437423ZM17.25 3.83337C17.25 3.37912 17.2506 2.99327 17.2249 2.67778C17.1985 2.35353 17.1405 2.03798 16.9868 1.73629L15.6503 2.41728C15.6782 2.47211 15.711 2.56814 15.7299 2.7997C15.7495 3.04003 15.75 3.35421 15.75 3.83337H17.25ZM13.8331 1.91675C14.3121 1.91675 14.6264 1.91733 14.8667 1.93696C15.0983 1.95588 15.1944 1.98869 15.2493 2.01666L15.9303 0.680149C15.6287 0.526464 15.3132 0.46844 14.9888 0.441945C14.6733 0.416165 14.2874 0.416748 13.8331 0.416748V1.91675ZM16.9868 1.73629C16.7549 1.28126 16.3847 0.911687 15.9303 0.680149L15.2493 2.01666C15.4221 2.1047 15.5625 2.2451 15.6503 2.41728L16.9868 1.73629ZM13.8333 13.5834C14.2877 13.5834 14.6735 13.584 14.989 13.5582C15.3133 13.5317 15.6287 13.4737 15.9303 13.32L15.2493 11.9835C15.1944 12.0115 15.0983 12.0443 14.8668 12.0632C14.6266 12.0828 14.3124 12.0834 13.8333 12.0834V13.5834ZM15.75 10.1667C15.75 10.6459 15.7495 10.9601 15.7299 11.2005C15.711 11.4321 15.6782 11.5281 15.6503 11.5829L16.9868 12.2639C17.1405 11.9622 17.1985 11.6466 17.2249 11.3224C17.2506 11.0069 17.25 10.621 17.25 10.1667H15.75ZM15.9303 13.32C16.3847 13.0885 16.7549 12.719 16.9868 12.2639L15.6503 11.5829C15.5626 11.755 15.4222 11.8954 15.2493 11.9835L15.9303 13.32ZM3.91667 12.8334C3.91667 11.4987 2.83469 10.4167 1.5 10.4167V11.9167C2.00626 11.9167 2.41667 12.3272 2.41667 12.8334H3.91667ZM6.41667 12.8334C6.41667 10.118 4.2154 7.91675 1.5 7.91675V9.41675C3.38697 9.41675 4.91667 10.9464 4.91667 12.8334H6.41667ZM8.91667 12.8334C8.91667 8.7373 5.59611 5.41675 1.5 5.41675V6.91675C4.76768 6.91675 7.41667 9.56573 7.41667 12.8334H8.91667Z"
                        fill="#282828"
                      />
                    </svg>
                    <p className="active__mobile--tab">Mô tả dự án</p>
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 12.0834C11.0858 12.0834 10.75 12.4192 10.75 12.8334C10.75 13.2476 11.0858 13.5834 11.5 13.5834V12.0834ZM13.8333 12.8334V13.5834V12.8334ZM16.5 10.1667H15.75H16.5ZM16.5 3.83337H17.25H16.5ZM2.94938 1.18101L3.04728 1.92459L3.04728 1.92459L2.94938 1.18101ZM0.75 3.11115C0.75 3.52536 1.08579 3.86115 1.5 3.86115C1.91421 3.86115 2.25 3.52536 2.25 3.11115H0.75ZM1.51426 2.61582L0.770675 2.51793V2.51793L1.51426 2.61582ZM16.3185 2.07678L16.9868 1.73629L16.3185 2.07678ZM15.5898 1.3484L15.9303 0.680149V0.680149L15.5898 1.3484ZM15.5898 12.6517L15.9303 13.32L15.5898 12.6517ZM16.3185 11.9234L16.9868 12.2639L16.3185 11.9234ZM2.41667 12.8334C2.41667 13.2476 2.75245 13.5834 3.16667 13.5834C3.58088 13.5834 3.91667 13.2476 3.91667 12.8334H2.41667ZM1.5 10.4167C1.08579 10.4167 0.75 10.7525 0.75 11.1667C0.75 11.581 1.08579 11.9167 1.5 11.9167V10.4167ZM4.91667 12.8334C4.91667 13.2476 5.25245 13.5834 5.66667 13.5834C6.08088 13.5834 6.41667 13.2476 6.41667 12.8334H4.91667ZM1.5 7.91675C1.08579 7.91675 0.75 8.25254 0.75 8.66675C0.75 9.08096 1.08579 9.41675 1.5 9.41675V7.91675ZM7.41667 12.8334C7.41667 13.2476 7.75245 13.5834 8.16667 13.5834C8.58088 13.5834 8.91667 13.2476 8.91667 12.8334H7.41667ZM1.5 5.41675C1.08579 5.41675 0.75 5.75253 0.75 6.16675C0.75 6.58096 1.08579 6.91675 1.5 6.91675V5.41675ZM11.5 13.5834H13.8333V12.0834H11.5V13.5834ZM17.25 10.1667V3.83337H15.75V10.1667H17.25ZM13.8331 0.416748H3.44417V1.91675H13.8331V0.416748ZM3.44417 0.416748C3.20994 0.416748 3.0208 0.415132 2.85149 0.437423L3.04728 1.92459C3.09457 1.91836 3.16239 1.91675 3.44417 1.91675V0.416748ZM2.25 3.11115C2.25 2.8293 2.25162 2.761 2.25784 2.71372L0.770675 2.51793C0.748383 2.68726 0.75 2.87697 0.75 3.11115H2.25ZM2.85149 0.437423C1.76724 0.580167 0.913469 1.4333 0.770675 2.51793L2.25784 2.71372C2.31197 2.30257 2.63575 1.97877 3.04728 1.92459L2.85149 0.437423ZM17.25 3.83337C17.25 3.37912 17.2506 2.99327 17.2249 2.67778C17.1985 2.35353 17.1405 2.03798 16.9868 1.73629L15.6503 2.41728C15.6782 2.47211 15.711 2.56814 15.7299 2.7997C15.7495 3.04003 15.75 3.35421 15.75 3.83337H17.25ZM13.8331 1.91675C14.3121 1.91675 14.6264 1.91733 14.8667 1.93696C15.0983 1.95588 15.1944 1.98869 15.2493 2.01666L15.9303 0.680149C15.6287 0.526464 15.3132 0.46844 14.9888 0.441945C14.6733 0.416165 14.2874 0.416748 13.8331 0.416748V1.91675ZM16.9868 1.73629C16.7549 1.28126 16.3847 0.911687 15.9303 0.680149L15.2493 2.01666C15.4221 2.1047 15.5625 2.2451 15.6503 2.41728L16.9868 1.73629ZM13.8333 13.5834C14.2877 13.5834 14.6735 13.584 14.989 13.5582C15.3133 13.5317 15.6287 13.4737 15.9303 13.32L15.2493 11.9835C15.1944 12.0115 15.0983 12.0443 14.8668 12.0632C14.6266 12.0828 14.3124 12.0834 13.8333 12.0834V13.5834ZM15.75 10.1667C15.75 10.6459 15.7495 10.9601 15.7299 11.2005C15.711 11.4321 15.6782 11.5281 15.6503 11.5829L16.9868 12.2639C17.1405 11.9622 17.1985 11.6466 17.2249 11.3224C17.2506 11.0069 17.25 10.621 17.25 10.1667H15.75ZM15.9303 13.32C16.3847 13.0885 16.7549 12.719 16.9868 12.2639L15.6503 11.5829C15.5626 11.755 15.4222 11.8954 15.2493 11.9835L15.9303 13.32ZM3.91667 12.8334C3.91667 11.4987 2.83469 10.4167 1.5 10.4167V11.9167C2.00626 11.9167 2.41667 12.3272 2.41667 12.8334H3.91667ZM6.41667 12.8334C6.41667 10.118 4.2154 7.91675 1.5 7.91675V9.41675C3.38697 9.41675 4.91667 10.9464 4.91667 12.8334H6.41667ZM8.91667 12.8334C8.91667 8.7373 5.59611 5.41675 1.5 5.41675V6.91675C4.76768 6.91675 7.41667 9.56573 7.41667 12.8334H8.91667Z"
                        fill="#939393"
                      />
                    </svg>
                    <p>Mô tả dự án</p>
                  </>
                )}
              </div>
              <div className="mobile__tab--result" onClick={handelResult}>
                {result ? (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3762 5.73851L8.06033 12.2614L4.62379 8.99992M4.83333 16.5H13.1667C15.0076 16.5 16.5 15.0076 16.5 13.1667V4.83333C16.5 2.99238 15.0076 1.5 13.1667 1.5H4.83333C2.99238 1.5 1.5 2.99238 1.5 4.83333V13.1667C1.5 15.0076 2.99238 16.5 4.83333 16.5Z"
                        stroke="#282828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="active__mobile--tab">Kết quả đạt được</p>
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3762 5.73851L8.06033 12.2614L4.62379 8.99992M4.83333 16.5H13.1667C15.0076 16.5 16.5 15.0076 16.5 13.1667V4.83333C16.5 2.99238 15.0076 1.5 13.1667 1.5H4.83333C2.99238 1.5 1.5 2.99238 1.5 4.83333V13.1667C1.5 15.0076 2.99238 16.5 4.83333 16.5Z"
                        stroke="#939393"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Kết quả đạt được</p>
                  </>
                )}
              </div>
              <div className="mobile__tab--more" onClick={handelMore}>
                {more ? (
                  <>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M10.5274 2.75122H3.75684C3.20455 2.75122 2.75684 3.19894 2.75684 3.75122V10.6509C2.75684 10.9193 2.86479 11.1765 3.0564 11.3646L9.55727 17.7445C10.3272 18.5001 11.5576 18.5089 12.3383 17.7645L17.8674 12.4926C18.6837 11.7142 18.6953 10.4151 17.8929 9.62236L11.2302 3.03985C11.0431 2.85492 10.7905 2.75122 10.5274 2.75122Z"
                          stroke="#282828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.58578 6.86784C7.58578 7.25801 7.26949 7.57431 6.87932 7.57431C6.48915 7.57431 6.17285 7.25801 6.17285 6.86784C6.17285 6.47767 6.48915 6.16138 6.87932 6.16138C7.26949 6.16138 7.58578 6.47767 7.58578 6.86784Z"
                          stroke="#282828"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                    <p className="active__mobile--tab">Dự án liên quan</p>
                  </>
                ) : (
                  <>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M10.5274 2.75122H3.75684C3.20455 2.75122 2.75684 3.19894 2.75684 3.75122V10.6509C2.75684 10.9193 2.86479 11.1765 3.0564 11.3646L9.55727 17.7445C10.3272 18.5001 11.5576 18.5089 12.3383 17.7645L17.8674 12.4926C18.6837 11.7142 18.6953 10.4151 17.8929 9.62236L11.2302 3.03985C11.0431 2.85492 10.7905 2.75122 10.5274 2.75122Z"
                          stroke="#939393"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.58578 6.86784C7.58578 7.25801 7.26949 7.57431 6.87932 7.57431C6.48915 7.57431 6.17285 7.25801 6.17285 6.86784C6.17285 6.47767 6.48915 6.16138 6.87932 6.16138C7.26949 6.16138 7.58578 6.47767 7.58578 6.86784Z"
                          stroke="#939393"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                    <p>Dự án liên quan</p>
                  </>
                )}
              </div>
            </div>

            {/*  */}

            {tab == 1 && (
              <div className="mobile__desc--project">
                <>
                  <div className="mobile__desc--overview">
                    <h4>tổng quan</h4>
                    <div className="overview__linh-vuc">
                      <div className="mobile__fields">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.82634 1.33325H3.55967C2.09967 1.33325 1.33301 2.09992 1.33301 3.55325V4.81992C1.33301 6.27325 2.09967 7.03992 3.55301 7.03992H4.81967C6.27301 7.03992 7.03967 6.27325 7.03967 4.81992V3.55325C7.04634 2.09992 6.27967 1.33325 4.82634 1.33325Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M12.4466 1.33325H11.18C9.72663 1.33325 8.95996 2.09992 8.95996 3.55325V4.81992C8.95996 6.27325 9.72663 7.03992 11.18 7.03992H12.4466C13.9 7.03992 14.6666 6.27325 14.6666 4.81992V3.55325C14.6666 2.09992 13.9 1.33325 12.4466 1.33325Z"
                            fill="#292D32"
                          />
                          <path
                            d="M12.4466 8.95337H11.18C9.72663 8.95337 8.95996 9.72004 8.95996 11.1734V12.44C8.95996 13.8934 9.72663 14.66 11.18 14.66H12.4466C13.9 14.66 14.6666 13.8934 14.6666 12.44V11.1734C14.6666 9.72004 13.9 8.95337 12.4466 8.95337Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M4.82634 8.95337H3.55967C2.09967 8.95337 1.33301 9.72004 1.33301 11.1734V12.44C1.33301 13.9 2.09967 14.6667 3.55301 14.6667H4.81967C6.27301 14.6667 7.03967 13.9 7.03967 12.4467V11.18C7.04634 9.72004 6.27967 8.95337 4.82634 8.95337Z"
                            fill="#292D32"
                          />
                        </svg>

                        <p>Lĩnh vực</p>
                      </div>
                      <div className="mobile__info">
                        <p>Thời trang</p>
                      </div>
                    </div>
                    <div className="overview__hang-muc">
                      <div className="mobile__fields">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9131 3.26008L9.00646 1.52008C8.43312 1.26674 7.56646 1.26674 6.99312 1.52008L3.08646 3.26008C2.09979 3.70008 1.95312 4.30008 1.95312 4.62008C1.95312 4.94008 2.09979 5.54008 3.08646 5.98008L6.99312 7.72008C7.27979 7.84675 7.63979 7.91341 7.99979 7.91341C8.35979 7.91341 8.71979 7.84675 9.00646 7.72008L12.9131 5.98008C13.8998 5.54008 14.0465 4.94008 14.0465 4.62008C14.0465 4.30008 13.9065 3.70008 12.9131 3.26008Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M8.00021 11.3599C7.74687 11.3599 7.49354 11.3066 7.26021 11.2066L2.76688 9.20659C2.08021 8.89992 1.54688 8.07992 1.54688 7.32659C1.54688 7.05325 1.76687 6.83325 2.04021 6.83325C2.31354 6.83325 2.53354 7.05325 2.53354 7.32659C2.53354 7.68659 2.83354 8.15325 3.16688 8.29992L7.66021 10.2999C7.87354 10.3933 8.12021 10.3933 8.33354 10.2999L12.8269 8.29992C13.1602 8.15325 13.4602 7.69325 13.4602 7.32659C13.4602 7.05325 13.6802 6.83325 13.9535 6.83325C14.2269 6.83325 14.4469 7.05325 14.4469 7.32659C14.4469 8.07325 13.9135 8.89992 13.2269 9.20659L8.73354 11.2066C8.50688 11.3066 8.25354 11.3599 8.00021 11.3599Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M8.00021 14.6666C7.74687 14.6666 7.49354 14.6132 7.26021 14.5132L2.76688 12.5132C2.02688 12.1866 1.54688 11.4466 1.54688 10.6332C1.54688 10.3599 1.76687 10.1399 2.04021 10.1399C2.31354 10.1399 2.53354 10.3599 2.53354 10.6332C2.53354 11.0532 2.78021 11.4332 3.16688 11.6066L7.66021 13.6066C7.87354 13.6999 8.12021 13.6999 8.33354 13.6066L12.8269 11.6066C13.2069 11.4399 13.4602 11.0532 13.4602 10.6332C13.4602 10.3599 13.6802 10.1399 13.9535 10.1399C14.2269 10.1399 14.4469 10.3599 14.4469 10.6332C14.4469 11.4466 13.9669 12.1799 13.2269 12.5132L8.73354 14.5132C8.50688 14.6132 8.25354 14.6666 8.00021 14.6666Z"
                            fill="#292D32"
                          />
                        </svg>

                        <p>Hạng mục</p>
                      </div>

                      <div className="mobile__info">
                        <p>
                          UI Design <span> / </span>UX Research
                        </p>
                      </div>
                    </div>
                    <div className="overview__thanh-vien">
                      <div className="mobile__fields">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M11.6867 5.17992C11.64 5.17325 11.5934 5.17325 11.5467 5.17992C10.5134 5.14659 9.69336 4.29992 9.69336 3.25992C9.69336 2.19992 10.5534 1.33325 11.62 1.33325C12.68 1.33325 13.5467 2.19325 13.5467 3.25992C13.54 4.29992 12.72 5.14659 11.6867 5.17992Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M13.8597 9.80002C13.1131 10.3 12.0664 10.4867 11.0997 10.36C11.3531 9.81335 11.4864 9.20669 11.4931 8.56669C11.4931 7.90002 11.3464 7.26669 11.0664 6.71336C12.0531 6.58003 13.0997 6.76668 13.8531 7.26668C14.9064 7.96002 14.9064 9.10002 13.8597 9.80002Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M4.29359 5.17992C4.34026 5.17325 4.38693 5.17325 4.43359 5.17992C5.46693 5.14659 6.28693 4.29992 6.28693 3.25992C6.28693 2.19992 5.42693 1.33325 4.36026 1.33325C3.30026 1.33325 2.43359 2.19325 2.43359 3.25992C2.44026 4.29992 3.26026 5.14659 4.29359 5.17992Z"
                            fill="#292D32"
                          />
                          <path
                            opacity="0.4"
                            d="M4.36674 8.56658C4.36674 9.21324 4.50674 9.82658 4.76008 10.3799C3.82008 10.4799 2.84008 10.2799 2.12008 9.80658C1.06674 9.10658 1.06674 7.96657 2.12008 7.26657C2.83341 6.78657 3.84008 6.59324 4.78674 6.69991C4.51341 7.25991 4.36674 7.89324 4.36674 8.56658Z"
                            fill="#292D32"
                          />
                          <path
                            d="M8.0802 10.58C8.02686 10.5733 7.96686 10.5733 7.90686 10.58C6.6802 10.54 5.7002 9.53333 5.7002 8.29333C5.7002 7.02667 6.7202 6 7.99353 6C9.2602 6 10.2869 7.02667 10.2869 8.29333C10.2869 9.53333 9.31353 10.54 8.0802 10.58Z"
                            fill="#292D32"
                          />
                          <path
                            d="M5.9132 11.96C4.90654 12.6333 4.90654 13.74 5.9132 14.4067C7.05987 15.1733 8.93987 15.1733 10.0865 14.4067C11.0932 13.7333 11.0932 12.6267 10.0865 11.96C8.94654 11.1933 7.06654 11.1933 5.9132 11.96Z"
                            fill="#292D32"
                          />
                        </svg>

                        <p>Thành viên</p>
                      </div>
                      <div className="mobile__info">
                        <p>
                          Trang Nguyễn <span> / </span>Loan Hoàng
                          <span> / </span> Tiến Dũng
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mobile__desc--prev-issue">
                    <h4>Vấn dề trước đây</h4>
                    <p>
                      Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và
                      thương mại. Gumac đã quyết định làm lại khi website cũ có
                      những vấn đề như:
                    </p>
                    {dataPrevProblemMobile.map((item, index) => (
                      <div key={index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mobile__desc--conect">
                    <h4>gumac - okhub</h4>
                    <div className="desc__conect--head">
                      Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và
                      thương mại. Gumac đã quyết định làm lại khi website cũ có
                      những vấn đề như:
                    </div>
                    <div className="desc__conect--img">
                      <div>
                        <Image src={descConectImg} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="desc__conect--foot">
                    <div className="conect__foot--content">
                      Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OKHUB
                      Việt Nam. GUMAC xin ghi nhận những nỗ lực đó và chúc các
                      bạn luôn thành công
                      <div className="content__tag-1">
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.21437 11.9485C1.279 10.8971 0.717773 9.75 0.717773 7.83824C0.717773 4.49265 3.0562 1.52941 6.32999 0L7.17183 1.24265C4.08511 2.96324 3.43035 5.16177 3.24327 6.59559C3.71096 6.30882 4.36572 6.21324 5.02048 6.30882C6.70414 6.5 8.01366 7.83824 8.01366 9.65441C8.01366 10.5147 7.63951 11.375 7.07829 12.0441C6.42353 12.7132 5.67524 13 4.73987 13C3.71096 13 2.77559 12.5221 2.21437 11.9485ZM11.5681 11.9485C10.6327 10.8971 10.0715 9.75 10.0715 7.83824C10.0715 4.49265 12.4099 1.52941 15.6837 0L16.5255 1.24265C13.4388 2.96324 12.784 5.16177 12.597 6.59559C13.0647 6.30882 13.7194 6.21324 14.3742 6.30882C16.0578 6.5 17.3674 7.83824 17.3674 9.65441C17.3674 10.5147 16.9932 11.375 16.432 12.0441C15.8708 12.7132 15.0289 13 14.0936 13C13.0647 13 12.1293 12.5221 11.5681 11.9485Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="content__tag-2">
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6343 1.05147C16.5696 2.10294 17.1309 3.25 17.1309 5.16176C17.1309 8.50735 14.7924 11.4706 11.5186 13L10.6768 11.7574C13.7635 10.0368 14.4183 7.83823 14.6054 6.40441C14.1377 6.69118 13.4829 6.78676 12.8282 6.69118C11.1445 6.5 9.83497 5.16176 9.83497 3.34559C9.83497 2.48529 10.2091 1.625 10.7703 0.955884C11.4251 0.286766 12.1734 4.36729e-07 13.1088 3.54327e-07C14.1377 2.63685e-07 15.073 0.47794 15.6343 1.05147ZM6.28056 1.05147C7.21593 2.10294 7.77716 3.25 7.77716 5.16177C7.77716 8.50735 5.43873 11.4706 2.16494 13L1.3231 11.7574C4.40983 10.0368 5.06458 7.83824 5.25166 6.40441C4.78397 6.69118 4.12921 6.78677 3.47445 6.69118C1.79079 6.5 0.481271 5.16177 0.481271 3.34559C0.481271 2.48529 0.855418 1.625 1.41664 0.955884C1.97786 0.286766 2.8197 1.26075e-06 3.75507 1.17834e-06C4.78397 1.0877e-06 5.71934 0.477941 6.28056 1.05147Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="conect__foot--user">
                      <p className="user__name">Mrs. Nguyễn Yến</p>
                      <div>
                        <p className="user__position">
                          <span>cmo</span> thời trang
                        </p>
                        <p className="user__cpn">gumac</p>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            )}

            {tab == 2 && <div className="mobile__result--project"></div>}

            {tab == 3 &&
              dataProjectSpecial.map(
                (item, index) => (
                  <ProjectPost
                    key={item.id}
                    // logo = {item.logo}
                    projectName={item.projectName}
                    hastags={item.hastags}
                    // imgProject = {item.imgProject}
                    amountLike={item.amountLike}
                    amountShare={item.amountShare}
                    desc={item.desc}
                  />
                ))}


                {
                  tab == 3 && (
                    <div className="btn_all-project">
                <ButtonMobile text="Xem tất cả dự án" />
              </div>
                  )
                }
          </div>
        </div>
      )}
    </>
  );
}
