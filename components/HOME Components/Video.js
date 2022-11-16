import { Player } from 'video-react';
import videobutton from '../../public/imgs/videobutton.svg'
import gumac from '../../public/imgs/gumac.png'
import thumbnail from '../../public/imgs/thumbnail.png'


import Image from 'next/image';
// import 'video-react/dist/video-react.css'; 

export const Video =()=>{
    return (
        <>
        <div className="video-wrapper">

        
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