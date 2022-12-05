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

import { useLocomotiveScroll } from "react-locomotive-scroll"

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
    const { scroll: locoScroll } = useLocomotiveScroll()
    
    useEffect(()=>{

        const svg =document.querySelector('.svgImage svg path')
        const svgWidth=svg.getTotalLength()
        svg.style.strokeDashoffset = svgWidth;
        svg.style.strokeDasharray = svgWidth;

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.client-section',
                start:'300px 90%',
                end:'70% 90%',
                //  ,
                toggleActions:'restart ',
                scrub:1,
                
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
                //  ,
              
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
            if(tl.scrollTrigger){tl.scrollTrigger.kill()}
            if(tl1.scrollTrigger){tl1.scrollTrigger.kill()}
            if(tl2.scrollTrigger){tl2.scrollTrigger.kill()}
            tl.kill()
            tl1.kill()
            tl2.kill()
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

                    
                    <svg width="1600" height="622" viewBox="0 0 1600 622" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-8.33152 184.592C-8.33152 184.592 158.376 212.213 165.456 206.721C172.537 201.228 318.665 -15.0319 341.067 2.44751C363.469 19.9269 664.717 224.614 663.905 238.198C663.093 251.781 505.94 454.727 495.072 454.262C484.204 453.798 171.725 236.752 185.112 217.436C198.499 198.119 321.718 18.3093 341.197 29.9209C360.676 41.5326 688.664 265.338 687.921 276.903C687.178 288.469 564.878 459.745 558.706 458.102C552.534 456.46 522.985 447.452 528.412 440.537C533.838 433.622 557.402 411.025 561.896 411.598C566.39 412.17 603.423 431.512 607.407 440.837C611.391 450.163 628.303 489.636 637.817 496.802C647.331 503.969 652.266 507.46 651.479 511.184C650.692 514.908 638.162 520.291 632.458 517.434C626.754 514.576 619.999 497.041 624.011 495.337C628.023 493.633 664.504 516.332 669.148 526.368C673.792 536.404 674.833 537.895 674.194 544.061C673.555 550.228 667.13 560.066 656.88 557.696C646.63 555.325 632.564 539.366 635.608 531.835C638.653 524.303 652.634 516.2 656.229 519.081C659.824 521.963 707.133 559.685 706.97 570.468C706.806 581.25 700.653 587.32 693.61 588.262C686.567 589.204 664.199 579.481 664.391 569.622C664.583 559.763 675.595 547.144 682.256 551.001C688.918 554.859 741.057 599.026 741.45 602.983C741.842 606.941 726.298 611.105 713.486 604.292C700.674 597.478 705.669 579.705 711.576 582.275C717.484 584.845 760.831 610.78 781.451 618.337C802.072 625.894 816.319 614.23 813.853 607.23C811.387 600.229 791.262 593.696 784.813 584.726C778.365 575.755 745.13 543.127 744.077 546.649C743.024 550.172 785.415 594.247 794.081 600.219C802.746 606.191 810.771 607.527 826.683 606.209C842.595 604.892 855.897 591.646 854.222 588.089C852.548 584.533 826.077 568.06 818.352 559.45C810.628 550.84 781.046 513.598 776.668 514.566C772.291 515.534 811.246 562.85 825.358 574.363C839.469 585.876 851.753 591.431 865.291 588.287C878.829 585.142 918.849 571.034 911.819 566.796C904.789 562.558 885.032 562.466 868.255 543.885C851.478 525.303 822.275 462.806 819.787 468.59C817.299 474.375 855.661 547.15 872.316 557.19C888.971 567.23 910.21 569.934 925.931 565.856C941.653 561.777 961.522 532.002 954.683 526.263C947.844 520.523 944.499 524.36 933.344 519.596C922.189 514.833 878.549 451.081 853.863 415.675C829.177 380.269 795.895 365.04 783.952 365.651C772.009 366.261 761.878 366.56 760.544 366.39C759.21 366.22 749.482 390.871 729.272 396.133C709.063 401.396 683.332 395.32 690.287 381.808C697.241 368.297 709.194 373.016 717.58 346.459C725.966 319.903 727.642 315.749 742.664 312.417C757.685 309.085 806.8 306.417 817.545 308.015C828.289 309.612 865.298 328.492 861.433 319.537C857.569 310.582 848.351 293.883 813.589 289.457C778.828 285.031 690.789 272.233 695.752 278.13C700.714 284.028 818.291 300.357 834.294 305.362C850.298 310.367 873.58 329.776 895.891 335.355C918.203 340.933 938.307 329.785 942.146 333.701C945.985 337.617 944.75 374.173 979.672 405.345C1014.59 436.517 1033.68 465.819 1031.41 469.187C1029.15 472.556 1004.51 482.478 994.652 495.85C984.796 509.222 958.13 517.695 949.355 517.498C940.58 517.3 922.728 499.794 915.669 483.662C908.61 467.53 917.841 464.15 920.591 471.208C923.342 478.266 943.992 509.501 956.028 508.004C968.063 506.506 991.651 488.468 1001.42 479.055C1011.19 469.642 1018.36 462.949 1021.64 463.367C1024.93 463.785 1032.99 486.419 1046.01 482.141C1059.02 477.864 1083.05 469.661 1082.53 465.019C1082.02 460.377 1041.71 398.993 1029.26 370.119C1016.82 341.245 983.596 306.235 981.188 305.49C978.781 304.745 944.002 328.128 947.055 329.541C950.107 330.954 980.415 317.95 980.757 312.811C981.098 307.673 975.048 301.637 976.665 298.436C978.282 295.236 1201.24 96.2608 1222.01 99.5941C1242.77 102.927 1404.71 302.394 1399.03 309.882C1393.34 317.369 1120.38 495.038 1110.69 485.593C1101.01 476.148 996.126 305.929 1002.71 297.114C1009.3 288.299 1194.9 107.092 1215.85 121.566C1236.8 136.039 1386.16 320.029 1394.14 321.881C1402.12 323.732 1607.55 349.055 1607.55 349.055" stroke="#282828" strokeWidth="1.61" strokeMiterlimit="10"/>
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