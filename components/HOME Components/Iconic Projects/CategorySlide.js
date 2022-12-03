import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll"
gsap.registerPlugin(ScrollTrigger);
export const CategorySlide = ()=>{

    const data=[
        {
            name: 'Mỹ phẩm',
            link:'/'
        },
        {
            name: 'Thời trang',
            link:'/'
        },
        {
            name: 'Tài chính',
            link:'/'
        },
        {
            all:true,
            name: 'Tất cả dự án',
            link:'/'
        },
        {
            name: 'Nội thất - Kiến trúc',
            link:'/'
        },
        {
            name: 'Xây dựng',
            link:'/'
        },
        {
            name: 'Du lịch',
            link:'/'
        },
        {
            name: 'Mặt hàng tiêu dùng',
            link:'/'
        },
        {
            name: 'Thực phẩm',
            link:'/'
        },
        {
            name: 'Sức khỏe',
            link:'/'
        },
        {
            name: 'Giáo dục - Đào tạo',
            link:'/'
        },
        {
            name: 'Studio - Photograph',
            link:'/'
        },
        {
            name: 'Công trình',
            link:'/'
        },
        {
            name: 'Khác',
            link:'/'
        },
        {
            name: 'Du lịch',
            link:'/'
        },
        {
            name: 'Mặt hàng tiêu dùng',
            link:'/'
        },
        {
            name: 'Thực phẩm',
            link:'/'
        },
        {
            name: 'Sức khỏe',
            link:'/'
        },
        {
            name: 'Giáo dục - Đào tạo',
            link:'/'
        },
        {
            name: 'Studio - Photograph',
            link:'/'
        },
        {
            name: 'Công trình',
            link:'/'
        },
        {
            name: 'Khác',
            link:'/'
        },
    ]
    
    const half = Math.ceil(data.length / 2); 
    
    const firstHalf = data.slice(0, half)
    const secondHalf = data.slice(half)


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
    
    
    useEffect(()=>{
        
        const slide1 = document.querySelector('.iconic-category-slide .row1-line')
        const slide2 = document.querySelector('.iconic-category-slide .row2-line')
       
        const slide1Width = document.querySelector('.iconic-category-slide .row1-line .main-slide').scrollWidth;
        const slide2Width = document.querySelector('.iconic-category-slide .row2-line .main-slide').scrollWidth;
        slide2.style.transform=`translateX(${-1*slide2Width}px)`

        const tl1=gsap.timeline({
            scrollTrigger:{
                trigger: '.iconic-category-slide',
                start:'top 100%',
                end:'bottom 0%',
                toggleActions:'play pause resume play',
              
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: '.iconic-category-slide',
                start:'top 100%',
                end:'bottom 0%',
                toggleActions:'play pause resume play',
                //  ,
              
            }
        })
            tl1.to(slide1,{
                duration:15,
                x:`-=${slide1Width+40}px`,
                repeat:-1,
                ease:'none'
            })
            tl2.to(slide2,{
                duration:18,
                x:`+=${slide2Width+40}px`,
                repeat:-1,
                ease:'none'
            })
       
        
        slide1.addEventListener('mouseover', function(){slowStopAnimation(tl1)})
        slide1.addEventListener('mouseout', function(){speedContinue(tl1)})
        
        slide2.addEventListener('mouseover', function(){slowStopAnimation(tl2)})
        slide2.addEventListener('mouseout', function(){speedContinue(tl2)})


        function slowStopAnimation(timelineElement){
            gsap.to(timelineElement,{timeScale:0,duration:2})
        }
        function speedContinue(timelineElement){
            gsap.to(timelineElement,{timeScale:1,duration:2})
        }

        if (locoScroll){

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
        }
          
            return ()=>{
                if(tl1.scrollTrigger){tl1.scrollTrigger.kill()}
                if(tl2.scrollTrigger){tl2.scrollTrigger.kill()}                // slide1.removeEventListener('mouseover', function(){slowStopAnimation(tl1)})
                tl1.kill()
                tl2.kill()
            }
    })

   
    
    return (
        <>
            <div className="iconic-category-slide">
                <div className="row-category row1-line">
                    <div className="slide main-slide">
                    {
                        firstHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className="slide clone-slide">
                    {
                        firstHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className="slide clone-slide" >
                    {
                        firstHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                   
                </div>
                <div className="row-category row2-line">
                <div className="slide main-slide">
                    {
                        secondHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className="slide clone-slide">
                    {
                        secondHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                   
                </div>
            </div>
        </>
    )
}