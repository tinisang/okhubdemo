
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import quote from '../../public/imgs/quote.svg'
import { Player } from 'video-react';
import { Video } from "./Video";
import arrowLeft from '../../public/imgs/arrow-left.svg'
import { useSwiper } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/free-mode";



export const ReviewSection = ()=>{
    const swiper = useSwiper();
   
    const pagination = {
        el: ".dot-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class= "  dot-item ' + className + '"></span>';
        },
      };
    const navigation = {
        prevEl: ".review-footer .prev-arrow",
        nextEl:  ".review-footer .next-arrow",
        
      };
    
    return (
        <>
            <div className="container-margin divider"></div>
            <div className=" review-section">
                <div className="column-1">
                    
                    <div className="swiper-pagination dot-pagination"></div>
                    <div className="content-slide">
                    <Swiper
                         modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        loop={true}
                        speed={1500}
                        pagination={pagination}
                        navigation={navigation}
                        spaceBetween={48}
                        effect={'fade'}
                        slidesPerView={1}
                        autoplay={true}
                        // centeredSlides={true}
                        >
                        <SwiperSlide>
                            <div className="review-content-description">
                                <div className="quote-mark">
                                    <Image alt='' src = {quote} />
                                </div>
                                <div className="review-text">
                                OkHub là một Agency vô cùng chỉn chu trong mọi dự án mà các bạn ấy triển khai. Chúng tôi đã hợp tác với các bạn ấy rất nhiều dự án và sự hài lòng luôn trên cả điểm 10.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-content-description">
                                <div className="quote-mark">
                                    <Image alt='' src = {quote} />
                                </div>
                                <div className="review-text">
                                OKHUB VIỆT NAM® hoạt động từ 2020, có văn phòng tại Hà Nội. Với mục tiêu tạo ra các sản phẩm thiết kế và tiếp thị lấy người dùng làm trung tâm
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-content-description">
                                <div className="quote-mark">
                                    <Image alt='' src = {quote} />
                                </div>
                                <div className="review-text">
                                OkHub là một Agency vô cùng chỉn chu trong mọi dự án mà các bạn ấy triển khai. Chúng tôi đã hợp tác với các bạn ấy rất nhiều dự án và sự hài lòng luôn trên cả điểm 10.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-content-description">
                                <div className="quote-mark">
                                    <Image alt='' src = {quote} />
                                </div>
                                <div className="review-text">
                                OKHUB VIỆT NAM® hoạt động từ 2020, có văn phòng tại Hà Nội. Với mục tiêu tạo ra các sản phẩm thiết kế và tiếp thị lấy người dùng làm trung tâm
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-content-description">
                                <div className="quote-mark">
                                    <Image alt='' src = {quote} />
                                </div>
                                <div className="review-text">
                                OkHub là một Agency vô cùng chỉn chu trong mọi dự án mà các bạn ấy triển khai. Chúng tôi đã hợp tác với các bạn ấy rất nhiều dự án và sự hài lòng luôn trên cả điểm 10.
                                </div>
                            </div>
                        </SwiperSlide>


                        </Swiper>
                    </div>

                    <div className="review-footer">
                        <div className="customer">
                        <Swiper
                         modules={[Navigation, Pagination, Autoplay, EffectFade]}
                         pagination={pagination}
                        navigation={navigation}
                        effect={'fade'}
                        // fadeEffect={{crossfade:true}}
                        loop={true}
                        speed={1500}
           
                    //     navigation={navigation}
                    //    pagination={pagination}
                        
                        slidesPerView={1}
                        autoplay={true}
                        // centeredSlides={true}
                        >
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Thảo</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Trinh</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Tài</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Thương</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Hải</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Thảo</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="customer-item">

                                    <div className="name">Nguyễn Thảo</div>
                                    <div className="position">CEO AT Men Ology</div>
                                </div>
                            </SwiperSlide>
                            
                            
                        </Swiper>
                        </div>
                        <div className="navigation">
                            <div className="arrow prev-arrow">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41436 9L10.7073 16.2929L9.29304 17.7071L0.585938 9L9.29304 0.292892L10.7073 1.70711L3.41436 9Z" fill="black"/>
                                </svg>

                            </div>
                            <div className=" arrow next-arrow">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41436 9L10.7073 16.2929L9.29304 17.7071L0.585938 9L9.29304 0.292892L10.7073 1.70711L3.41436 9Z" fill="black"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-2">
                    <div className="video-slider">
                        
                    
                        <Swiper
                         modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        speed={1500}
                        pagination={pagination}
                        navigation={navigation}
                        spaceBetween={48}
                        grabCursor={true}
                        slideToClickedSlide={true}
                        slidesPerView={2}
                        autoplay={true}
                        freeMode={true}
                        
                    
                        >
                            <SwiperSlide><Video/></SwiperSlide>
                            
                            <SwiperSlide><Video/></SwiperSlide>
                            
                            <SwiperSlide><Video/></SwiperSlide>
                            
                            <SwiperSlide><Video/></SwiperSlide>
                            
                            <SwiperSlide><Video/></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

            
        </>
    )
}