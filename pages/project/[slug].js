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
import logoMobile from "../../public/imgs/logoMobileProjectDetail.png";
export default function SingleProject() {
  // ScrollTrigger.refresh()
  const { scroll: locoScroll } = useLocomotiveScroll();
  useEffect(() => {
    // ScrollTrigger.addEventListener("refresh", () => locoScroll?.update());
    ScrollTrigger.refresh();
  });
  const [isMobile, setIsMobile] = useState();
  const size = window.innerWidth;
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
  }, [size]);

  // Mobile

  const [desc, setDesc] = useState();
  const [result, setResult] = useState();
  const [more, setMore] = useState();
  let tab = 0;
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
      <BackgroundHeader />
      {isMobile == false ? (
        <div className="">
          <TheProblem />
          <WhyOKHUB />
          <ExpandingLogo />
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
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.9163 22.9168L20.833 20.8335"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.2502 2.55V0.75H6.4502"
                        stroke="white"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.125 0.75H3.375C1.5 0.75 0.75 1.5 0.75 3.375V5.625C0.75 7.5 1.5 8.25 3.375 8.25H5.625C7.5 8.25 8.25 7.5 8.25 5.625V4.875"
                        stroke="white"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                {
                  desc == true ? <>
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
                  :  
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
                <p >Mô tả dự án</p></>
                }
              </div>
              <div className="mobile__tab--result" onClick={handelResult}>
               {
                 result ? 
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="active__mobile--tab">Kết quả đạt được</p>
                 </>
                 :
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Kết quả đạt được</p>
                 </>
               }
              </div> 
              <div className="mobile__tab--more" onClick={handelMore}>
               {
                 more ? 
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.58578 6.86784C7.58578 7.25801 7.26949 7.57431 6.87932 7.57431C6.48915 7.57431 6.17285 7.25801 6.17285 6.86784C6.17285 6.47767 6.48915 6.16138 6.87932 6.16138C7.26949 6.16138 7.58578 6.47767 7.58578 6.86784Z"
                      stroke="#282828"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
                <p className="active__mobile--tab">Dự án liên quan</p>
                 </> 
                 : 
                 <>
                  <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity= "0.5">
                    <path
                      d="M10.5274 2.75122H3.75684C3.20455 2.75122 2.75684 3.19894 2.75684 3.75122V10.6509C2.75684 10.9193 2.86479 11.1765 3.0564 11.3646L9.55727 17.7445C10.3272 18.5001 11.5576 18.5089 12.3383 17.7645L17.8674 12.4926C18.6837 11.7142 18.6953 10.4151 17.8929 9.62236L11.2302 3.03985C11.0431 2.85492 10.7905 2.75122 10.5274 2.75122Z"
                      stroke="#939393"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.58578 6.86784C7.58578 7.25801 7.26949 7.57431 6.87932 7.57431C6.48915 7.57431 6.17285 7.25801 6.17285 6.86784C6.17285 6.47767 6.48915 6.16138 6.87932 6.16138C7.26949 6.16138 7.58578 6.47767 7.58578 6.86784Z"
                      stroke="#939393"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
                <p>Dự án liên quan</p>
                </>
               }
              </div>
            </div>



            {/*  */}

            {
              tab == 1 && (
                <div className="mobile__desc--project">
                   <div className="mobile__desc--overview"></div>
                <div className="mobile__desc--prev-issue"></div>
                <div className="mobile__desc--conect"></div>


                </div>
              )
            }
          </div>
        </div>
      )}
    </>
  );
}
