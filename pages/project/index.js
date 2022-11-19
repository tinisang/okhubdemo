import { Button } from "../../components/Button/Button";
import Image from "next/image";
import { ButtonCategory } from "../../components/Button/ButtonCategory";
import peojectOrderDisplayListBtn from "../../public/imgs/peojectOrderDisplayListBtn.png";
import peojectOrderDisplayGridBtn from "../../public/imgs/peojectOrderDisplayGridBtn.png";
import { CardProject } from "../../components/CardProject";
import { NumberPage } from "../../components/NumberPage";
import { use, useState } from "react";
import { ListProject } from "../../components/ListProject";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export default function Projects() {
  const [display, setDisplay] = useState(false);
  const [fillGrid, setFillGrid] = useState('none');
  const [strokeGrid, setStrokeGrid] = useState('#292D32');
  const [fillList, setFillList] = useState('none');
  const [strokeList, setStrokeList] = useState('#000000');

  const currentCategory = useRef(0);
  const handelDisplayGrid = () => {
    setDisplay(true);
    setFillGrid('black');
    setStrokeGrid("white");
    setFillList('none');
    setStrokeList("#000000");

  }

  const handelDisplayList = () => {
    setDisplay(false);
    setFillGrid('none');
    setStrokeGrid("#292D32");
    setFillList('black');
    setStrokeList("white");
  }
    
  

  const handleCatSelect = (index) => {
    var PrevselectedContent = document.querySelector(
      `.project__categories--item button:nth-child(${
        currentCategory.current + 1
      })`
    );
    var selectedContent = document.querySelector(
      `.project__categories--item button:nth-child(${index + 1})`
    );

    var offsetX = window.innerWidth / 2 - selectedContent.clientWidth / 2;

    PrevselectedContent.classList.remove("active");
    selectedContent.classList.add("active");
    gsap.to(".project__categories--item", {
      scrollTo: {
        x: selectedContent,
        offsetX: offsetX,
      },
      duration: 1,
      ease: "easeOut",
    });

    currentCategory.current = index;
  };

  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className="project__container">
      <div className="project__header">
        <Button text="Credential" />
        <div className="project__header--text" dangerouslySetInnerHTML={{}}>
          <p>
            Với mỗi dự án<br></br> là <span>sự đảm bảo</span> <br></br> về{" "}
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
            <ButtonCategory
              category="Mỹ phẩm"
              onClick={() => {
                handleCatSelect(0);
              }}
            />
            <ButtonCategory
              category="Tài chính"
              onClick={() => {
                handleCatSelect(1);
              }}
            />
            <ButtonCategory
              category="Tất cả dự án"
              onClick={() => {
                handleCatSelect(2);
              }}
            />
            <ButtonCategory
              category="Nội thất - kiến trúc"
              onClick={() => {
                handleCatSelect(3);
              }}
            />
            <ButtonCategory
              category="Xây dựng"
              onClick={() => {
                handleCatSelect(4);
              }}
            />
            <ButtonCategory
              category="Du lịch"
              onClick={() => {
                handleCatSelect(5);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(6);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(7);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(8);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(9);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(10);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(11);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(12);
              }}
            />
            <ButtonCategory
              category="Bất động sản"
              onClick={() => {
                handleCatSelect(13);
              }}
            />
          </div>
        </div>
      </div>
      <div className="project__order">
        <div className="project__order--select">
          <p>Sắp xếp theo: </p>
        </div>
        <div className="project__order--display">
          <div className="project__order--display-list">
            <svg
              onClick={handelDisplayList}
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40.5" cy="40.5" r="40.5" fill={fillList} stroke = "#D9D9D9"
              />
              <path
                d="M28.05 33.45H52.35"
                stroke={strokeList}
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M28.05 40.2H52.35"
                stroke={strokeList}
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M28.05 46.95H52.35"
                stroke={strokeList}
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

           
          </div>
          <div className="project__order--display-grid">
            <svg
              
              onClick={ handelDisplayGrid}
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40.5" cy="40.5" r="40" stroke="#D9D9D9" fill = {fillGrid} />
              <path
                d="M30.75 37.5H33.45C36.15 37.5 37.5 36.15 37.5 33.45V30.75C37.5 28.05 36.15 26.7 33.45 26.7H30.75C28.05 26.7 26.7 28.05 26.7 30.75V33.45C26.7 36.15 28.05 37.5 30.75 37.5Z"
                stroke={strokeGrid}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M46.9499 37.5H49.6499C52.3499 37.5 53.6999 36.15 53.6999 33.45V30.75C53.6999 28.05 52.3499 26.7 49.6499 26.7H46.9499C44.2499 26.7 42.8999 28.05 42.8999 30.75V33.45C42.8999 36.15 44.2499 37.5 46.9499 37.5Z"
                stroke={strokeGrid}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M46.9499 53.6999H49.6499C52.3499 53.6999 53.6999 52.3499 53.6999 49.6499V46.9499C53.6999 44.2499 52.3499 42.8999 49.6499 42.8999H46.9499C44.2499 42.8999 42.8999 44.2499 42.8999 46.9499V49.6499C42.8999 52.3499 44.2499 53.6999 46.9499 53.6999Z"
                stroke={strokeGrid}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.75 53.6999H33.45C36.15 53.6999 37.5 52.3499 37.5 49.6499V46.9499C37.5 44.2499 36.15 42.8999 33.45 42.8999H30.75C28.05 42.8999 26.7 44.2499 26.7 46.9499V49.6499C26.7 52.3499 28.05 53.6999 30.75 53.6999Z"
                stroke={strokeGrid}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
        <NumberPage number="2" />
        <NumberPage number="3" />
        <NumberPage number="4" />
        <NumberPage number="5" />
      </div>
    </div>
  );
}
