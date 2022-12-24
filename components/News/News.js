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
import { Item } from "semantic-ui-react";
import { useRouter } from "next/router";
import { getFilterNews } from "../../api store/news";

export const News = ({allPostCategories, allInitialPosts, totalPost, allDocuments}) => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const {scroll : locoScroll} = useLocomotiveScroll();
  const router = useRouter()
  const lastCurrent = useRef(0);
  const optionsSort = ["Mới nhất", "Nhiều lượt xem nhất"];
  const [postLength, setPostLength] = useState(totalPost)

  const [page, setPage] = useState(1)

  const postPerPage = 5
  const pageCount = Math.ceil(postLength/postPerPage);




  var pagination=[]



  if (pageCount > 1) {
    
    for (let index = 0; index < pageCount; index++) {
      var active = index ==page-1;
      if ((index > 3 && index <pageCount-3 && index!=page-1) && (index< page-3  || index> page +2) ){
        pagination.push('...')
      } else{

        pagination.push(<NumberPage key={index} number={`${index+1}`} active={active} handlePagination={()=>{handlePagination(index)}}  />)
      }
      
    }

    const first =pagination.indexOf('...')
    const last= pagination.lastIndexOf('...')
    var maintain= [first,last];

  
    
    pagination=pagination.filter((value,index,arr) => ((value=='...' && maintain.includes(index)) || value!='...') )

    
    
  }




  const [postArray, setPostArray] = useState(allInitialPosts)
  
  const optionsFildes = [
    "Tất cả lĩnh vực",
    "Thời trang",
    "Mỹ phẩm",
    "Bất động sản",
    "Kiến trúc - nội thất",
    "Khác...",
  ];
  
  async function getNewsByCategory(catId){
    const res = await getFilterNews(postPerPage, catId);
    setPostArray(res?.data?.data?.posts?.nodes || null)
    setPostLength(res?.data?.data?.posts?.pageInfo?.offsetPagination?.total)
    setPage(1)
    document.querySelector('.news__status--items')?.classList?.remove('isLoading')
  }
  useEffect(()=>{
    var catId = (router.query.category == '' ? null : router.query.category)

    getNewsByCategory(catId)

    
  },[router.query.category])

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

    // if (!router.query.category ){
    //   handleCatSelect(0);
    // } else {}
    
  }, []);

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


    ScrollTrigger.refresh();
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill()
    };

  });

  const handleCatSelect = (index, catId) => {
    document.querySelector('.news__status--items').classList.add('isLoading')
    
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
    router.push({
      pathname:'/news',
      query:{
        category: catId
      },
      
    },{shallow: true})
  };
  
  const handlePagination= (index)=>{

    document.querySelector('.news__status--items').classList.add('isLoading')
    paginate(index)
  }
  
  const paginate=(index)=>{
    var catId = (router.query.category == '' ? null : router.query.category)

    async function paginatePost(){
      const res = await getFilterNews(postPerPage, catId, postPerPage*index);
      document.querySelector('.news__status--items').classList.remove('isLoading')

      setPostArray(res?.data?.data?.posts?.nodes)
      setPostLength(res?.data?.data?.posts?.pageInfo?.offsetPagination?.total)
      setPage(index+1)
      
      
    }
    paginatePost()

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

        {
          allPostCategories.length > 0 && allPostCategories.map((value, index)=>{
            return(
            <p
              key={index}
              className="news__categories--item "
              onClick={() => handleCatSelect(index + 1, value.node.categoryId)}
            >
              {
                value.node.name
              }
              <span className="post_count">{value.node.count}</span>
            </p>

            )
          })
        }
         
        
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
            {
              postArray.length>0 && 
                
              <div className="news__status__item-other">
                <CardNews postData = {allInitialPosts[0]} />
              </div>
              
            }
              <div className="news__status__item">
                {
                  postArray.length >1 && 
                    postArray.map((item, index)=>{
                      if (index==0){
                        return ''
                      } else {
                        return (

                        <CardNews key={index} postData={item} />
                        )
                      }
                    })
                  
                }
                
              </div>
            </div>

            <div className="news__status--item-btn">
              {pagination}
            </div>
          </div>
        </div>
        {/* ======= */}
        <div className="news__documents">
          <div className="news__documents-text">
            <p>Tài liệu - Báo cáo</p>
          </div>
          <div className="news__document--items">
          {
            allDocuments?.map((item,index)=>{
              return(
                <CardReport data={item} key={index} />
              )
            })
          }

          </div>
        </div>
      </div>
    </div>
  );
};
