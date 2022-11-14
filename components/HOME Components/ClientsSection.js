import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

import gumac from '../../public/imgs/gumac.png'
import dangtau from '../../public/imgs/dangtau.png'
import bear from '../../public/imgs/bear.png'
import osala from '../../public/imgs/osala.png'
import kimme from '../../public/imgs/kimme.png'
import connektrip from '../../public/imgs/connektrip.png'
import phugiahung from '../../public/imgs/phugiahung.png'
import annaimage from '../../public/imgs/annaimage.png'
import baa from '../../public/imgs/baa.png'
import menology from '../../public/imgs/menology.png'
import sobanhang from '../../public/imgs/sobanhang.png'

import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ClientsSection=()=>{

    const data = [
        {
            image: gumac,
            link:'/'
        },
        {
            image: dangtau,
            link:'/'
        },
        {
            image: bear,
            link:'/'
        },
        {
            image: osala,
            link:'/'
        },
        {
            image: kimme,
            link:'/'
        },
        {
            image: connektrip,
            link:'/'
        },
        {
            image: phugiahung,
            link:'/'
        },
        {
            image: annaimage,
            link:'/'
        },
        {
            image: baa,
            link:'/'
        },
        {
            image: menology,
            link:'/'
        },
        {
            image: sobanhang,
            link:'/'
        },
        
    ]
    
    const half = Math.ceil(data.length / 2); 
    
    const firstHalf = data.slice(0, half)
    const secondHalf = data.slice(half)
    const contactButton = useRef()

    useEffect(()=>{

        const svg =document.querySelector('.svgImage svg path')
        const svgWidth=svg.getTotalLength()
        svg.style.strokeDashoffset = svgWidth;
        svg.style.strokeDasharray = svgWidth;
        console.log(svg)
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.client-section',
                start:'300px 90%',
                end:'100% 90%',
     
                toggleActions:'restart ',
                scrub:true
            },
        })
        tl.to('.svgImage svg path',{
            strokeDashoffset:0,
            
            duration:9
        })
    


        const slide1 = document.querySelector('.clients-list .row1-line')
        const slide2 = document.querySelector('.clients-list .row2-line')
       
        const slide1Width = document.querySelector('.clients-list .row1-line .main-slide').scrollWidth;
        const slide2Width = document.querySelector('.clients-list .row2-line .main-slide').scrollWidth;
        slide2.style.transform=`translateX(${-1*slide2Width}px)`

        const tl1=gsap.timeline({
            scrollTrigger:{
                trigger: '.clients-list',
                start:'top 100%',
                end:'bottom 0%',
                toggleActions:'play pause resume play',
              
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: '.clients-list',
                start:'top 100%',
                end:'bottom 0%',
                toggleActions:'play pause resume play',
                // markers:true,
              
            }
        })
            tl1.to(slide1,{
                duration:17,
                x:`-=${slide1Width+40}px`,
                repeat:-1,
                ease:'none'
            })
            tl2.to(slide2,{
                duration:19,
                x:`+=${slide2Width+40}px`,
                repeat:-1,
                ease:'none'
            })
        
        

        return ()=>{
            tl.scrollTrigger.kill()
        }
    })
    
    
    return (
        <>

            <div className="client-section">
                <div className="clients-introduction ">
                    <div className="column-1">
                        <span className="value">
                            <span className="number">100</span>
                            <span className="symbol">+</span>
                        </span>
                        <div className="description">
                            <b>Doanh nghiệp</b> đã thành công <br/>với giải pháp từ OkHub Agency
                        </div>
                    </div>

                    <div className="column-2">
                    <div className="svgImage">

                    
                        <svg width="836" height="296" viewBox="0 0 836 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_566_1858)">
                            <path className="path" d="M0 124.354C0 124.354 87.0529 127.621 90.3161 124.354C93.5794 121.087 154.227 1.06781 166.822 8.54229C179.417 16.0168 346.804 101.012 347.273 108.006C347.742 115 280.589 228.933 275.001 229.402C269.413 229.872 95.4777 139.292 101.066 128.55C106.654 117.808 157.96 17.9067 168.678 22.573C179.395 27.2392 361.702 120.264 362.075 126.223C362.448 132.181 311.057 227.662 307.794 227.224C304.53 226.786 288.832 224.106 291.157 220.22C293.482 216.333 304.061 203.252 306.397 203.252C308.732 203.252 328.93 210.727 331.575 215.233C334.22 219.739 345.439 238.81 350.771 241.853C356.103 244.896 358.854 246.359 358.694 248.313C358.535 250.267 352.477 253.833 349.374 252.744C346.271 251.655 341.674 243.134 343.615 242.002C345.556 240.87 365.69 250.096 368.719 254.922C371.748 259.749 372.377 260.443 372.451 263.636C372.526 266.828 369.881 272.274 364.485 271.729C359.089 271.185 350.856 263.945 351.923 259.898C352.989 255.851 359.612 250.801 361.638 252.039C363.664 253.278 390.314 269.476 390.933 274.997C391.551 280.517 388.8 284.02 385.259 284.959C381.719 285.899 369.647 282.386 369.103 277.335C368.559 272.285 373.369 265.12 377.026 266.657C380.684 268.195 410.224 287.372 410.683 289.369C411.142 291.366 403.463 294.505 396.468 291.857C389.472 289.209 390.869 279.802 394.057 280.731C397.246 281.66 421.102 292.092 432.14 294.612C443.177 297.132 449.704 290.245 447.987 286.828C446.27 283.411 435.552 281.382 431.67 277.218C427.789 273.053 408.668 258.542 408.358 260.411C408.049 262.279 432.598 282.044 437.419 284.532C442.239 287.02 446.43 287.18 454.481 285.472C462.533 283.763 468.473 276.129 467.385 274.42C466.297 272.712 451.687 266.017 447.176 262.119C442.665 258.222 425.112 241.116 422.936 241.896C420.761 242.675 443.764 264.319 451.73 269.284C459.696 274.249 466.34 276.289 473.059 273.801C479.777 271.313 499.325 261.5 495.454 259.792C491.583 258.083 481.473 259.322 471.683 250.918C461.893 242.515 442.889 212.478 441.993 215.596C441.098 218.714 465.455 253.406 474.626 257.453C483.798 261.5 494.835 261.5 502.61 258.393C510.384 255.286 518.606 238.778 514.735 236.29C510.864 233.802 509.403 235.98 503.388 234.272C497.373 232.563 470.904 202.825 455.974 186.339C441.044 169.852 423.032 164.236 416.964 165.325C410.896 166.414 405.735 167.225 405.042 167.225C404.348 167.225 400.979 180.455 390.986 184.459C380.994 188.464 367.439 187.033 370.116 179.676C372.793 172.319 379.213 173.953 381.772 159.836C384.332 145.72 384.918 143.489 392.383 140.809C399.848 138.128 424.792 133.569 430.391 133.686C435.989 133.804 456.145 141.043 453.586 136.719C451.026 132.394 445.225 124.461 427.159 124.461C409.094 124.461 363.237 123.649 366.16 126.34C369.082 129.031 430.273 129.725 438.784 131.241C447.294 132.757 460.464 141.161 472.238 142.56C484.011 143.958 493.566 136.954 495.784 138.705C498.003 140.456 499.751 159.217 519.64 172.874C539.529 186.531 551.196 200.263 550.258 202.131C549.319 204 537.365 210.674 533.195 218.148C529.025 225.623 515.94 231.688 511.44 232.157C506.939 232.627 496.669 224.843 492.009 217.059C487.349 209.275 491.849 206.947 493.715 210.375C495.582 213.802 508.176 228.42 514.234 226.872C520.291 225.324 531.179 214.571 535.562 209.125C539.945 203.68 543.177 199.793 544.883 199.793C546.589 199.793 552.188 210.834 558.565 207.801C564.942 204.769 576.695 199.013 576.129 196.675C575.564 194.336 550.951 165.592 542.707 151.647C534.464 137.701 515.193 121.973 513.914 121.749C512.634 121.524 496.371 135.737 498.024 136.26C499.677 136.783 514.33 128.166 514.17 125.518C514.01 122.87 510.522 120.179 511.141 118.438C511.759 116.698 612.825 0.512567 623.66 0.864936C634.495 1.2173 730.303 92.6088 727.883 96.8052C725.462 101.002 597.437 209.552 591.87 205.356C586.303 201.16 521.581 121.001 524.375 116.068C527.169 111.135 610.287 6.46012 621.943 12.4931C633.599 18.5261 721.964 102.827 726.166 103.255C730.367 103.682 837.075 103.255 837.075 103.255" stroke="#282828" stroke-width="1.61" stroke-miterlimit="10"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_566_1858">
                            <rect width="837" height="296" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                        <div className="contact-button" ref={contactButton}>
                            <Link href='/'>
                                    Liên hệ
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="clients-list">
                    <div className="row1-line line">
                        <div className="slide-client main-slide">
                        {
                            firstHalf.map((value, index)=>{
                                return (
                                    <div key={index} className="client-item">
                                        <Link href={value.link}>
                                            <Image alt='' src={value.image} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        </div>
                        <div className="slide-client clone-slide">
                        {
                            firstHalf.map((value, index)=>{
                                return (
                                    <div key={index} className="client-item">
                                        <Link href={value.link}>
                                            <Image alt='' src={value.image} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        </div>
                        <div className="slide-client clone-slide">
                        {
                            firstHalf.map((value, index)=>{
                                return (
                                    <div key={index} className="client-item">
                                        <Link href={value.link}>
                                            <Image alt='' src={value.image} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="row2-line line">
                        <div className="slide-client main-slide">
                        {
                            secondHalf.map((value, index)=>{
                                return (
                                    <div key={index} className="client-item">
                                        <Link href={value.link}>
                                            <Image alt='' src={value.image} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        </div>
                        <div className="slide-client clone-slide">
                        {
                            secondHalf.map((value, index)=>{
                                return (
                                    <div key={index} className="client-item">
                                        <Link href={value.link}>
                                            <Image alt='' src={value.image} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        </div>
                        <div className="slide-client clone-slide">
                        {
                            secondHalf.map((value, index)=>{
                                return (
                                    <div key={index} className="client-item">
                                        <Link href={value.link}>
                                            <Image alt='' src={value.image} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}