import Link from 'next/link';
import Image from 'next/image';

import image1 from '../../../public/imgs/image1.jpg'
import image2 from '../../../public/imgs/image2.jpg'
import image3 from '../../../public/imgs/image3.jpg'
import image4 from '../../../public/imgs/image4.jpg'
import image5 from '../../../public/imgs/image5.jpg'
import image6 from '../../../public/imgs/image6.jpg'
import image7 from '../../../public/imgs/image7.jpg'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";


export const OurServices = ({heightTotal})=>{
    console.log(heightTotal)
    gsap.registerPlugin(ScrollToPlugin);

    const cursor= useRef()
    const slidecursor = useRef()
    const background = useRef()
    const data =[
        {
            title: 'UI/UX Design',
            image: '',
            color:'#3E3E3E',
            link:'#'
        },
        
        {
            title: 'Branding',
            image: '',
            color:'#24214F',
            link:'#'
        },
        {
            title: 'Web + App Development',
            image: '',
            color:'#1E4256',
            link:'#'
        },
        {    
            title: 'Quảng Cáo',
            image: '',
            color:'#3A674D',
            link:'#'
        },
        {
            title: 'SEO',
            image: '',
            color:'#984D43',
            link:'#'
        },
        {
            title: 'Quản trị Website',
            image: '',
            color:'#271148',
            link:'#'
        },
        {
            title: 'Quản trị Fanpage',
            image: '',
            color:'#101F49',
            link:'#'
        },

    ]
    
    const handleHover=(index)=>{
        var viewButton= document.querySelector('.view-button');
        viewButton.innerText= 'View'
        var element = document.querySelector(`.cursor-box .cursor-wrapper .service-item-image:nth-child(${index})`)
        gsap.to(slidecursor.current,{
            scrollTo:{
                y:element,
            },
            duration:1,
            ease:'power2.out',
           
        })
        gsap.to(cursor.current,{
            opacity:1,
     
            duration:0.5
        })
        gsap.to(viewButton,{
            width:70,
            height:70,
            duration:0.2
        })
        gsap.to(background.current,{
            backgroundColor:data[index-1].color,
            duration:0.5 
        })
        gsap.to(['.index','.separator'],{
            color:'rgba(255,255,255,0.3)',
            duration:0.2

        })
       
    }

    const handleMouseOut=()=>{
        
        gsap.to(cursor.current,{
            opacity:0,
           
            duration:0.5

            
        })
        var viewButton= document.querySelector('.view-button');
        viewButton.innerText=''
        gsap.to(viewButton,{
            width:20,
            height:20,
            duration:0.2
        })
        gsap.to(background.current,{
            backgroundColor:'black' 
        })
        
    }


    useEffect(()=>{

        
        window.addEventListener('mousemove',function(e){
            var servicesFromTop=background.current.offsetTop;
            var servicesHeight= background.current.clientHeight;
           
            gsap.to(cursor.current,{
                left: e.clientX - cursor.current.clientWidth/2, 
                top: e.clientY - cursor.current.clientHeight/2, 
                ease:"power2.out",
                duration:1,
                delay:0.04
            })
            var viewButton= document.querySelector('.view-button');
            
            gsap.to(viewButton,{
                left: e.clientX - viewButton.clientWidth/2, 
                top: e.clientY - viewButton.clientHeight/2, 
                ease:"power2.out",
                opacity:1,
                duration:1
            })
                
           
            
        })
        return ()=>{
            window.removeEventListener('mousemove',function(){})
         
        }
    })
    
    return (
        <>
            <div className="our-services" ref={background}>
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
                            <Image alt="" src={image1} fill className='image-item'/>
                        </div>
                        <div className="image-container service-item-image">
                            <Image alt="" src={image2} fill className='image-item'/>
                        </div>
                        <div className="image-container service-item-image">
                            <Image alt="" src={image3} fill className='image-item'/>
                        </div>
                        <div className="image-container service-item-image">
                            <Image alt="" src={image4} fill className='image-item'/>
                        </div>
                        <div className="image-container service-item-image">
                            <Image alt="" src={image5} fill className='image-item'/>
                        </div>
                        <div className="image-container service-item-image">
                            <Image alt="" src={image6} fill className='image-item'/>
                        </div>
                        <div className="image-container service-item-image">
                            <Image alt="" src={image7} fill className='image-item'/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}