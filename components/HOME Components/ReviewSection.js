
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import quote from '../../public/imgs/quote.svg'
// import { Player } from 'video-react';
import { Video } from "./Video";



export const ReviewSection = ()=>{
    return (
        <>
            <div className="review-section">
                <div className="column-1">
                    <div className="dot-pagination">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="review-content-description">
                        <div className="quote-mark">
                            <Image alt='' src = {quote} />
                        </div>
                        <div className="review-text">
                        OkHub là một Agency vô cùng chỉn chu trong mọi dự án mà các bạn ấy triển khai. Chúng tôi đã hợp tác với các bạn ấy rất nhiều dự án và sự hài lòng luôn trên cả điểm 10.
                        </div>
                    </div>

                    <div className="review-footer">
                        <div className="customer">
                            <div className="name">Nguyễn Thảo</div>
                            <div className="position">CEO AT Men Ology</div>
                        </div>
                        <div className="navigation">
                            <div className="prev-arraow"></div>
                            <div className="next-arrow">
                                {/* <Image alt='' src= /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-2">
                    <Swiper
                    
                    modules={[Pagination, Autoplay]}
                    // pagination={pagination}
                    loop={true}
                    speed={1500}
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={true}
                    className="banner"

                    
                    >
                        <SwiperSlide>
                            <Video/>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Video/>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Video/>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Video/>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Video/>
                        </SwiperSlide>
                        
                    </Swiper>

                </div>
            </div>

            
        </>
    )
}