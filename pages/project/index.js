import { Button } from "../../components/Button/Button";
import Image from "next/image";
import { ButtonCategory } from "../../components/Button/ButtonCategory";
import peojectOrderDisplayListBtn from "../../public/imgs/peojectOrderDisplayListBtn.png";
import peojectOrderDisplayGridBtn from "../../public/imgs/peojectOrderDisplayGridBtn.png";
import { CardProject } from "../../components/CardProject";
import { NumberPage } from "../../components/NumberPage";
import { use, useState } from "react";
import { ListProject } from "../../components/ListProject";
import { motion, AnimatePresence } from "framer-motion";

import Dropdown from "react-dropdown";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useMediaQuery } from "react-responsive";
import { StoryProject } from "../../components/StoryProject";

import { getProjectFields } from "../../api store/project";
import { getFilterProjects } from "../../api store/project";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects(props) {
  const isMobile = useMediaQuery({
    maxDeviceWidth: 768
  }, );
  const [display, setDisplay] = useState(false);
  const cursor = useRef()
  const interval = useRef(setInterval(function(){},0));
  const { scroll : locoScroll} = useLocomotiveScroll()
  const currentActive = useRef()
  const router = useRouter()




    
    const data= props?.projectsData?.map((item, index)=>{
      return {
          title: item.title,
          projectFields: item.projectFields.nodes,
          projectCategories: item.projectCategories.nodes,
          featureImage:item.featuredImage.node.mediaItemUrl,
          imagesList:item.projectSection.previewImages.map(value => value.mediaItemUrl)
        
  
      }
    })
    
    
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
  
    const currentCategory = useRef(0);
    const handleDisplayGrid = () => {
      setDisplay(true);
  
  
    }
  
    const handleDisplayList = () => {
      setDisplay(false);
      
    }
   
    useEffect(()=>{
      if (!isMobile){
        var tl = gsap.timeline({
          scrollTrigger:{
              trigger:'.project__header',
       
              start:'top 0%',
              end:'bottom 0%',
              scrub:4,
              pin:'.project__header'
          },
          ease:'easeInOut'
        });
    
        tl.to('.clone-text',{
          width:"100%",
          stagger:0.4
        })

      } else {
        const appHeight = () => {
          const doc = document.documentElement
          doc.style.setProperty('--app-height', `${window.innerHeight}px`)
      }
      window.addEventListener('resize', appHeight)
      appHeight()
      }

      return ()=>{
        if (!isMobile){
          if(tl.scrollTrigger){tl.scrollTrigger.kill()}
          tl.kill()
        }

        }
       
      
    })
  
    useEffect(()=>{

      if (!isMobile){

        window.addEventListener('mousemove',function(e){
         if (cursor.current){
           gsap.to(cursor.current,{
             left: e.clientX - cursor.current.clientWidth/2, 
             top: e.clientY - cursor.current.clientHeight/2 + (locoScroll ? locoScroll?.scroll.instance.scroll.y : 0) , 
             ease:"power2.out",
             duration:0,
             delay:0.04,
             // opacity:1
         })
         }
         })
  
       const slider = document.querySelector('.project__categories--item');
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
         const walk = (x - startX) *2;
         slider.scrollLeft = scrollLeft - walk;
     
       });
      
      }
      
  
      return ()=>{

        if (!isMobile){

          window.removeEventListener('mousemove', function(){})
          clearInterval(interval.current)
      
        }
        
      }
    })
    
  
    const handleCatSelect = (index, slug) => {
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
  
      console.log(slug)
  
  
      
    };
  
    const playImages = (index)=>{
      var start=0
      clearInterval(interval.current)
      var elementToplay = document.querySelector(`.cursor-project-item .cursor-item:nth-child(${index+1}) img:first-child`)
  
  
      interval.current = setInterval(function(){
      
        if (start < data[index].imagesList.length ){
          elementToplay.src = data[index].imagesList[start];
  
          start=start +1
        } else {
          start =0
          elementToplay.src = data[index].imagesList[start];
        }
          
      },1200)

      // var scaleElement = document.querySelector(`list__peoject--item-${index}`);
      // scaleElement.style.transform = "scaleY(1.05)";
  
    }
  
    const resetImage=(index)=> {
        if (index !=null){
          var elementToReset = document.querySelector(`.cursor-project-item .cursor-item:nth-child(${index+1}) img`)
  
          elementToReset.src = data[index].featureImage
          
        }
    }
    const handleComplete = ()=>{
      // ScrollTrigger.refresh();
      
    }
    const handleHover =(index)=>{
      clearInterval(interval.current)
      var elementToScroll = document.querySelector(`.cursor-project-item .cursor-item:nth-child(${index+1})`)
      gsap.to('.cursor-project-wrapper',{
        scrollTo:{
          y:elementToScroll,
          
        },
        duration:0.5
      })
  
      
      playImages(index)
      resetImage(currentActive.current)
      currentActive.current=index


      
      
      
    }
  
    const handleMouseOutList = ()=>{
        cursor.current.style.opacity=0;
        
   
  
      }
      const handleMouseOverList = ()=>{
      cursor.current.style.opacity=1
   
    }
    
    const optionsSort = ["Mới nhất", "Nhiều lượt xem nhất"];
    if (!isMobile){

      ScrollTrigger.addEventListener("refresh", () => locoScroll?.update());
      ScrollTrigger.refresh();
    }

    if (!isMobile){
      return (
      
        <div className="project__container">
          <div className="project__header">
            <Button text="Credential" />
            <div className="project__header--text">
              <p>
                Với mỗi dự án<br></br> là  {" "}
                <span className="animation-text">
                  <span className="main-text">
                      sự đảm bảo
                  </span>
                  <span className="clone-text">
                      sự đảm bảo
                  </span>
                </span> 
                <br></br> về{" "}
                
      
                <span className="animation-text">
                  <span className="main-text">
                  sản phẩm {`&`} dịch vụ
                  </span>
                  <span className="clone-text">
                  sản phẩm {`&`} dịch vụ
                  </span>
                </span> 
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
              <div className="project__categories--item" data-scroll data-scroll-direction='horizontal' data-scroll-speed='1.4'>
      
              {props?.projectFields?.map((item, index)=>{
                return (
                <ButtonCategory
                  key={index}
                  category={item.name}
                  count = {item.count}
                  handleCatSelect={()=>{handleCatSelect(index, item.slug);}}
                  
                />
      
                )
              })}
              
              </div>
            </div>
          </div>
          <div className="project__order">
            <div className="project__order--select">
              <p>Sắp xếp theo: </p>
              <Dropdown
                placeholder="Mới nhất"
                options={optionsSort}
                // value={" mcsjjs"}
              />
            </div>
            <div className="project__order--display">
              <div className={"project__order--display-list " + (display ?'':'active' )}  onClick={()=> handleDisplayList()}>
                  <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40.5" cy="40.5" r="40.5" fill="black"/>
                  <path d="M28.05 33.45H52.35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M28.05 40.2H52.35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M28.05 46.95H52.35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
      
      
              
              </div>
              <div className={"project__order--display-grid " + (display? 'active':'')} onClick={()=> handleDisplayGrid()}>
                <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40" stroke="#D9D9D9"/>
                <path d="M30.75 37.5H33.45C36.15 37.5 37.5 36.15 37.5 33.45V30.75C37.5 28.05 36.15 26.7 33.45 26.7H30.75C28.05 26.7 26.7 28.05 26.7 30.75V33.45C26.7 36.15 28.05 37.5 30.75 37.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M46.9499 37.5H49.6499C52.3499 37.5 53.6999 36.15 53.6999 33.45V30.75C53.6999 28.05 52.3499 26.7 49.6499 26.7H46.9499C44.2499 26.7 42.8999 28.05 42.8999 30.75V33.45C42.8999 36.15 44.2499 37.5 46.9499 37.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M46.9499 53.6999H49.6499C52.3499 53.6999 53.6999 52.3499 53.6999 49.6499V46.9499C53.6999 44.2499 52.3499 42.8999 49.6499 42.8999H46.9499C44.2499 42.8999 42.8999 44.2499 42.8999 46.9499V49.6499C42.8999 52.3499 44.2499 53.6999 46.9499 53.6999Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.75 53.6999H33.45C36.15 53.6999 37.5 52.3499 37.5 49.6499V46.9499C37.5 44.2499 36.15 42.8999 33.45 42.8999H30.75C28.05 42.8999 26.7 44.2499 26.7 46.9499V49.6499C26.7 52.3499 28.05 53.6999 30.75 53.6999Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
      
              </div>
            </div>
          </div>
      
            <AnimatePresence mode="wait">
      
        
          
          {display ? (
            <div 
              // key={"grid"}
              // initial={{opacity:0,x:-80}}
              //   animate={{opacity:1,x: 0}}
              //   exit={{opacity:0,x:-80}}
              //   onAnimationComplete={handleComplete}
            
            className="project__grid">
      
            {
              data.map((value, index) => {
                return (
                <CardProject
                  title={value.title}
                  toDo={value.projectCategories.map(value => value.name).join(' / ')}
                  category={value.projectFields.map(value => value.name).join(' / ')}
                  image={value.featureImage}
                  key={index}
                />
      
                )
              })
            }
            
              
            </div>
          ) : (
            <div
                // key={"list"}
                // initial={{opacity:0,x:80}}
                // animate={{opacity:1,x:0}}
                // exit={{opacity:0, x:80}}
                // onAnimationComplete={handleComplete}
            className="project__list" onMouseOver={handleMouseOverList} onMouseOut={handleMouseOutList}>
      
              <div className="cursor-project-item" ref={cursor}>
            
                <div className="view-button-fake">
                    View
                </div>
      
                <div className='card__project--img-sub'>
                  <div className='img-eclipse'></div>
                  <div className='img-eclipse'></div>
                  <div className='img-eclipse'></div>
                
              </div>
              
                <div className="cursor-project-wrapper">
      
              
                {
                  data.map((value, index)=>{
                    return (
                      <div key={index} className="cursor-item">
                      <img src={value.featureImage} alt="" />
                    
                      </div>
      
                    )
                  })
                }
                
                </div>
              
              </div>
            
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
              {
                data.map((value, index)=>{
      
                  
                  return (
                  <ListProject
                    id={(index <9 )? ('0'+(index +1)) : index}
                    name={value.title}
                    toDoData={value.projectCategories.map(value => value.name)}
                    category={value.projectFields.map(value => value.name).join(' / ')}
                    key={index}
                    hoverFunction={()=> {handleHover(index)}}
                    index = {index}
                  />
      
                  )
                })
              }
            
            </div>
          )}
          </AnimatePresence>
      
      
          <div className="project__number--page">
            <NumberPage number="1" active={true} />
            <NumberPage number="2" />
            <NumberPage number="3" />
            <NumberPage number="4" />
            <NumberPage number="5" />
          </div>

        </div>
      );
    } else {
      return (
        <>
        <div className="projects-list">
        <Swiper
          
          loop={false}
          speed={500}
        
          spaceBetween={0}
          
          slidesPerView={1}
          direction={"vertical"}
          // centeredSlides={true}
        >


          {
              data?.map((item, index) =>{
                return (
                  <SwiperSlide key={index+": "+ item.title}>

                  <StoryProject  />
                  </SwiperSlide>
                )
              })
          }
                    
        </Swiper>

        </div>

          
        </>
      )
    }
  
}




export async function getStaticProps({ params }) {



  const projectFields = await getProjectFields();
  const projectsData = await getFilterProjects(3, 0,projectFields?.data?.data?.projectFields?.nodes?.map(item => item.slug))
  

  return {
    props: {
      projectFields: projectFields?.data?.data?.projectFields?.nodes || null,
      projectsData: projectsData?.data?.data?.projects?.nodes || null
     

    },
    revalidate: 1,
  };
}
