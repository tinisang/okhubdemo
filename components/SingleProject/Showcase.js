import Image from "next/image"
import frameholder from '../../public/imgs/frameholder.svg'


import { Pagination, Autoplay, Navigation, EffectFade, EffectCoverflow } from "swiper";

import {Swiper,  SwiperSlide } from "swiper/react";

import slideImage from '../../public/imgs/slide-image.png'
import gumacImage from '../../public/imgs/gumac1.png'

import desktopImage from '../../public/imgs/desktopImage.png'

import gsap from "gsap";

import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useEffect, useRef } from "react";

import arrowLeft from '../../public/imgs/arrow-left.svg'


export const Showcase = ({data})=>{
    const currentIndex = useRef()
    gsap.registerPlugin(ScrollToPlugin)
    useEffect(()=>{
        resize()

        
        
        window.addEventListener('resize',resize)
        
        function resize(){
            var laptop = document.querySelector('.laptop');
            var laptopWidth = laptop.clientWidth
        
            laptop.style.height = laptopWidth*(371 / 670)+'px'
        }

        return ()=>{
            window.removeEventListener('resize',resize)
        }
    })


    const handlePCHover = ()=>{
           var elementToScroll = document.querySelector(`.slider-desktop>.swiper>.swiper-wrapper .swiper-slide:nth-child(${currentIndex.current +1}) .mockup-image img`)
        var imageHeight = elementToScroll.clientHeight

        var laptop = document.querySelector('.laptop');
            var laptopHeight = laptop.clientHeight
          

           var offset = imageHeight - laptopHeight
           
           gsap.to(elementToScroll,{
            y:`-${offset}px`,
            duration:3
           })
    }
    const handlePCHoverOut = ()=>{
           var elementToScroll = document.querySelector(`.slider-desktop>.swiper>.swiper-wrapper .swiper-slide:nth-child(${currentIndex.current +1}) .mockup-image img`)
     
           gsap.to(elementToScroll,{
            y:'0px',
            duration:3
           })
    }

    const nextSlide=()=>{
        var nextButton = document.querySelector('.slide-section .navigation-1 .next-arrow')
        nextButton.click()
    }
    
    const backSlide = ()=>{
        
        var backButton = document.querySelector('.slide-section .navigation-1 .prev-arrow')
        backButton.click()
    }

    const navigation = {
        prevEl: ".slide-section .navigation .prev-arrow",
        nextEl: ".slide-section .navigation .next-arrow",
        
      };
    const navigation2 = {
        prevEl: ".slide-section .navigation-1 .prev-arrow",
        nextEl: ".slide-section .navigation-1 .next-arrow",
        
      };
    return (
        <>
            <div className="container-padding showcase-section">
                <div className="slide-section">
                    <div className="column-1">
                    <div className="laptop">
                        <div className='card__project--img-sub'>
                            <div className='img-eclipse'></div>
                            <div className='img-eclipse'></div>
                            <div className='img-eclipse'></div>
                            
                        </div>

                        <div className="slider-desktop">
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        loop={true}
                        speed={1500}
                        grabCursor={true}
                        slidesPerView={1}
                        navigation={navigation2}
                        allowTouchMove={false}
                        onSliderMove={handlePCHoverOut}
                        onSlideChange={(swiper)=>{currentIndex.current = swiper.activeIndex}}
                        onTransitionEnd={(swiper)=>{currentIndex.current = swiper.activeIndex}}
                        >

                            {
                                data?.desktop?.map((item, index)=>{
                                    return(
                                        <SwiperSlide key={index} >
                                            <div className="image-container mockup-image" onMouseOver={()=>{handlePCHover()}} onMouseOut={handlePCHoverOut} >

                                                <Image fill src={item.mediaItemUrl} alt="" className="image-item" unoptimized={true}/>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })
                            }
                        
                            
                        </Swiper>
                      
                            
                        </div>
                        
                        <Image className="holder-frame" src={frameholder} alt='' />

                        <div className="version-pc">Version PC</div>

                    </div>
                    </div>

                    <div className="column-2">
                    <div className="navigation">
                            <div className="arrow prev-arrow">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.41436 9L10.7073 16.2929L9.29304 17.7071L0.585938 9L9.29304 0.292892L10.7073 1.70711L3.41436 9Z" fill="black"/>
                                </svg>

                            </div>
                            <div className=" arrow next-arrow">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.41436 9L10.7073 16.2929L9.29304 17.7071L0.585938 9L9.29304 0.292892L10.7073 1.70711L3.41436 9Z" fill="black"/>
                                </svg>

                            </div>
                        </div>
                    <div className="navigation-1" style={{display:'none'}}>
                            <div className="arrow prev-arrow">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.41436 9L10.7073 16.2929L9.29304 17.7071L0.585938 9L9.29304 0.292892L10.7073 1.70711L3.41436 9Z" fill="black"/>
                                </svg>

                            </div>
                            <div className=" arrow next-arrow">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.41436 9L10.7073 16.2929L9.29304 17.7071L0.585938 9L9.29304 0.292892L10.7073 1.70711L3.41436 9Z" fill="black"/>
                                </svg>

                            </div>
                        </div>
                        <Swiper
                        modules={[Navigation, Pagination]}
                        loop={true}
                        speed={1500}
                        grabCursor={true}
                        slidesPerView={2}
                        reverseDirection={true}
                        autoplay={false}  
                        navigation={navigation}
                       
                        onSlideNextTransitionStart={nextSlide}
                        onSlidePrevTransitionStart={backSlide}
                        >

                            {
                                data?.desktop?.map((item, index)=>{
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="image-container image-item-slide">
                                                <Image fill src={item.mediaItemUrl} alt='' className="image-item" unoptimized={true}/> 
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                          
                        </Swiper>
                    </div>

                    
                </div>

                <div className="mobile-version">
                    <div className="images-wrapper-mobile">
                        <div className="image-item-showcase" data-scroll data-scroll-direction='vertical' data-scroll-speed='1.1'>

                            <Image src={gumacImage} alt='' />
                        </div>
                        <div className="image-item-showcase" data-scroll data-scroll-direction='vertical' data-scroll-speed='-1.1'>

                            <Image src={gumacImage} alt='' />
                        </div>
                        <div className="image-item-showcase" data-scroll data-scroll-direction='vertical' data-scroll-speed='1.1'>

                            <Image src={gumacImage} alt='' />
                        </div>
                        
                    </div>
                    <div className="version-mobile-text">
                        Version Mobile
                    </div>

                    
                </div>
                    <div className="achievement">
                        <div className="info">

                            <div className="title">Kết quả đạt được<br></br> Sau khi hoàn thành dự án</div>
                            <div className="transparent-text">Achievement</div>
                        </div>
                        <div className="achievement-area">

                        
                            <div className="achievement-wrapper">
                                <div className="achievement-item" data-scroll data-scroll-direction='vertical' data-scroll-speed='3' data-scroll-delay='1'>
                                    <div className="title-achievement">
                                        Đánh giá từ khách hàng
                                    </div>
                                    <div className="measurement">
                                        4.8/5.0
                                    </div>
                                    <div className="clipPath-background"> </div>

                                </div>
                                <div className="achievement-item" data-scroll data-scroll-direction='vertical' data-scroll-speed='3' data-scroll-delay='0.5'>
                                    <div className="title-achievement">
                                    Tỷ lệ chuyển đổi CTR tăng
                                    </div>
                                    <div className="measurement">
                                    45%
                                    </div>
                                    <div className="clipPath-background"> </div>

                                </div>
                                <div className="achievement-item" data-scroll data-scroll-direction='vertical' data-scroll-speed='3' data-scroll-delay='0.25'>
                                    <div className="title-achievement">
                                    Sự hài lòng từ đối tác
                                    </div>
                                    <div className="measurement">
                                    4.9/5.0
                                    </div>
                                    <div className="clipPath-background"> </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                
            </div>
        </>
    )
}