import Image from "next/image"
import Link from "next/link"
import newsicon from "../../../public/imgs/newsicon.svg"
import arrow from "../../../public/imgs/arrar.svg"
import { useEffect } from "react"
import gsap from "gsap"


export const PostMarqueSlide = ()=>{

    useEffect(()=>{

        var sliderWidth = document.querySelector('.post-slide-container').scrollWidth
        console.log(sliderWidth)
        gsap.to('.post-item',{
            duration: 8,
            ease: "none",
            x: "-=959", //move each box 500px to right
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % sliderWidth) //force x value to be between 0 and 500 using modulus
            },
            repeat: -1
        })
    })
    
    return (
        <>
            <div className="marquee-post-slide">
                    <div className="post-slide-container">
                        <div className="post-item news">
                            <div className="image-container icon">
                                <Image alt="" src={newsicon} className="image-item"  />
                            </div> 
                            <div className="title">Báo cáo chỉ số thị trường quý IV năm 2021</div>
                        </div>
                        <div className="post-item noti">

                        <div className="image-container icon">
                                <Image alt="" src={newsicon} className="image-item"  />
                            </div> 
                            <div className="title">Thông báo hợp tác chiến lược giữa OKHUB và Reika ngày 22/11/2022</div>
                            
                        </div>
                        <div className="post-item news">
                            <div className="image-container icon">
                                <Image alt="" src={newsicon} className="image-item"  />
                            </div> 
                            <div className="title">Báo cáo chỉ số thị trường quý IV năm 2021</div>
                        </div>
                        <div className="post-item noti">

                        <div className="image-container icon">
                                <Image alt="" src={newsicon} className="image-item"  />
                            </div> 
                            <div className="title">Báo cáo chỉ số thị trường quý IV năm 2021</div>
                            
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