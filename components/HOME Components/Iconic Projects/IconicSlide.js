import Link from 'next/link';
import Image from 'next/image';

import arrow from '../../../public/imgs/arrow-up-right.svg'
import image7 from '../../../public/imgs/image7.jpg'
import image2 from '../../../public/imgs/image2.jpg'
import image3 from '../../../public/imgs/image3.jpg'
import image4 from '../../../public/imgs/image4.jpg'
import image5 from '../../../public/imgs/image5.jpg'
import image6 from '../../../public/imgs/image6.jpg'
import previewImage from '../../../public/imgs/image6.jpg'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef, useState } from 'react';

import { useLocomotiveScroll } from 'react-locomotive-scroll';


export const IconicSlide = ()=>{
    const triggerContainer = useRef(setInterval(function(){},99999))
    const slider = useRef()
    const cursor = useRef()
    const preview = useRef(null)
    const myInterval = useRef()
    const lastActive = useRef()
    const [previewImg,setPreview] =useState(previewImage)

    const data=[
        {
            image: image2,
            imageList:[
                image2, image3, image4, image5, image6
            ]
        },
        {
            image: image3,
            imageList:[
                image2, image3, image4, image5, image6
            ]
        },
        {
            image: image4,
            imageList:[
                image2, image3, image4, image5, image6
            ]
        },
        {
            image: image5,
            imageList:[
                image2, image3, image4, image5, image6
            ]
        },
        {
            image: image6,
            imageList:[
                image2, image3, image4, image5, image6
            ]
        },
        {
            image: image7,
            imageList:[
                image2, image3, image4, image5, image6
            ]
        },
    ]
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);


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
            ScrollTrigger.defaults({scroller: '[data-scroll-container]',  })
        }
    
    
    useEffect(()=>{
        var lastslide = document.querySelector('.projects-slide .project-item:last-child')
        var screenWidth = window.innerWidth
        var sliderWidth = slider.current.scrollWidth
       
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger: triggerContainer.current,
                start:'top 0%',
                end:'300% 0%',
                scrub:true,
                ease:'power2.out',
                pin:triggerContainer.current
            }
        })

        tl.to(slider.current,{
           x: -(sliderWidth - screenWidth +100)
        })
        window.addEventListener('mousemove',cursorAnimation)
        tl.scrollTrigger.refresh()
     

        if (locoScroll){

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
        }
        
        return ()=>{
            
            window.removeEventListener('mousemove',cursorAnimation)
            if(tl.scrollTrigger){tl.scrollTrigger.kill()}
            clearInterval(myInterval.current)
          
        }
    })

    const cursorAnimation =(e) =>{
            gsap.to(cursor.current,{
                left: e.clientX,
                top:e.clientY +  (locoScroll ? locoScroll.scroll.instance.scroll.y :0),
                // duration:1
            })
        }

    const resetImage=(index)=> {
        if (index !=null){
            var elementToReset = document.querySelector(`.preview-image img:nth-child(${index})`)
           
            elementToReset.src = data[index-1].image.src
            elementToReset.srcset = data[index-1].image.src
            
        }
    }             

    const playImage=(index)=>{
        var start=0;
        clearInterval(myInterval.current)
        var elementToplay = document.querySelector(`.preview-image img:nth-child(${index})`)

        myInterval.current = setInterval(function(){

          if (start < data[index-1].imageList.length ){
            elementToplay.src = data[index-1].imageList[start].src;
            elementToplay.srcset = data[index-1].imageList[start].src;
            start=start +1
          } else {
            start =0
            elementToplay.src = data[index-1].imageList[start].src;
            elementToplay.srcset = data[index-1].imageList[start].src;
          }

            
        },1000)
    }
    const handleMouseOver=(index)=>{
            var imageItem = document.querySelector(`.preview-image img:nth-child(${index})`);
            var notHoverProjectItems = document.querySelectorAll(`.project-item:not(:nth-child(${index}))`);
            var active = document.querySelector(`.preview-image img.active`)
            notHoverProjectItems.forEach(element => {
                element.classList.add('not-hover')
                
            });
            // setPreview( data[index-1].image)
            if(cursor.current){cursor.current.classList.add('active')}
             if (active) {active.classList.remove('active')}
            imageItem.classList.add('active');

            playImage(index)
            resetImage(lastActive.current)
            lastActive.current = index

           
    }

    const handleMouseOut=()=>{
        if (cursor.current){
            cursor.current.classList.remove('active')
        }
        var ProjectItems = document.querySelectorAll(`.project-item`);
        ProjectItems.forEach(element => {
            element.classList.remove('not-hover')
            
        });
        clearInterval(myInterval.current)
        resetImage(lastActive.current)
    }
    
    
    return (
        <div>
            <div className="cursor-iconic" ref={cursor}>
                <div className="row1-property">
                <div className="image-container arrow"><Image src={arrow} fill alt='' className='image-item'/></div>
                <span className="project-property">
                    <span className="title">Tỷ lệ chuyển đổi tăng</span>
                    <span className="value">50%</span>
                </span>

                </div>
                <div className='card__project--img-sub'>
                    <div className='img-eclipse'></div>
                    <div className='img-eclipse'></div>
                    <div className='img-eclipse'></div>
                    
                </div>
                <div className="image-container preview-image" ref={preview}>
                    <Image src={image2} />
                    <Image src={image3} />
                    <Image src={image4} />
                    <Image src={image5} />
                    <Image src={image6} />
                    <Image src={image7} />
                </div>
            </div>
            <div className="iconic-projects-slide" ref={triggerContainer}>
                <div className="introduction  container-margin">

                    <div className="heading">
                        Dự án tiêu biểu
                    </div>
                    <div className="heading-english">Iconic Projects</div>
                </div>
                <div className="projects-slide" ref={slider}>
                    <div className="project-item" onMouseOver={()=>handleMouseOver(1)} onMouseLeave={()=>handleMouseOut()}>
                        <div className="image-container image-project">
                                <Link href="/project/abc">
                                <Image src={image3} alt='' fill className='image-item' />
                                </Link>
                        </div>
                        <span className="project-info">Website <span className='project-name'>Kính mắt Anna</span></span>
                    </div>
                    <div className="project-item" onMouseOver={()=>handleMouseOver(2)} onMouseLeave={()=>handleMouseOut()}>
                        <div className="image-container image-project">
                                <Link href="/project/abc">
                                <Image src={image4} alt='' fill className='image-item' />
                                </Link>
                        </div>
                        <span className="project-info">Website <span className='project-name'>Kính mắt Anna</span></span>
                    </div>
                    <div className="project-item" onMouseOver={()=>handleMouseOver(3)} onMouseLeave={()=>handleMouseOut()}>
                        <div className="image-container image-project">
                                <Link href="/project/abc">
                                <Image src={image5} alt='' fill className='image-item' />
                                </Link>
                        </div>
                        <span className="project-info">Website <span className='project-name'>Kính mắt Anna</span></span>
                    </div>
                    <div className="project-item" onMouseOver={()=>handleMouseOver(4)} onMouseLeave={()=>handleMouseOut()}>
                        <div className="image-container image-project">
                                <Link href="/project/abc">
                                <Image src={image6} alt='' fill className='image-item' />
                                </Link>
                        </div>
                        <span className="project-info">Website <span className='project-name'>Kính mắt Anna</span></span>
                    </div>
                    <div className="project-item" onMouseOver={()=>handleMouseOver(5)} onMouseLeave={()=>handleMouseOut()}>
                        <div className="image-container image-project">
                                <Link href="/project/abc">
                                <Image src={image7} alt='' fill className='image-item' />
                                </Link>
                        </div>
                        <span className="project-info">Website <span className='project-name'>Kính mắt Anna</span></span>
                    </div>
                    <div className="project-item" onMouseOver={()=>handleMouseOver(6)} onMouseLeave={()=>handleMouseOut()}>
                        <div className="image-container image-project">
                                <Link href="/project/abc">
                                <Image src={image3} alt='' fill className='image-item' />
                                </Link>
                        </div>
                        <span className="project-info">Website <span className='project-name'>Kính mắt Anna</span></span>
                    </div>
                        <div className="view-more-projects">
                        <Link href="/project">
                           <span>
                           View More
                           </span> 
                        </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}