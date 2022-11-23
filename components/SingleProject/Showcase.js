import Image from "next/image"
import frameholder from '../../public/imgs/frameholder.svg'


import { Pagination, Autoplay, Navigation, EffectFade, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import slideImage from '../../public/imgs/slide-image.png'

import { useSwiper } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";


export const Showcase = ()=>{
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
                        <img className="mockup-image" src="https://img.freepik.com/free-vector/realistic-ui-ux-background_52683-69487.jpg?w=2000" alt="" />
                        <Image className="holder-frame" src={frameholder} alt='' />

                    </div>
                    </div>

                    <div className="column-2">
                    <Swiper
                         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            
    
                        loop={true}
                        speed={1500}
           
                
                        effect={"coverflow"}
                        coverflowEffect={{
                            rotate:0,
                            deep:100,
                            scale:0.8,
                            slideShadows: false,
                             
                            }}
                        grabCursor={true}
                        slidesPerView={2}
                        reverseDirection={true}
                        autoplay={false}
                        centeredSlides={true}
                       
                        
                        >
                            <SwiperSlide>
                                <div className="image-item-slide">
                                    <Image src={slideImage} alt=''/> 
                                    {/* <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tips-ui-design-template-6eee4b899a7bf3462b9000bdf1f3a18d_screen.jpg?ts=1649054631" alt=""  /> */}
                                </div>
                            </SwiperSlide>
                           
                        
                            <SwiperSlide>
                                <div className="image-item-slide">
                                    <Image src={slideImage} alt=''/> 
                                    {/* <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tips-ui-design-template-6eee4b899a7bf3462b9000bdf1f3a18d_screen.jpg?ts=1649054631" alt=""  /> */}
                                </div>
                            </SwiperSlide>
                           
                        
                            <SwiperSlide>
                                <div className="image-item-slide">
                                    <Image src={slideImage} alt=''/> 
                                    {/* <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tips-ui-design-template-6eee4b899a7bf3462b9000bdf1f3a18d_screen.jpg?ts=1649054631" alt=""  /> */}
                                </div>
                            </SwiperSlide>
                           
                        
                            <SwiperSlide>
                                <div className="image-item-slide">
                                    <Image src={slideImage} alt=''/> 
                                    {/* <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tips-ui-design-template-6eee4b899a7bf3462b9000bdf1f3a18d_screen.jpg?ts=1649054631" alt=""  /> */}
                                </div>
                            </SwiperSlide>
                           
                        
                            
                            
                        </Swiper>
                    </div>

                    
                </div>
            </div>
        </>
    )
}