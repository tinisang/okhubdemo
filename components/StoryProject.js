import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Player } from "video-react";
import { Video } from "./HOME Components/Video";
import share from "../public/imgs/share.svg"

export const StoryProject = ()=>{

    const [activeItem, setActive]= useState(0)
    
    const stories = [
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
            type: 'image'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/cover.png',
            type: 'image'
        },
        {
            url: 'https://cms.okhub.vn/wp-content/uploads/2022/12/TIM-sang.mp4',
            type: 'video'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/cover.png',
            type: 'image'
        },
        {
            url: 'https://fecredit.reikademo.com/wp-content/uploads/2022/12/Screen-Recording-2022-12-01-at-22.11.54.mp4',
            type: 'video'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
            type: 'image'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/cover.png',
            type: 'image'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/3542782016906684898.mp4',
            type: 'video'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/cover.png',
            type: 'image'
        },
        {
            url: 'https://phamtiensang.site/wp-content/uploads/2022/12/video.mp4',
            type: 'video'
        },
    ];



    const handlePrev=()=>{
        if (activeItem>0){
            setActive(activeItem -1)
        }
    }
    
    const handleNext=()=>{
        if (activeItem < stories.length -1){
            setActive(activeItem+1)
    
        } else {
            setActive(0)
        }
    }
    
    return (
        <>

        <div className="story-project-item">
            <div className="dots" style={{gridTemplateColumns:`repeat(${stories.length},1fr)`}}>
                {
                    stories.map((item, index)=>{
                        return (
                        <span key={'dot-item: '+ index} className={"dot-item "+ (index<= activeItem ? 'active':'')}></span>
                        )
                    })
                }
            </div>

            <div className="story-navigation">
                <div className="prev" onClick={handlePrev}></div>
                <div className="next" onClick={handleNext}></div>
            </div>
            
            <div className="story-content-area">
                {
                    stories.map((item, index)=>{
                        if (item.type == 'image'){
                            return (
                               <>
                                {
                                activeItem==index &&
                                <>
                               <div className="image-container content-item">
                                    <Image fill alt='' src={item.url} className='image-item' />
                                </div>
                               <div className="image-container blur-background">
                                    <Image fill alt='' src={item.url} className='image-item' />
                                </div>

                                </>

                                }
                               </>
                            )
                        }
                        if (item.type == 'video'){
                            return (
                               <>
                                {
                                activeItem==index &&
                                <>
                                <div className="image-container content-item">
                                        <Player
                                                // playsInline
                                                // poster='imgs/thumbnail.png'
                                                src={item.url}
                                            
                                                autoPlay={true}
                                                fluid={true}
                                            />
                                    </div>
                                <div className="image-container blur-background">
                                        <Player
                                                // playsInline
                                                // poster='imgs/thumbnail.png'
                                                src={item.url}
                                                muted={true}
                                                autoPlay={true}
                                                fluid={true}
                                            />
                                    </div>

                                </>

                                }
                               </>
                            )
                        }
                    })
                }
                    
            </div>

            <div className="social-share">
                <div className="heart ">
                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5996 4.29443L15 4.82956L15.4004 4.29443C16.8254 2.38963 19.1099 1.1499 21.66 1.1499C25.9865 1.1499 29.5 4.67371 29.5 9.0349C29.5 10.7655 29.2239 12.3637 28.7443 13.846L28.7432 13.8492C27.594 17.486 25.2423 20.4083 22.716 22.5795C20.1875 24.7525 17.5129 26.1482 15.7689 26.7416L15.7689 26.7415L15.7636 26.7434C15.5787 26.8086 15.3018 26.8499 15 26.8499C14.6982 26.8499 14.4213 26.8086 14.2364 26.7434L14.2364 26.7434L14.2311 26.7416C12.4871 26.1482 9.8125 24.7525 7.28402 22.5795C4.75774 20.4083 2.40596 17.486 1.25676 13.8492L1.25677 13.8492L1.25572 13.846C0.776141 12.3637 0.5 10.7655 0.5 9.0349C0.5 4.67371 4.01348 1.1499 8.34 1.1499C10.8901 1.1499 13.1746 2.38963 14.5996 4.29443Z" stroke="white"/>
                    </svg>

                    <div className="heart-count">28</div>

                </div>

                <div className="share">
                        <Image alt='' src={share}/>
                        <div className="share-count">34</div>
                </div>
                
            </div>

            <div className="story-footer">
                <div className="row-1">
                    <div className="column-1">
                        <div className="image-container logo">
                            <Image fill src='https://phamtiensang.site/wp-content/uploads/2022/12/a316-1110320201524185760.jpeg' alt='' className="image-item" />
                        </div>

                        <div className="profile">
                            <div className="title">Thiết kế website GUMAC</div>
                            <div className="hashtag">#thoitrang #duannoibat</div>
                        </div>
                        
                    </div>
                    <div className="column-2">
                        <Link href='/'>
                            <div className="detail">
                                Chi tiết
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
           
           
        </>
    )
}