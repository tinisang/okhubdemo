import Link from 'next/link';
import Image from 'next/image';
import anna from '../../../public/imgs/anna.png'
import image2 from '../../../public/imgs/image2.png'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export const OurServices = ()=>{
    gsap.registerPlugin(ScrollToPlugin);

    const cursor= useRef()
    const slidecursor = useRef()

    const data =[
        {
            title: 'UI/UX Design',
            image: '',
            color:'#00ADEF',
            link:'#'
        },
        
        {
            title: 'Branding',
            image: '',
            color:'rgba(65, 192, 21, 0.97)',
            link:'#'
        },
        {
            title: 'Web + App Development',
            image: '',
            color:'#C1C6D7',
            link:'#'
        },
        {    
            title: 'Quảng Cáo',
            image: '',
            color:'#C87D55',
            link:'#'
        },
        {
            title: 'SEO',
            image: '',
            color:'#B9D6DE',
            link:'#'
        },
        {
            title: 'Quản trị Website',
            image: '',
            color:'#08183B',
            link:'#'
        },
        {
            title: 'Quản trị Fanpage',
            image: '',
            color:'#FCD8E4',
            link:'#'
        },

    ]
    
    const handleHover=(index)=>{
        var viewButton= document.querySelector('.view-button');
        viewButton.innerText= 'View'
        var element = document.querySelector(`.cursor-box .cursor-wrapper .service-item-image:nth-child(${index})`)
        gsap.to(slidecursor.current,{
            scrollTo:{
                y:element
            },
            duration:0.8,
            ease:'power2.out',
           
        })
        gsap.to(cursor.current,{
            opacity:1
        })
        gsap.to(viewButton,{
            width:50,
            height:50
        })
    }

    const handleMouseOut=()=>{
        
        gsap.to(cursor.current,{
            opacity:0,
            
        })
        var viewButton= document.querySelector('.view-button');
        viewButton.innerText=''
        gsap.to(viewButton,{
            width:30,
            height:30
        })
        
    }


    useEffect(()=>{

        var viewButton= document.querySelector('.view-button');
        window.addEventListener('mousemove',function(e){
            console.log(viewButton)
            
            gsap.to(cursor.current,{
                x: e.clientX - cursor.current.clientWidth/2, 
                y: e.clientY - cursor.current.clientHeight/2, 
                ease:"power2.out",
                duration:2
            })
            gsap.to(viewButton,{
                x: e.clientX - viewButton.clientWidth/2, 
                y: e.clientY - viewButton.clientHeight/2, 
                ease:"power2.out",
                duration:1
            })
        })
        return ()=>{
            window.removeEventListener('mousemove',function(){})
        }
    })
    
    return (
        <>
            <div className="our-services">
            <div className="introduction container-padding">
                <div className="title">Our Services</div>
                <div className="description">
                    Đa dạng hóa sản phẩm và dịch vụ là một quá trình nghiên cứu thị trường và nhu cầu của doanh nghiệp trong thời điểm hiện tại.
                </div>
            </div>
            <div className="services-container">
                <div className="services-list container-padding">
                    
                    <div className="row">

                    <Link href="#">
                        <span className="service-item" onMouseOver={()=>handleHover(1)} onMouseOut={handleMouseOut}>
                            <span className="name">UI/UX Design</span>
                            <span className="index">01</span>
                        </span>
                    </Link>
                    <span className="separator">/</span>

                    <Link href="#">
                        <span className="service-item"  onMouseOver={()=>handleHover(2)} onMouseOut={handleMouseOut}>
                            <span className="name">Branding</span>
                            <span className="index">02</span>
                        </span>
                    </Link>

                    
                        
                    </div>
                    
                    <div className="row">
                        <Link href="#">
                            <span className="service-item"  onMouseOver={()=>handleHover(3)} onMouseOut={handleMouseOut}>
                                <span className="name">Web + App Development</span>
                                <span className="index">03</span>
                            </span>
                        </Link>
                    </div>
                    
                    
                    <div className="row">
                        <Link href="#">
                            <span className="service-item"  onMouseOver={()=>handleHover(4)} onMouseOut={handleMouseOut}>
                                <span className="name">Quảng cáo</span>
                                <span className="index">04</span>
                            </span>
                        </Link>
                    

                        <span className="separator">/</span>

                        <Link href="#">
                            <span className="service-item" onMouseOver={()=>handleHover(5)} onMouseOut={handleMouseOut}>
                                <span className="name">S.E.O</span>
                                <span className="index">05</span>
                            </span>
                        </Link>
                        
                    </div>

                    <div className="row">
                        <Link href="#">
                            <span className="service-item" onMouseOver={()=>handleHover(6)} onMouseOut={handleMouseOut}>
                                <span className="name">Quản trị Website</span>
                                <span className="index">06</span>
                            </span>
                        </Link>
                    

                        <span className="separator">/</span>

                        <Link href="#">
                            <span className="service-item"  onMouseOver={()=>handleHover(7)} onMouseOut={handleMouseOut}>
                                <span className="name">Quản trị Fanpage</span>
                                <span className="index">07</span>
                            </span>
                        </Link>
                        
                    </div>


                </div>
                <div className="services-list services-list-clone container-padding">
                    
                    <div className="row">

                    <Link href="#">
                        <span className="service-item" onMouseOver={()=>handleHover(1)} onMouseOut={handleMouseOut}>
                            <span className="name">UI/UX Design</span>
                            <span className="index">01</span>
                        </span>
                    </Link>
                    <span className="separator">/</span>

                    <Link href="#">
                        <span className="service-item"  onMouseOver={()=>handleHover(2)} onMouseOut={handleMouseOut}>
                            <span className="name">Branding</span>
                            <span className="index">02</span>
                        </span>
                    </Link>

                    
                        
                    </div>
                    
                    <div className="row">
                        <Link href="#">
                            <span className="service-item"  onMouseOver={()=>handleHover(3)} onMouseOut={handleMouseOut}>
                                <span className="name">Web + App Development</span>
                                <span className="index">03</span>
                            </span>
                        </Link>
                    </div>
                    
                    
                    <div className="row">
                        <Link href="#">
                            <span className="service-item"  onMouseOver={()=>handleHover(4)} onMouseOut={handleMouseOut}>
                                <span className="name">Quảng cáo</span>
                                <span className="index">04</span>
                            </span>
                        </Link>
                    

                        <span className="separator">/</span>

                        <Link href="#">
                            <span className="service-item" onMouseOver={()=>handleHover(5)} onMouseOut={handleMouseOut}>
                                <span className="name">S.E.O</span>
                                <span className="index">05</span>
                            </span>
                        </Link>
                        
                    </div>

                    <div className="row">
                        <Link href="#">
                            <span className="service-item" onMouseOver={()=>handleHover(6)} onMouseOut={handleMouseOut}>
                                <span className="name">Quản trị Website</span>
                                <span className="index">06</span>
                            </span>
                        </Link>
                    

                        <span className="separator">/</span>

                        <Link href="#">
                            <span className="service-item"  onMouseOver={()=>handleHover(7)} onMouseOut={handleMouseOut}>
                                <span className="name">Quản trị Fanpage</span>
                                <span className="index">07</span>
                            </span>
                        </Link>
                        
                    </div>


                </div>

            </div>

            <div className="view-button">
                
            </div>
            <div className="cursor-box" ref={cursor}>
                <div className="cursor-wrapper" ref={slidecursor}>

                    <div className="image-container service-item-image">
                        <Image src={anna} fill className='image-item'/>
                    </div>
                    <div className="image-container service-item-image">
                        <Image src={image2} fill className='image-item'/>
                    </div>
                    <div className="image-container service-item-image">
                        <Image src={anna} fill className='image-item'/>
                    </div>
                    <div className="image-container service-item-image">
                        <Image src={image2} fill className='image-item'/>
                    </div>
                    <div className="image-container service-item-image">
                        <Image src={anna} fill className='image-item'/>
                    </div>
                    <div className="image-container service-item-image">
                        <Image src={image2} fill className='image-item'/>
                    </div>
                    <div className="image-container service-item-image">
                        <Image src={anna} fill className='image-item'/>
                    </div>

                </div>
            </div>

            </div>
        </>
    )
}