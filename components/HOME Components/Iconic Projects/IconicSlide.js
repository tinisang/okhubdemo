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
export const IconicSlide = ()=>{
    const triggerContainer = useRef()
    const slider = useRef()
    const cursor = useRef()
    const preview = useRef(null)
    const [previewImg,setPreview] =useState(previewImage)

    const data=[
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image5
        },
        {
            image: image6
        },
        {
            image: image7
        },
    ]
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

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
     

       
        
        return ()=>{
            
            window.removeEventListener('mousemove',cursorAnimation)
            tl.scrollTrigger.kill()
          
        }
    })

    const cursorAnimation =(e) =>{
            gsap.to(cursor.current,{
                left: e.clientX,
                top:e.clientY,
                duration:1
            })
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
            imageItem.classList.add('active')
           
    }

    const handleMouseOut=()=>{
        if (cursor.current){
            cursor.current.classList.remove('active')
        }
        var ProjectItems = document.querySelectorAll(`.project-item`);
        ProjectItems.forEach(element => {
            element.classList.remove('not-hover')
            
        });
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
                        <Link href="/news">
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