import Image from "next/image"
import frameholder from '../../public/imgs/frameholder.svg'


import { Pagination, Autoplay, Navigation, EffectFade, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import slideImage from '../../public/imgs/slide-image.png'
import gumacImage from '../../public/imgs/gumac1.png'

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

                        <div className="version-pc">Version PC</div>

                    </div>
                    </div>

                    <div className="column-2">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        loop={true}
                        speed={1500}
                        grabCursor={true}
                        slidesPerView={2}
                        reverseDirection={true}
                        autoplay={false}   
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

                <div className="mobile-version">
                    <div className="images-wrapper-mobile">
                        <div className="image-item-showcase">

                            <Image src={gumacImage} alt='' />
                        </div>
                        <div className="image-item-showcase">

                            <Image src={gumacImage} alt='' />
                        </div>
                        <div className="image-item-showcase">

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

                        <div className="achievement-wrapper">
                            <div className="achievement-item">
                                <div className="title-achievement">
                                    Đánh giá từ khách hàng
                                </div>
                                <div className="measurement">
                                    4.8/5.0
                                </div>

                            </div>
                            <div className="achievement-item">
                                <div className="title-achievement">
                                    Đánh giá từ khách hàng
                                </div>
                                <div className="measurement">
                                    4.8/5.0
                                </div>

                            </div>
                            <div className="achievement-item">
                                <div className="title-achievement">
                                    Đánh giá từ khách hàng
                                </div>
                                <div className="measurement">
                                    4.8/5.0
                                </div>

                            </div>
                        </div>
                        
                    </div>
                
            </div>
        </>
    )
}