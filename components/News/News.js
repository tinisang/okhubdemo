import React, { useState, useRef, useEffect } from "react";
import { Button } from "../Button/Button";
import { CardNews } from "../CardNews";
import { CardReport } from "../CardReport";
import { NumberPage } from "../NumberPage";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export const News = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const [activeBtn, setActive] = useState(false);
  const lastCurrent = useRef(0);
  const optionsSort = ["Mới nhất", "Nhiều lượt xem nhất"];
  const optionsFildes = [
    "Tất cả lĩnh vực",
    "Thời trang",
    "Mỹ phẩm",
    "Bất động sản",
    "Kiến trúc - nội thất",
    "Khác...",
  ];
  const [score, setScore] = useState("");
  const scoreData = ["Tat ca", "nhieu luot xem nhat"];
  const handelChange = (event) => {};

  useEffect(() => {
    const slider = document.querySelector(".news__categories--items");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  });
  useEffect(() => {
    handleCatSelect(0);
  }, []);
  const { scroll: locoScroll } = useLocomotiveScroll()
    if (locoScroll){

        locoScroll.on("scroll", function(){
              ScrollTrigger.update()
           
        
            });
    
          // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            ScrollTrigger.scrollerProxy('[data-scroll-container]', {
              scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
              }, // we don't have to define a scrollLeft because we're only scrolling vertically.
              getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              },
              // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
              pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
            });
            ScrollTrigger.defaults({scroller: '[data-scroll-container]'})
        }
        if (locoScroll){

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
        }
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".news__title",
        
        start: "top 0%",
        end: "bottom 0%",
        scrub: 4,
        pin: ".news__title",
      },
      ease: "easeInOut",
    });

    tl.to(".clone-text", {
      width: "100%",
      stagger: 0.4,
    });
    if (locoScroll){

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  const handleCatSelect = (index) => {
    var selectedCat = document.querySelector(
      `.news__categories--items p.news__categories--item:nth-child(${
        index + 1
      })`
    );

    var lastActive = document.querySelector(
      `.news__categories--items p.news__categories--item:nth-child(${
        lastCurrent.current + 1
      })`
    );
    lastActive.classList.remove("news__categories--item-active");

    lastCurrent.current = index;
    selectedCat.classList.add("news__categories--item-active");
    gsap.to(".news__categories--items", {
      scrollTo: {
        x: selectedCat,
      },
    });
  };

  return (
    <div className="news__container">
      <div className="container-padding news__title">
        <div className="news__title-btn">
          <Button text="Credential" />
        </div>
        <div className="news__title-text">
          <p>
            <span>Tin tức sự kiện </span>
            <br></br>
            các{" "}
            <span className="animation-text">
              <span className="main-text">hoạt động nổi bật</span>
              <span className="clone-text">hoạt động nổi bật</span>
            </span>
            <br></br> về{" "}
            <span className="animation-text">
              <span className="main-text">tài liệu - báo cáo</span>
              <span className="clone-text">tài liệu - báo cáo</span>
            </span>
          </p>
        </div>
      </div>
      <div className="news__categories">
        <div className="news__categories--title">
          <p>Khám phá ngay</p>
        </div>
        <div className="news__categories--items">
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(0)}
          >
            Tất cả bài viết
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(1)}
          >
            Báo cáo
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(2)}
          >
            Tài liệu
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(3)}
          >
            Thông báo
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(4)}
          >
            Media
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(5)}
          >
            Content
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(6)}
          >
            Xu hướng
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(7)}
          >
            Đặc biệt
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(8)}
          >
            Trending
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(9)}
          >
            Viết lách
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(10)}
          >
            Điện ảnh
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(11)}
          >
            Xây dựng
          </p>
          <p
            className="news__categories--item "
            onClick={() => handleCatSelect(12)}
          >
            Tất cả bài viết
          </p>
        </div>
      </div>

      <div className="news__selector">
        <div className="news__selector--order">
          <p>Sắp xếp theo: </p>
          <Dropdown
            placeholder="Mới nhất"
            options={optionsSort}
            // value={" mcsjjs"}
          />
        </div>
        <div className="news__selector--fileds">
          <p>Theo lĩnh vực: </p>
          <div className="drop-down__wrapp">
            <Dropdown
              placeholder="Tất cả lĩnh vực"
              options={optionsFildes}
              // value={" mcsjjs"}
            />
          </div>
        </div>
      </div>
      <div className="news__primary">
        <div className="news__status">
          <div className="news__status--items">
            <div className="news__status--items-text">
              <p>Bài viết</p>
            </div>
            <div className="news__status--items">
              <div className="news__status__item-other">
                <CardNews />
              </div>
              <div className="news__status__item">
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
              </div>
            </div>

            <div className="news__status--item-btn">
              <NumberPage number="1" active={true} />
              <NumberPage number="2" active={false} />
              <NumberPage number="3" active={false} />
              <NumberPage number="4" active={false} />
              <NumberPage number="5" active={false} />
            </div>
          </div>
        </div>
        {/* ======= */}
        <div className="news__documents">
          <div className="news__documents-text">
            <p>Tài liệu - Báo cáo</p>
          </div>
          <div className="news__document--items">
            <CardReport />
            <CardReport />
            <CardReport />
            <CardReport />
            <CardReport />
          </div>
        </div>
      </div>
    </div>
  );
};
