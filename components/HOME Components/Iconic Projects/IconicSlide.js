import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../public/imgs/image1.jpg'

export const IconicSlide = ()=>{
    return (
        <>
            <div className="iconic-projects-slide">
                <div className="introduction  container-margin">

                    <div className="heading">
                        Dự án tiêu biểu
                    </div>
                    <div className="heading-english">Iconic Projects</div>
                    <div className="projects-slide">
                        <div className="project-item">
                            <div className="image-container image-project">
                                    <Link href="/">
                                    <Image src={image1} alt='' fill className='image-item' />

                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}