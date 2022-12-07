import Link from 'next/link';
import Image from 'next/image';

import image1 from '../../../public/imgs/image1.jpg'
import image2 from '../../../public/imgs/image2.jpg'
import image3 from '../../../public/imgs/image3.jpg'
import image4 from '../../../public/imgs/image4.jpg'
import image5 from '../../../public/imgs/image5.jpg'
import image6 from '../../../public/imgs/image6.jpg'
import image7 from '../../../public/imgs/image7.jpg'
import newsicon from "../../../public/imgs/newsicon.svg"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

import { PostMarqueSlide } from './PostMarqueeSlide';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { ScrollTriggerProxy } from '../../ScrollTriggerProxy';
import { Refresh } from '../../RefreshScrollTriger';



export const ExpandSection = ()=>{
    const {scroll : locoScroll} = useLocomotiveScroll()
    const pin=useRef()
    const services =useRef()
    const brightness = useRef(1)
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger)

    const cursor= useRef()

    const mousePos = useRef({
        x: 0,
        y:0
    })

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
    function radians_to_degrees(radians)
    {
      var pi = Math.PI;
      return radians * (180/pi);
    }
              
    
    useEffect(()=>{
        
        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:'.trigger-pin',
        
                start: '200px 0%',
                end:'200% 0%',
                toggleActions:'play none none reverse',
                scroller:'[data-scroll-container]',
           
              
            }
        })
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.trigger-pin',
                pin:'.trigger-pin',
                pinSpacing:true,
                start: '0% 0%',
                end:'200% 0%',
                scroller:'[data-scroll-container]',
         
                scrub:1
              
              
            },
            ease:'power2.out'

        })


        var viewButton= document.querySelector('.view-button');
        //animate cursor on locoScroll scrolling

        function upDateCursor(){
            if (locoScroll){

            }
        }

        
     
            locoScroll?.on('scroll',function(args){
                if (cursor.current){

                    gsap.to(cursor.current,{
                        top:  mousePos.current.y- cursor.current.clientHeight/2 + args.scroll.y,
                        duration:0
                    },"<+=0")
                }

                if (viewButton){

                    
                    gsap.to(viewButton,{
                        top: mousePos.current.y- viewButton.clientHeight/2  + args.scroll.y,
                        duration:0
                    },"<+=0")
                }
            })
        
        
        const cursorAni = (e)=>{
            var y = e.clientY  - cursor.current.clientHeight/2 -cursor.current.getBoundingClientRect().y
            var x = e.clientX  - cursor.current.clientWidth/2 - cursor.current.getBoundingClientRect().x
            var degree = Math.floor(radians_to_degrees(Math.atan2(x,y))*0.12)
            
            if (Math.floor(Math.abs(x))< 50){
                degree=0
                brightness.current=1
            } else{
                brightness.current = 1+ 0.5 *(Math.floor(Math.abs(x))/200 );
                
            }
    
            gsap.to(cursor.current,{
                left: e.clientX - cursor.current.clientWidth/2, 
                top: e.clientY - cursor.current.clientHeight/2 + (locoScroll ? locoScroll.scroll.instance.scroll.y :0) , 
                ease:"power2.out",
                rotate:`${degree}deg`,
                filter:`brightness(${brightness.current})`,
                duration:1
             
               
                
            },'<+=0')
            var viewButton= document.querySelector('.view-button');

            
            gsap.to(viewButton,{
                left: e.clientX - viewButton.clientWidth/2, 
                top: e.clientY - viewButton.clientHeight/2 + (locoScroll ? locoScroll.scroll.instance.scroll.y :0) , 
                ease:"power2.out",
                opacity:1,
              
            },'<+=0')
    
    
            mousePos.current={
                x:e.clientX,
                y:e.clientY
            }
    
     
    }    

        tl1
            .to('.services',{
                clipPath:'circle(80% at 50% 35%)',
                duration:1,
                ease:'power2.out'
            })


        window.addEventListener('mousemove',cursorAni)
        tl.scrollTrigger.refresh()
        tl1.scrollTrigger.refresh()

        return ()=>{
            if(tl.scrollTrigger){tl.scrollTrigger.kill()}
            if(tl1.scrollTrigger){tl1.scrollTrigger.kill()}
            tl.kill()
            tl1.kill()
        
         
            window.removeEventListener('mousemove',cursorAni)
          }
    
    })
  

    return (
        <>
        
       
        <div className="view-button"></div>
        <div className="cursor-box" ref={cursor}>
            <div className='card__project--img-sub'>
                <div className='img-eclipse'></div>
                <div className='img-eclipse'></div>
                <div className='img-eclipse'></div>
                
            </div>
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
    
            
           
        <div className="trigger-pin" ref={pin} >

    
            <div className="hero-section-expand">
               <PostMarqueSlide/>
                <div className="content-area">
                    <div className="row1" data-scroll data-scroll-direction='vertical' data-scroll-speed = '1.01'>
                        <span className="word-split big-text" data-scroll data-scroll-direction='horizontal' data-scroll-speed = '1.1'>Okhub</span>

                        <svg width="78" height="120" viewBox="0 0 78 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                          
                            {/* <clipPath id="mask" clipPathUnits="objectBoundingBox"> */}

                            <circle cx="46.5" cy="85.5" r="4.5" fill="#444444"/>
                            {/* </clipPath> */}
                            
                            <path d="M43.5956 73.1377C43.6288 73.2538 43.662 73.3699 43.6952 73.4695C43.7615 73.6022 43.8279 73.735 43.9109 73.8677C43.944 73.9175 43.9606 73.9838 43.9938 74.0336C44.0934 74.1995 44.2261 74.3323 44.3588 74.4816C44.3754 74.4982 44.3754 74.5148 44.392 74.5314C44.9893 75.1453 45.8023 75.5103 46.6983 75.5435V75.5601C46.7979 75.5601 46.914 75.5601 47.0136 75.5767C48.4571 75.6596 49.801 76.0744 50.9956 76.7381C54.1813 78.2314 56.388 81.417 56.5208 85.0838C56.5208 85.0673 56.5208 85.0341 56.5208 85.0175C56.5208 86.3448 57.284 87.4731 58.3791 88.0372C58.8436 88.2861 59.3746 88.4355 59.9387 88.4355C60.2374 88.4355 60.5194 88.3857 60.8015 88.3193C62.245 87.9377 63.3235 86.6601 63.3566 85.1005C63.3566 85.0673 63.3566 85.0506 63.3566 85.0175C63.3566 84.9843 63.3401 84.9511 63.3401 84.9179C63.0912 76.456 56.4212 69.4044 47.81 68.8569C47.4781 68.8403 47.1463 68.8237 46.8311 68.8237C46.8145 68.8237 46.7979 68.8237 46.7813 68.8237C46.7647 68.8237 46.7647 68.8237 46.7481 68.8237C46.7149 68.8237 46.6817 68.8237 46.6651 68.8237L46.6485 68.8403C45.0225 68.9067 43.7118 70.1013 43.4629 71.6776C43.4297 71.8435 43.4131 72.026 43.4131 72.2085C43.4131 72.4408 43.4297 72.6565 43.4795 72.8722C43.5292 72.9385 43.5624 73.0381 43.5956 73.1377Z" fill="url(#paint0_linear_941_2413)"/>
                            <path d="M77.1116 84.0715C77.1116 84.0549 77.1116 84.0217 77.1116 84.0051V83.9885C76.5143 68.8898 64.9828 56.6781 50.2989 54.8862C50.1828 54.8696 50.0666 54.853 49.9339 54.8364C49.7846 54.8198 49.6519 54.8198 49.5025 54.8198C46.9971 54.8198 44.9397 56.6781 44.6079 59.084C44.5747 59.3163 44.5581 59.532 44.5581 59.7643C44.5581 59.7974 44.5581 59.8472 44.5581 59.8804C44.5581 60.1458 44.5913 60.4113 44.6411 60.6602C44.6411 60.6934 44.6577 60.7432 44.6577 60.7763C44.7074 61.0252 44.7738 61.2575 44.8568 61.4732C44.8734 61.523 44.89 61.5562 44.9065 61.6059C44.9895 61.8382 45.1057 62.0539 45.2218 62.253C45.2384 62.2862 45.255 62.3194 45.2716 62.336C45.4043 62.5517 45.537 62.7508 45.703 62.9499C45.8689 63.149 46.0514 63.3149 46.2339 63.4808C46.2671 63.4974 46.2837 63.5306 46.3169 63.5472C46.4994 63.6965 46.6985 63.8459 46.8976 63.962C46.9308 63.9786 46.964 64.0118 47.0137 64.0284C47.2294 64.1445 47.4451 64.2606 47.6608 64.3436C47.694 64.3602 47.7272 64.3602 47.7604 64.3768C47.9927 64.4598 48.2415 64.5427 48.507 64.5925L48.5236 64.6257C52.0245 64.9741 55.2931 66.1687 58.064 68.0436C60.6689 69.7526 62.8259 72.0589 64.3689 74.7468C65.9949 77.5177 67.007 80.7199 67.1896 84.1378C67.2061 84.3037 67.2062 84.4697 67.2062 84.6522C67.2228 85.5316 67.4716 86.3446 67.8864 87.058C67.8864 87.058 67.8864 87.058 67.8864 87.0746C67.986 87.2406 68.1021 87.4064 68.2183 87.5724C68.2349 87.6056 68.268 87.6222 68.2846 87.6554C68.3012 87.6719 68.3178 87.6885 68.3178 87.7051C68.3178 87.7051 68.3178 87.7217 68.3344 87.7217C68.4174 87.8212 68.5169 87.9374 68.5999 88.0369C68.6497 88.0867 68.716 88.1365 68.7658 88.1863C68.8322 88.236 68.882 88.3024 68.9483 88.3522C68.9815 88.3854 69.0147 88.4186 69.0479 88.4352C69.0811 88.4518 69.1142 88.4683 69.1308 88.5015C69.7115 88.9329 70.3752 89.2648 71.1053 89.4141C71.3707 89.4639 71.6528 89.4971 71.9349 89.5137C72.0012 89.5137 72.051 89.5302 72.1174 89.5302C74.8053 89.5302 76.9954 87.3733 77.0618 84.702C77.0618 84.702 77.0571 84.8605 77.0571 84.8273C77.1069 84.6399 77.1116 84.2148 77.1116 84.0715Z" fill="url(#paint1_linear_941_2413)"/>
                            <path d="M60.3694 98.8719C59.6891 99.2867 58.9757 99.6849 58.2622 100.066C58.0797 100.166 57.9138 100.249 57.7313 100.349C52.2891 103.119 46.1335 104.696 39.5963 104.696C19.52 104.696 2.89483 89.8956 0.0244141 70.6157C0.173742 81.1516 2.49662 88.7342 3.24326 90.692C3.24326 90.692 3.24325 90.7086 3.25984 90.7086C6.16344 99.3199 11.224 107.002 19.0388 112.494C25.1944 116.808 32.4119 119.064 39.812 119.496C40.6416 119.545 41.4712 119.579 42.3008 119.579C54.8775 119.529 65.9277 112.992 72.2659 103.136C73.4605 101.278 74.4892 99.3199 75.3188 97.2459L71.4694 96.6154C67.6035 95.9517 63.7044 96.8476 60.3694 98.8719Z" fill="url(#paint2_linear_941_2413)"/>
                            <path d="M58.2632 100.05C58.9766 99.6685 59.6735 99.2869 60.3703 98.8555C60.2542 98.9218 60.1215 98.9882 60.0053 99.0711C59.4412 99.4361 58.8439 99.7514 58.2632 100.05Z" fill="#00AEEF"/>
                            <path d="M50.8795 102.273C50.1328 102.356 49.3696 102.389 48.6064 102.389C36.8924 102.389 27.3852 92.8985 27.3852 81.168C27.3852 73.5025 31.4503 66.7827 37.5561 63.0495C40.6588 61.158 41.4718 57.8397 41.3557 54.7867C41.1566 49.162 37.6391 43.9356 34.4866 38.0122C33.6736 36.4858 33.0099 34.8764 32.4292 33.2172C31.583 30.8113 31.0023 28.2727 30.6705 25.6678C30.5045 24.357 30.3884 23.0462 30.3552 21.7189C30.3552 21.4036 30.3552 21.0884 30.3552 20.7566C30.2888 18.3176 30.5045 15.8287 31.0023 13.3234C32.0144 8.31258 34.0718 3.79956 36.8924 0C36.4113 0.182512 35.9467 0.398199 35.4821 0.613895C32.844 1.82511 29.4427 4.29733 29.2767 4.41347C28.8122 4.72872 28.3642 5.09373 27.966 5.44217C25.6431 7.36683 23.6189 9.75609 21.9763 12.5104C21.7606 12.892 21.213 13.8543 21.1964 13.8709C21.0471 14.1364 20.9144 14.4018 20.7816 14.6839C20.6821 14.883 20.566 15.0821 20.4664 15.2978V15.3144C18.0108 20.3252 16.8991 25.9664 17.1314 31.5745C17.2475 34.2126 17.6292 36.8342 18.3426 39.3728C18.7574 40.8329 19.2718 42.2598 19.8857 43.6535C20.5825 45.2131 21.3955 46.7064 22.3247 48.1333C20.3171 45.7441 18.5251 43.1723 16.9987 40.4346C15.8372 38.3606 14.8251 36.2037 13.9457 33.9804C13.5143 32.9019 13.1162 31.8068 12.7677 30.6785C12.4525 29.7992 12.1538 28.9032 11.8717 28.0073C11.2744 29.0857 10.6771 30.214 10.0798 31.3754C8.6529 34.1795 7.80671 37.2987 7.72375 40.4844C7.72375 40.7167 7.70717 40.949 7.70717 41.1979C7.70717 41.2145 7.70717 41.2476 7.70717 41.2642C7.74035 43.9687 8.18832 46.6566 8.93496 49.2616C10.0798 53.2436 11.9049 57.0432 14.0287 60.4943C14.0287 60.4943 9.83093 56.6118 8.18832 54.6871C7.69056 54.0898 7.2094 53.4925 6.76141 52.8621C5.5502 51.236 4.47173 49.5271 3.2937 47.8679C1.94975 52.1652 1.08696 56.3298 0.589196 60.2621C0.124621 63.9455 -0.0412837 67.4298 0.00849222 70.632C2.8789 89.9119 19.4875 104.712 39.5803 104.712C46.1176 104.712 52.2732 103.136 57.7154 100.365C55.6082 101.327 53.3185 102.007 50.8795 102.273Z" fill="url(#paint3_linear_941_2413)"/>
                            <defs>
                            <linearGradient id="paint0_linear_941_2413" x1="40.9795" y1="60.6893" x2="62.0789" y2="87.4947" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6A6A6A"/>
                            <stop offset="0.432" stopColor="#444444"/>
                            <stop offset="1"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_941_2413" x1="50.0059" y1="52.1703" x2="72.6976" y2="86.6723" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6A6A6A"/>
                            <stop offset="0.432" stopColor="#444444"/>
                            <stop offset="1"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_941_2413" x1="3.22501" y1="92.5858" x2="70.8079" y2="102.936" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6A6A6A"/>
                            <stop offset="0.432" stopColor="#444444"/>
                            <stop offset="1"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_941_2413" x1="13.3247" y1="15.8926" x2="36.6799" y2="106.129" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6A6A6A"/>
                            <stop offset="0.432" stopColor="#444444"/>
                            <stop offset="1"/>
                            </linearGradient>
                            </defs>
                            </svg>

                        
                        <span className="word-split big-text" data-scroll data-scroll-direction='horizontal' data-scroll-speed = '-1.1'>Digital</span>
                    </div>
                    <div className="title big-text" data-scroll data-scroll-direction='vertical' data-scroll-speed = '1.006'>Lấy người dùng làm trung tâm</div>
                    <div className="description">
                    Tạo ra các điểm chạm vào trái tim và trải nghiệm người dùng 
                    <br/>
                    gắn liền với các thiết kế trong sản phẩm Digital
                    </div>
                    <a className="credential" href="/imgs/Credential.pdf" target={'blank'}>Credential</a>
                </div>
            </div>
           
            <div className="services" style={{
                clipPath:"circle(0% at 50% 35%)",
                transition:'all 0s'
              
            }} ref={services}>

<div className="our-services" ref={background}>
                <div className="introduction container-padding">
                    <div className="title">Our Services</div>
                    <div className="description">
                        Đa dạng hóa sản phẩm và dịch vụ là một quá trình nghiên cứu thị trường và nhu cầu của doanh nghiệp trong thời điểm hiện tại.
                    </div>
                </div>
                <div className="services-container">
                    
                    <div className="services-list services-list-clone container-padding">
                        
                        <div className="row">

                        <Link href="/">
                            <span className="service-item" onMouseOver={()=>handleHover(1)} onMouseOut={handleMouseOut}>
                                <span className="name">UI/UX Design</span>
                                <span className="index">01</span>
                            </span>
                        </Link>
                        <span className="separator">/</span>

                        <Link href="/">
                            <span className="service-item"  onMouseOver={()=>handleHover(2)} onMouseOut={handleMouseOut}>
                                <span className="name">Branding</span>
                                <span className="index">02</span>
                            </span>
                        </Link>

                        
                            
                        </div>
                        
                        <div className="row">
                            <Link href="/">
                                <span className="service-item"  onMouseOver={()=>handleHover(3)} onMouseOut={handleMouseOut}>
                                    <span className="name">Web + App Development</span>
                                    <span className="index">03</span>
                                </span>
                            </Link>
                        </div>
                        
                        
                        <div className="row">
                            <Link href="/">
                                <span className="service-item"  onMouseOver={()=>handleHover(4)} onMouseOut={handleMouseOut}>
                                    <span className="name">Quảng cáo</span>
                                    <span className="index">04</span>
                                </span>
                            </Link>
                        

                            <span className="separator">/</span>

                            <Link href="/">
                                <span className="service-item" onMouseOver={()=>handleHover(5)} onMouseOut={handleMouseOut}>
                                    <span className="name">S.E.O</span>
                                    <span className="index">05</span>
                                </span>
                            </Link>
                            
                        </div>

                        <div className="row">
                            <Link href="/">
                                <span className="service-item" onMouseOver={()=>handleHover(6)} onMouseOut={handleMouseOut}>
                                    <span className="name">Quản trị Website</span>
                                    <span className="index">06</span>
                                </span>
                            </Link>
                        

                            <span className="separator">/</span>

                            <Link href="/">
                                <span className="service-item"  onMouseOver={()=>handleHover(7)} onMouseOut={handleMouseOut}>
                                    <span className="name">Quản trị Fanpage</span>
                                    <span className="index">07</span>
                                </span>
                            </Link>
                            
                        </div>


                    </div>

                </div>

                
            </div>
            </div>
           
        </div>
    
        </>
    )
}
