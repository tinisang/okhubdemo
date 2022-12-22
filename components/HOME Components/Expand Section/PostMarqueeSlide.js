import Image from "next/image"
import Link from "next/link"
import newsicon from "../../../public/imgs/newsicon.svg"
import arrow from "../../../public/imgs/arrar.svg"
import { useEffect } from "react"
import gsap from "gsap"


export const PostMarqueSlide = ({postData})=>{
    console.log(postData)
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
            
            repeat: -1
        })

        var mainSlide = document.querySelector('.marquee-container');
        const slowDown=()=>{
            gsap.to(tl,{timeScale: 0, duration:1})
        }
        
        const speedUp=()=>{
            gsap.to(tl,{timeScale: 1, duration:1})
        }
        mainSlide.addEventListener('mouseover',slowDown)
        mainSlide.addEventListener('mouseout',speedUp)
        
        
        return ()=>{
            tl.kill();
            mainSlide.removeEventListener('mouseover',slowDown)
            mainSlide.removeEventListener('mouseout',speedUp)
            
        }
    })
    
    return (
        <>
            <div className="marquee-post-slide">
                <div className="marquee-container">

                        <div className="post-slide-container" >
                       

                            {
                                postData.map((item, index)=>{
                                   return (
                                    <div className="post-item news" key={index}>
                                        <Link href={'/news/'+item.slug}>

                                            <div className="image-container icon">
                                                <Image alt="" src={newsicon} className="image-item"  />
                                            </div> 
                                            <div className="title">{item.title}</div>
                                        </Link>
                                    </div>
                                   ) 
                                })
                            }
                            
                            {/* <div className="post-item noti">
                                <Link href={'/news/abc'}>

                                <div className="image-container icon">
                                        <Image alt="" src={newsicon} className="image-item"  />
                                    </div> 
                                    <div className="title">Thông báo hợp tác chiến lược giữa OKHUB và Reika ngày 22/11/2022</div>
                                </Link>
                            </div> */}
                           
                        </div>
                        <div className="post-slide-container" >
                         

                            {
                                postData.map((item, index)=>{
                                   return (
                                    <div className="post-item news" key={index}>
                                        <Link href={'/news/'+item.slug}>

                                            <div className="image-container icon">
                                                <Image alt="" src={newsicon} className="image-item"  />
                                            </div> 
                                            <div className="title">{item.title}</div>
                                        </Link>
                                    </div>
                                   ) 
                                })
                            }
                            
                         
                        </div>
                       
            
                </div>

                    <Link href="/news">

                    <div className="image-container arrow">
                        <Image src={arrow} alt="" className="image-item" />
                    </div>
                    </Link>
                </div>
        </>
    )
}