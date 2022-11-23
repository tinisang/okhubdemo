import Image from "next/image"
import Link from "next/link"
import newsicon from "../../../public/imgs/newsicon.svg"
import arrow from "../../../public/imgs/arrar.svg"
import { useEffect } from "react"
import gsap from "gsap"


export const PostMarqueSlide = ()=>{

    useEffect(()=>{

        var sliderWidth = document.querySelector('.post-slide-container:first-child').getBoundingClientRect()
        var sliderWidth1 = document.querySelector('.post-slide-container:last-child')
        var slider = document.querySelector('.marquee-post-slide')

        var sliderValue= parseInt(getComputedStyle(sliderWidth1).width.replace('px',''));
       
       
        var tl =gsap.timeline()
        tl.to('.marquee-container',{
            duration: 12,
            ease: "none",
            x: `-${sliderValue}px`,
            // modifiers: {
            //     x: gsap.utils.unitize(x => {
            //         return parseFloat(x)
            //     }) //force x value to be between 0 and 500 using modulus
            // },
            repeat: -1
        })

        return ()=>{
            tl.kill()
        }
    })
    
    return (
        <>
            <div className="marquee-post-slide">
                <div className="marquee-container">

                        <div className="post-slide-container" >
                            <div className="post-item news">
                                <Link href={'/news/abc'}>

                                    <div className="image-container icon">
                                        <Image alt="" src={newsicon} className="image-item"  />
                                    </div> 
                                    <div className="title">Báo cáo chỉ số thị trường quý IV năm 2021</div>
                                </Link>
                            </div>
                            <div className="post-item noti">
                                <Link href={'/news/abc'}>

                                <div className="image-container icon">
                                        <Image alt="" src={newsicon} className="image-item"  />
                                    </div> 
                                    <div className="title">Thông báo hợp tác chiến lược giữa OKHUB và Reika ngày 22/11/2022</div>
                                </Link>
                            </div>
                           
                        </div>
                        <div className="post-slide-container" >
                            <div className="post-item news">
                                <Link href={'/news/abc'}>

                                    <div className="image-container icon">
                                        <Image alt="" src={newsicon} className="image-item"  />
                                    </div> 
                                    <div className="title">Báo cáo chỉ số thị trường quý IV năm 2021</div>
                                </Link>
                            </div>
                            <div className="post-item noti">
                                <Link href={'/news/abc'}>

                                <div className="image-container icon">
                                        <Image alt="" src={newsicon} className="image-item"  />
                                    </div> 
                                    <div className="title">Thông báo hợp tác chiến lược giữa OKHUB và Reika ngày 22/11/2022</div>
                                </Link>
                            </div>
                           
                        </div>
                      
            
                </div>

                    <Link href="/news/fsdfsd">

                    <div className="image-container arrow">
                        <Image src={arrow} alt="" className="image-item" />
                    </div>
                    </Link>
                </div>
        </>
    )
}