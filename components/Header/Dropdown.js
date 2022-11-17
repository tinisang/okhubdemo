import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"

export const DropDown = ({status})=>{



    useEffect(()=>{

        if (status){

            
            gsap.from('.menu-item',{
                x:300,
                duration:0.8,
                stagger:0.1,
                ease:'out'
            })
            
        } 
        
    })
    
    
    return (
        <>
            <div className={"container-padding dropdown-section "+ (status ? 'opening' : '')}>
                    <div className="dropdown-wrapper">
                        <div className="menu-area">
                            <div className="menu-item">
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
                            <div className="menu-item">
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
                            <div className="menu-item">
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
                            <div className="menu-item">
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
                            <div className="menu-item">
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
                    </div>
            </div>
        </>
    )
}