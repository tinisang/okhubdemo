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
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Projects() {
  const [display, setDisplay] = useState(false);
  const cursor = useRef()
  const interval = useRef(setInterval(function(){},0));

  const currentActive = useRef()
  
  const data =[
    {
      featureImage:'https://codecanyon.img.customer.envatousercontent.com/files/395609916/Preview_image.jpeg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=cdf5c10dd72df30b6aaaaa70b9c61b4a',
      imagesList:[
        'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg',
        'https://i.pinimg.com/736x/28/80/14/288014f69b594b2c84b3b7fdee363de3.jpg',
        'https://uifreebies.net/wp-content/uploads/2021/05/Clothing-E-Commerce-App-Design-Free.jpg'
      ]
    },
    {
      featureImage:'https://i.pinimg.com/736x/e1/b7/79/e1b779efe1069f49afbf4cef7eb90235.jpg',
      imagesList:[
        'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg',
        'https://i.pinimg.com/736x/28/80/14/288014f69b594b2c84b3b7fdee363de3.jpg',
        'https://uifreebies.net/wp-content/uploads/2021/05/Clothing-E-Commerce-App-Design-Free.jpg'
      ]
    },
    {
      featureImage:'https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail.jpg',
      imagesList:[
        'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg',
        'https://i.pinimg.com/736x/28/80/14/288014f69b594b2c84b3b7fdee363de3.jpg',
        'https://uifreebies.net/wp-content/uploads/2021/05/Clothing-E-Commerce-App-Design-Free.jpg'
      ]
    },
    {
      featureImage:'https://caphe.sfo2.cdn.digitaloceanspaces.com/assets/images/marvie-ios-ui-kit-for-sketch-and-figma-thumb.jpg',
      imagesList:[
        'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg',
        'https://i.pinimg.com/736x/28/80/14/288014f69b594b2c84b3b7fdee363de3.jpg',
        'https://uifreebies.net/wp-content/uploads/2021/05/Clothing-E-Commerce-App-Design-Free.jpg'
      ]
    },
    {
      featureImage:'https://img.freepik.com/free-vector/realistic-ui-ux-landing-page-template_52683-68898.jpg',
      imagesList:[
        'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg',
        'https://i.pinimg.com/736x/28/80/14/288014f69b594b2c84b3b7fdee363de3.jpg',
        'https://uifreebies.net/wp-content/uploads/2021/05/Clothing-E-Commerce-App-Design-Free.jpg'
      ]
    },
    {
      featureImage:'https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg',
      imagesList:[
        'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg',
        'https://i.pinimg.com/736x/28/80/14/288014f69b594b2c84b3b7fdee363de3.jpg',
        'https://uifreebies.net/wp-content/uploads/2021/05/Clothing-E-Commerce-App-Design-Free.jpg'
      ]
    },
    
  ]

  
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

   



    return ()=>{
      console.log(tl)
      if(tl.scrollTrigger){tl.scrollTrigger.kill()}
      
    }
    
  },[])

  useEffect(()=>{
    
     window.addEventListener('mousemove',function(e){
      if (cursor.current){

        gsap.to(cursor.current,{
          left: e.clientX - cursor.current.clientWidth/2, 
          top: e.clientY - cursor.current.clientHeight/2, 
          ease:"power2.out",
          // duration:0.5,
          // delay:0.04,
          // opacity:1
      })
      }
      })

    ScrollTrigger.refresh()


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
      const walk = (x - startX) *2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
  
});
    

    return ()=>{
      
      window.removeEventListener('mousemove', function(){})
      clearInterval(interval.current)
      // tl.kill()
    }
  })
  

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

  }

  const resetImage=(index)=> {
      if (index !=null){
        var elementToReset = document.querySelector(`.cursor-project-item .cursor-item:nth-child(${index+1}) img`)

        elementToReset.src = data[index].featureImage
        
      }
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
          <div className={"project__order--display-list " + (display ?'':'active' )}  onClick={()=> handleDisplayList()}>
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40.5" cy="40.5" r="40.5" fill="black"/>
              <path d="M28.05 33.45H52.35" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M28.05 40.2H52.35" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M28.05 46.95H52.35" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>


           
          </div>
          <div className={"project__order--display-grid " + (display? 'active':'')} onClick={()=> handleDisplayGrid()}>
            <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="40.5" r="40" stroke="#D9D9D9"/>
            <path d="M30.75 37.5H33.45C36.15 37.5 37.5 36.15 37.5 33.45V30.75C37.5 28.05 36.15 26.7 33.45 26.7H30.75C28.05 26.7 26.7 28.05 26.7 30.75V33.45C26.7 36.15 28.05 37.5 30.75 37.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M46.9499 37.5H49.6499C52.3499 37.5 53.6999 36.15 53.6999 33.45V30.75C53.6999 28.05 52.3499 26.7 49.6499 26.7H46.9499C44.2499 26.7 42.8999 28.05 42.8999 30.75V33.45C42.8999 36.15 44.2499 37.5 46.9499 37.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M46.9499 53.6999H49.6499C52.3499 53.6999 53.6999 52.3499 53.6999 49.6499V46.9499C53.6999 44.2499 52.3499 42.8999 49.6499 42.8999H46.9499C44.2499 42.8999 42.8999 44.2499 42.8999 46.9499V49.6499C42.8999 52.3499 44.2499 53.6999 46.9499 53.6999Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.75 53.6999H33.45C36.15 53.6999 37.5 52.3499 37.5 49.6499V46.9499C37.5 44.2499 36.15 42.8999 33.45 42.8999H30.75C28.05 42.8999 26.7 44.2499 26.7 46.9499V49.6499C26.7 52.3499 28.05 53.6999 30.75 53.6999Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        </div>
      </div>
      {display ? (
        <div className="project__grid">

        {
          data.map((value, index) => {
            return (
            <CardProject
              title="Website Coteccons"
              toDo={`Interaction & Development`}
              category="Thời trang"
              image={value.featureImage}
              key={index}
            />

            )
          })
        }
        
          
        </div>
      ) : (
        <div className="project__list" onMouseOver={handleMouseOverList} onMouseOut={handleMouseOutList}>

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
                name="Thời trang GUMAC"
                toDoData={["UI/UX Design", "Dev"]}
                category="Thời trang"
                key={index}
                hoverFunction={()=> {handleHover(index)}}
              />

              )
            })
          }
         
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
