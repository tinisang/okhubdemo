import { Button } from "../../components/Button/Button";
import Image from "next/image";
import { ButtonCategory } from "../../components/Button/ButtonCategory";
import peojectOrderDisplayListBtn from "../../public/imgs/peojectOrderDisplayListBtn.png";
import peojectOrderDisplayGridBtn from "../../public/imgs/peojectOrderDisplayGridBtn.png";
import { CardProject } from "../../components/CardProject";
import { NumberPage } from "../../components/NumberPage";
import { useState } from "react";
import { ListProject } from "../../components/ListProject";

import gsap from "gsap";
import { useEffect, useRef } from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export default function Projects() {
  const [display, setDisplay] = useState(false);
  const currentCategory = useRef(0)

  const handleCatSelect=(index)=>{
    var PrevselectedContent = document.querySelector(`.project__categories--item button:nth-child(${currentCategory.current +1})`)
    var selectedContent = document.querySelector(`.project__categories--item button:nth-child(${index+1})`)

    var offsetX = window.innerWidth/2 - selectedContent.clientWidth/2;


    PrevselectedContent.classList.remove('active')
    selectedContent.classList.add('active')
    gsap.to('.project__categories--item',{
      scrollTo:{
        x: selectedContent,
        offsetX: offsetX
      },
      duration:1,
      ease:'easeOut'
    })

    currentCategory.current= index
 
    
    
  }

  gsap.registerPlugin(ScrollToPlugin);


  return (
    <div className="project__container">
      <div className="project__header">
        <Button text="Credential" />
        <div className="project__header--text">
          <p>
            Với mỗi dự án<br></br> là sự đảm <span>bảo</span> <br></br> về{" "}
            <span>sản phẩm {`&`} dịch vụ</span>
          </p>
        </div>
      </div>
      <div className="project__categories">
        <div className="project__categories--title">
          <div className="project__categories--title-text">
            <p>Đa dạng lĩnh vực</p>
            <div className="project__categories--title-bg">
              <p>Our Projects</p>
            </div>
          </div>
          <div className="project__categories--item">
            <ButtonCategory category="Mỹ phẩm"  onClick={()=>{handleCatSelect(0)}} />
            <ButtonCategory category="Tài chính"  onClick={()=>{handleCatSelect(1)}} />
            <ButtonCategory category="Tất cả dự án" onClick={()=>{handleCatSelect(2)}} />
            <ButtonCategory category="Nội thất - kiến trúc"  onClick={()=>{handleCatSelect(3)}} />
            <ButtonCategory category="Xây dựng"  onClick={()=>{handleCatSelect(4)}} />
            <ButtonCategory category="Du lịch"  onClick={()=>{handleCatSelect(5)}} />
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(6)}} />
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(7)}} />
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(8)}} />
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(9)}} />
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(10)}}/>
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(11)}}/>
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(12)}}/>
            <ButtonCategory category="Bất động sản"  onClick={()=>{handleCatSelect(13)}}/>
          </div>
        </div>
      </div>
      <div className="project__order">
        <div className="project__order--select">
          <p>Sắp xếp theo: </p>
        </div>
        <div className="project__order--display">
          <div className="project__order--display-list">
            <Image
              src={peojectOrderDisplayListBtn}
              alt=""
              onClick={() => setDisplay(false)}
            />
          </div>
          <div className="project__order--display-grid">
            <Image
              src={peojectOrderDisplayGridBtn}
              alt=""
              onClick={() => setDisplay(true)}
            />
          </div>
        </div>
      </div>
      {display ? (
        <div className="project__grid">
          <CardProject
            title="Website Coteccons"
            toDo={`Interaction & Development`}
            category="Thời trang"
          />
          <CardProject
            title="Website Coteccons"
            toDo={`Interaction & Development`}
            category="Thời trang"
          />
          <CardProject
            title="Website Coteccons"
            toDo={`Interaction & Development`}
            category="Thời trang"
          />
          <CardProject
            title="Website Coteccons"
            toDo={`Interaction & Development`}
            category="Thời trang"
          />
          <CardProject
            title="Website Coteccons"
            toDo={`Interaction & Development`}
            category="Thời trang"
          />
          <CardProject
            title="Website Coteccons"
            toDo={`Interaction & Development`}
            category="Thời trang"
          />
        </div>
      ) : (
        <div className="project__list">
          <div className="project__list--header">
            <div className="project__list--header-NO">
              <p>NO.</p>
            </div>
            <div className="project__list--header-name-project">
              <p>TÊN DỰ ÁN</p>
            </div>
            <div className="project__list--header-to-do">
              <p>HẠNG MỤC</p>
            </div>
            <div className="project__list--header-categories">
              <p>LĨNH VỰC/NGÀNH HÀNG</p>
            </div>
          </div>
          <ListProject
            id="01"
            name="Thời trang GUMAC"
            toDoData={["UI/UX Design", "Dev"]}
            category="Thời trang"
          />
          <ListProject
            id="02"
            name="Thời trang trẻ em BaaBaby"
            toDoData={["UI/UX Design", "Dev"]}
            category="Thời trang"
          />
          <ListProject
            id="03"
            name="Website Coteccons"
            toDoData={["Frontend dev", "Backend dev"]}
            category="Thời trang"
          />
          <ListProject
            id="04"
            name="Kính mắt ANNA"
            toDoData={["UI/UX Design", "Dev"]}
            category="Thời trang"
          />
          <ListProject
            id="05"
            name="Website Men.Ology"
            toDoData={["UI Design", "UX research"]}
            category="Thời trang"
          />
        </div>
      )}
      <div className="project__number--page">
        <NumberPage number="1" active={true} />
        <NumberPage number="2"  />
        <NumberPage number="3"  />
        <NumberPage number="4"  />
        <NumberPage number="5"  />
      </div>
    </div>
  );
}
