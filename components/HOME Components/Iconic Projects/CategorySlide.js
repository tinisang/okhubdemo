import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
    
gsap.registerPlugin(ScrollTrigger);
export const CategorySlide = ()=>{

    const data=[
        {
            name: 'Mỹ phẩm',
            link:'/'
        },
        {
            name: 'Thời trang',
            link:'/'
        },
        {
            name: 'Tài chính',
            link:'/'
        },
        {
            all:true,
            name: 'Tất cả dự án',
            link:'/'
        },
        {
            name: 'Nội thất - Kiến trúc',
            link:'/'
        },
        {
            name: 'Xây dựng',
            link:'/'
        },
        {
            name: 'Du lịch',
            link:'/'
        },
        {
            name: 'Mặt hàng tiêu dùng',
            link:'/'
        },
        {
            name: 'Thực phẩm',
            link:'/'
        },
        {
            name: 'Sức khỏe',
            link:'/'
        },
        {
            name: 'Giáo dục - Đào tạo',
            link:'/'
        },
        {
            name: 'Studio - Photograph',
            link:'/'
        },
        {
            name: 'Công trình',
            link:'/'
        },
        {
            name: 'Khác',
            link:'/'
        },
        {
            name: 'Du lịch',
            link:'/'
        },
        {
            name: 'Mặt hàng tiêu dùng',
            link:'/'
        },
        {
            name: 'Thực phẩm',
            link:'/'
        },
        {
            name: 'Sức khỏe',
            link:'/'
        },
        {
            name: 'Giáo dục - Đào tạo',
            link:'/'
        },
        {
            name: 'Studio - Photograph',
            link:'/'
        },
        {
            name: 'Công trình',
            link:'/'
        },
        {
            name: 'Khác',
            link:'/'
        },
    ]

    const half = Math.ceil(data.length / 2); 
    
    const firstHalf = data.slice(0, half)
    const secondHalf = data.slice(half)
    useEffect(()=>{
        const slide1 = document.querySelector('.iconic-category-slide .row1-line')
        const slide2 = document.querySelector('.iconic-category-slide .row2-line')
       
        const slide1Width = document.querySelector('.iconic-category-slide .row1-line .main-slide').scrollWidth;
        const slide2Width = document.querySelector('.iconic-category-slide .row2-line .main-slide').scrollWidth;
        slide2.style.transform=`translateX(${-1*slide2Width}px)`

        const tl1=gsap.timeline({
            scrollTrigger:{
                trigger: '.iconic-category-slide',
                start:'top 100%',
                end:'bottom 0%',
                toggleActions:'play pause resume play',
              
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: '.iconic-category-slide',
                start:'top 100%',
                end:'bottom 0%',
                toggleActions:'play pause resume play',
                // markers:true,
              
            }
        })
            tl1.to(slide1,{
                duration:15,
                x:`-=${slide1Width+40}px`,
                repeat:-1,
                ease:'none'
            })
            tl2.to(slide2,{
                duration:18,
                x:`+=${slide2Width+40}px`,
                repeat:-1,
                ease:'none'
            })
       
        
        slide1.addEventListener('mouseover', function(){slowStopAnimation(tl1)})
        slide1.addEventListener('mouseout', function(){speedContinue(tl1)})
        
        slide2.addEventListener('mouseover', function(){slowStopAnimation(tl2)})
        slide2.addEventListener('mouseout', function(){speedContinue(tl2)})


        function slowStopAnimation(timelineElement){
            gsap.to(timelineElement,{timeScale:0,duration:2})
        }
        function speedContinue(timelineElement){
            gsap.to(timelineElement,{timeScale:1,duration:2})
        }


          
            return ()=>{
                tl1.scrollTrigger.kill()
                tl2.scrollTrigger.kill()
                // slide1.removeEventListener('mouseover', function(){slowStopAnimation(tl1)})
                // slide1.removeEventListener('mouseout', function(){speedContinue(tl1)})
                
                // slide2.removeEventListener('mouseover', function(){slowStopAnimation(tl2)})
                // slide2.removeEventListener('mouseout', function(){speedContinue(tl2)})
                tl1.kill()
                tl2.kill()
            }
    })

   
    
    return (
        <>
            <div className="iconic-category-slide">
                <div className="row-category row1-line">
                    <div className="slide main-slide">
                    {
                        firstHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className="slide clone-slide">
                    {
                        firstHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className="slide clone-slide" >
                    {
                        firstHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                   
                </div>
                <div className="row-category row2-line">
                <div className="slide main-slide">
                    {
                        secondHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className="slide clone-slide">
                    {
                        secondHalf.map((value,index)=>{
                            return (
                                <div className="category-item" key={index}>
                                        <Link href={value.link}>
                                            <div className="category-name">{value.name}</div>
                                        </Link>
                            
                                </div>
                            )
                        })
                    }

                    </div>
                   
                </div>
            </div>
        </>
    )
}