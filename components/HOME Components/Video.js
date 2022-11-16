import { Player } from 'video-react';
import videobutton from '../../public/imgs/videobutton.svg'
import gumac from '../../public/imgs/gumac.png'
import thumbnail from '../../public/imgs/thumbnail.png'


import Image from 'next/image';
import { useRef } from 'react';
// import 'video-react/dist/video-react.css'; 

export const Video =()=>{

    const playVideo= (video)=>{
        video.play()
    }
    
    const handleClick = ()=>{
        // console.log('gfhgfgf')
        if (ref.current){
            var theVideo = ref.current.querySelector('video')
                playVideo(theVideo)
        }
    }

    const ref = useRef()
    
    return (
        <>
        <div ref={ref} className="video-wrapper" onClick={()=>{handleClick()}}>

        
        <div className="video-review" >
            <div className="button-trigger">
                <Image alt='' src={videobutton} />
            </div>
            <Player
                playsInline
                poster='imgs/thumbnail.png'
                src={'imgs/Stuttgart City - Vertical Video Timelapse Nightsky.mp4'}
                loop={true}
                controls={true}
                muted={true}
                />

        </div>
        <div className="client-company">
        <Image src={ gumac } alt='' />
        </div>

        </div>

            
        </>
    )
}