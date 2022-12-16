import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectPost = ({logo, projectName, hastags, imgProject, amountLike, amountShare}) => {
  return (
    <div className='container__proejct-post'>
        <div className='project-post__header'>
            <div className='project-post__logo'>
                <Image src = {logo}/>
            </div>
            <div className='project-post__text'>
                <h3 className='project-post__title'>{projectName}</h3>
                <div className='project-post__hastag'>
                    {
                        hastags.map((item, index) => {
                            return <Link key = {index} href = "#">#<span>{item}</span></Link>
                        })
                    }
                   
                </div>
            </div>
        </div>
        <div className='project-post__img'>
            <Image src = {imgProject} alt = ""/>
        </div>
    {/*  */}
    <div className='project-post__interactive'>
        <div className='project-post__amout-like'>
                <svg></svg>
                <span>{amountLike}</span>
                lượt thích
        </div>
        <div className='project-post__amout-share'>
        <svg></svg>
                <span>{amountShare}</span>
                lượt chia sẻ
        </div>
    </div>


    <div className='project-post__ desc'>
        <p></p>
        <Link href = "">Đọc tiếp</Link>
    </div>
    </div>
  )
}
