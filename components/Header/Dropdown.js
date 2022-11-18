import Link from "next/link"
import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"

import facebookicon from '../../public/imgs/facebook.svg'

import dribbble from '../../public/imgs/dribbble.svg'
import be from '../../public/imgs/be.svg'
import insta from '../../public/imgs/insta.svg'
import tiktok from '../../public/imgs/tiktok.svg'

import imagefloat1 from '../../public/imgs/imagefloat1.png'




export const DropDown = ({status})=>{

    const imagesMenu = [
        [
            'https://blog-frontend.envato.com/cdn-cgi/image/width=820,quality=75,format=auto/uploads/2020/04/SOC091_FreeTutsCourses_WebDesign@2x.png',
            'https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg',
            'https://i.ytimg.com/vi/wQibFSsgXt8/maxresdefault.jpg',
            'https://www.webdesign.org/img_articles/23546/previewImage',
            'https://assets-global.website-files.com/5f15530648874c5f977e91c2/624337f42d9b9f46b3108df3_ABM%20College%20web%20design%20trends%20main.jpg'
        ],
        [
            'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1630316870/course-covers/000/002/312/2312-original.jpg?1630316870',
            'https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_xd_webdesignHeroIllustration?$pjpeg$&jpegSize=300&wid=1600',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgFAgVbuxs8xUwrHpw6mkFtty54q3BojjKA&usqp=CAU',
            'https://lptech.asia/uploads/files/2020/06/07/1.jpg',
            'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        ],
        [
            'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg',
            'https://media.npr.org/assets/img/2022/11/01/gettyimages-1189806758_custom-0a0266b3e82cfd9a1bb6016795a1a51b87277273-s1100-c50.jpg',
            'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
            'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
          
        ],
        [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bPF20leczByYgHOVHOg3b2mZjwMKmWxGvQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoruwy-5_j_KpZtsrV4SjEz4rw-VI2kQF3ZwAydzyqkEAhrbHCPctqTbRDIt1QUsxD4Zo&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKYe00NaD5SQjIMvXYPssq0r1dXJggL3ZIg&usqp=CAU',
            'https://d2zp5xs5cp8zlg.cloudfront.net/image-31454-800.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHPa_R-dvl8g9FZw0clByrfuPBhTsRYfBXQ&usqp=CAU'
        ],
        [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPw4zfFsoeBs9QGuEYPpu7_HP7tBwWLSlXjMXG4ZbrvNR_lk797rV15-lfjok5vyC2ONg&usqp=CAU',
            'https://media.istockphoto.com/id/490736905/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=OlOLvdryIdkdyKcY9gRPsM1RZa5HiP6QBr2JVAIvPb0=',
            'https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg',
            'https://helpx.adobe.com/content/dam/help/en/photoshop/using/matching-replacing-mixing-colors/jcr_content/main-pars/before_and_after/image-after/match-outcome3.png',
            'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?cs=srgb&dl=pexels-pengwhan-1767434.jpg&fm=jpg'
        ]
    ]

    const imageItems = useRef([])

    imageItems.current=[]
    
    
    const HandleMenuHover =(index)=>{
        imageItems.current = imageItems.current.filter(value => value != null)
       
        gsap.to(imageItems.current,{
              opacity:0,
                duration: 0.15,
                ease:'out'
             
            })
            imageItems.current.forEach((element,i)=>{
                element.querySelector('img').srcset = imagesMenu[index][i]
            })
        function changeImage(){
            
            gsap.from(imageItems.current.filter((value, index) => index % 2 ==0),{
                y:'-=80',
                duration: 0.8,
                ease:'out'
             
            })
            gsap.from(imageItems.current.filter((value, index) => index % 2 !=0),{
                y:'+=80',
                duration: 0.8,
                ease:'out'
             
            })
            gsap.to(imageItems.current,{
                opacity:0.5,
                duration:0.2
            })
           
           
        }
        setTimeout(changeImage,200)
    }
    useLayoutEffect(()=>{
        
    })
    useEffect(()=>{
        
        var timeline = gsap.timeline()
        var animationX= 30;
        var animationY=30;

        var center= {
            x: window.innerWidth /2,
            y: window.innerHeight /2
        };
        
     
        
        console.log(center)
        
        if (status){
            document.addEventListener('mousemove',function(e){
               var mouseX = e.clientX
               var mouseY = e.clientY;
    
               gsap.to('.image-tilt-item',{
                x: (mouseX - center.x)/center.x*animationX,
                y: (mouseY - center.y)/center.y*animationY,
               })
               
            })

            
            timeline
            .from('.menu-item',{
                x:300,
                opacity:0.6,
                duration:0.8,
                stagger:0.1,
                    ease:'out'
                })
                .from('.contact-area .heading',{
                    y:30,
                    opacity:0,
                    duration:0.4,
                    ease:'out'
                },"<+=0.5")
                .from('.social-wrapper',{
                    y:30,
                    opacity:0,
                    duration:0.4,
                    ease:'out'
                },"<+=0.1")
                .from('.image-tilt-item',{
                    x:100,
                    
                    duration:0.7,
                    stagger:0.1,
                    ease:'out'
                },"+0.2")
                
                

                
                
                
        } else {
            timeline
                .to('.menu-item',{x:0, duration:0.1})
                
                document.removeEventListener('mousemove',function(){})
            }
            
            return ()=>{
                timeline.kill();
                
        }
        
    })
    
    
    return (
        <>
    
            <div className={"container-padding dropdown-section "+ (status ? 'opening' : '')}>
                    <div className="dropdown-wrapper">
                        <div className="menu-area">
                            <div className="menu-item" onMouseEnter={()=>HandleMenuHover(0)}>
                                <div className="parent"><Link href='/'>Về chúng tôi</Link></div>
                                <ul className="sub-menu">
                                    <li className="child-link">
                                        <Link href='/'>Câu chuyện Okhub</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>Đối tác</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-item" onMouseEnter={()=>HandleMenuHover(1)}>
                                <div className="parent"><Link href='/'>Dịch vụ</Link></div>
                                <ul className="sub-menu">
                                    <li className="child-link">
                                        <Link href='/'>Website</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>SEO</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>Fanpage Management</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-item" onMouseEnter={()=>HandleMenuHover(2)} >
                                <div className="parent"><Link href='/'>Dự án</Link></div>
                                <ul className="sub-menu">
                                    <li className="child-link">
                                        <Link href='/'>Wordpress</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>Shopify</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>Reactjs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-item" onMouseEnter={()=>HandleMenuHover(3)}>
                                <div className="parent"><Link href='/'>Blog</Link></div>
                                <ul className="sub-menu">
                                    <li className="child-link">
                                        <Link href='/'>Câu chuyện Okhub</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>Đối tác</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-item" onMouseEnter={()=>HandleMenuHover(4)}>
                                <div className="parent"><Link href='/'>Liên hệ</Link></div>
                                <ul className="sub-menu">
                                    <li className="child-link">
                                        <Link href='/'>Câu chuyện Okhub</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>Đối tác</Link>
                                    </li>
                                    <li className="child-link">
                                        <Link href='/'>FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="contact-area">
                            <div className="heading">Follow chúng tôi</div>
                            <div className="social-wrapper">

                                <div className="social-link">
                                    <Link href='/'>
                                        <Image src={facebookicon} alt='' />
                                    </Link>
                                </div>

                                <div className="social-link">
                                    <Link href='/'>
                                        <Image src={insta} alt='' />
                                    </Link>
                                </div>

                                <div className="social-link">
                                    <Link href='/'>
                                        <Image src={be} alt='' />
                                    </Link>
                                </div>

                                <div className="social-link">
                                    <Link href='/'>
                                        <Image src={dribbble} alt='' />
                                    </Link>
                                </div>

                                <div className="social-link">
                                    <Link href='/'>
                                        <Image src={tiktok} alt='' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="image-tilt-container">
                        <div className="image-tilt-item image-1 " ref={(el)=> imageItems.current.push(el)}>
                            <Image src={imagefloat1} alt='' />
                        </div>
                        <div className="image-tilt-item image-2 " ref={(el)=> imageItems.current.push(el)}>
                            <Image src={imagefloat1} alt='' />
                        </div>
                        <div className="image-tilt-item image-3 " ref={(el)=> imageItems.current.push(el)}>
                            <Image src={imagefloat1} alt='' />
                        </div>
                        <div className="image-tilt-item image-4 " ref={(el)=> imageItems.current.push(el)}>
                            <Image src={imagefloat1} alt='' />
                        </div>
                        <div className="image-tilt-item image-5 " ref={(el)=> imageItems.current.push(el)}>
                            <Image src={imagefloat1} alt='' />
                        </div>
                    </div>
                    
            </div>
        </>
    )
}