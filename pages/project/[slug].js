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
import logoMobile from "../../public/imgs/logoMobileProjectDetail.png"
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
            <Image src = {logoMobile} alt = ""/>
          </div>
          <div className="mobile__body">
                  <div className="mobile__hastag">
                    #
                    <span>thoitrang   </span>
                    #
                    <span>duantieubieu</span>
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
                    <Link target = "_blank" href = "https://gumac.vn">
                            <button className="mobile__btn--liveSitte">
                              <p>Live site</p>
                              <p>https://gumac.vn</p>
                            </button>
                    </Link>
                    <Link href = "https://gumac.vn">
                      <button className="mobile__btn--tuVan">Tư vấn</button>
                    </Link>
                  </div>
          </div>
        </div>
      )}
    </>
  );
}
