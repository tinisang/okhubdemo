import React, { useState, useRef, useEffect } from "react";
import { Button } from "../Button/Button";
import {CardNews} from "../CardNews";
import {CardReport} from "../CardReport"
import { NumberPage } from "../NumberPage";
// import Select from "react-select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";

import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


export const News = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const [activeBtn, setActive] = useState(false);
  const lastCurrent = useRef(0)
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
  ];
  const [score, setScore] = useState("");
  const scoreData = ["Tat ca", "nhieu luot xem nhat"];
  const handelChange = (event) => {
   
  };




  useEffect(()=>{
    const slider = document.querySelector('.news__categories--items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) *1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
  
});
  })
  useEffect(()=>{
    handleCatSelect(0)
  },[])

  useEffect(()=>{
    var tl = gsap.timeline({
      scrollTrigger:{
          trigger:'.news__title',
          // markers:true,
          start:'top 0%',
          end:'bottom 0%',
          scrub:4,
          pin:'.news__title'
      },
      ease:'easeInOut'
    });

    tl.to('.clone-text',{
      width:"100%",
      stagger:0.4
    })

   



    return ()=>{
      tl.scrollTrigger.kill()
     
    }
    
  },[])
  
  const handleCatSelect = (index)=>{
      var selectedCat = document.querySelector(`.news__categories--items p.news__categories--item:nth-child(${index+1})`)
     
     
        var lastActive =document.querySelector(`.news__categories--items p.news__categories--item:nth-child(${lastCurrent.current+1})`)
        lastActive.classList.remove('news__categories--item-active')
      
      lastCurrent.current=index
      selectedCat.classList.add('news__categories--item-active')
      gsap.to('.news__categories--items',{
        scrollTo:{
          x: selectedCat
        }
      })
  }
  
  
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
            các {" "}
            <span className="animation-text">
              <span className="main-text">
                  hoạt động nổi bật
              </span>
              <span className="clone-text">
              hoạt động nổi bật
              </span>
            </span> 
            <br></br> về{" "}
            

            <span className="animation-text">
              <span className="main-text">
              tài liệu - báo cáo
              </span>
              <span className="clone-text">
              tài liệu - báo cáo
              </span>
            </span> 
          </p>
        </div>
      </div>
      <div className="news__categories">
        <div className="news__categories--title">
          <p>Khám phá ngay</p>
        </div>
        <div className="news__categories--items">
          <p className="news__categories--item " onClick={()=>handleCatSelect(0)}>Tất cả bài viết</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(1)}>Báo cáo</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(2)}>Tài liệu</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(3)}>Thông báo</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(4)}>Media</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(5)}>Content</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(6)}>Xu hướng</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(7)}>Đặc biệt</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(8)}>Trending</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(9)}>Viết lách</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(10)}>Điện ảnh</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(11)}>Xây dựng</p>
          <p className="news__categories--item " onClick={()=>handleCatSelect(12)}>Tất cả bài viết</p>

          
        
        </div>
      </div>

      <div className="news__selector">
        <div className="news__selector--order">
          <p>Sắp xếp theo: </p>
          <FormControl sx={{ width: 343 }}>
            <Select
              label="custom-select-label"
              id="custom-select"
              value="hello"
              onChange={handelChange}
            >
              {scoreData.map((scoreValue, index) => {
                return <MenuItem key = {index} value={scoreValue}>{scoreValue}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div className="news__selector--fileds">
          <p>Theo lĩnh vực: </p>
          <Select
            className="basic-single"
            
            defaultValue="default"
            name="color"
            options={options}
          />
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
                    <CardNews/>
              </div>
              <div className = "news__status__item">
                <CardNews/>
                <CardNews/>
                <CardNews/>
                <CardNews/>
              </div>
            </div>

            <div className="news__status--item-btn">
              <NumberPage number = "1" active = {true}/>
              <NumberPage number = "2" active = {false}/>
              <NumberPage number = "3" active = {false}/>
              <NumberPage number = "4" active = {false}/>
              <NumberPage number = "5" active = {false}/>

            </div>
          </div>
        </div>
        {/* ======= */}
        <div className="news__documents">
          <div className="news__documents-text"><p>Tài liệu - Báo cáo</p></div>
          <div className="news__document--items">
            <CardReport/>
            <CardReport/>
            <CardReport/>
            <CardReport/>
            <CardReport/>
          </div>
        </div>
      </div>
    </div>
  );
};
