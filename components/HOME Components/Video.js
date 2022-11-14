import { Player } from 'video-react';
import videobutton from '../../public/imgs/videobutton.svg'
import Image from 'next/image';

export const Video =()=>{
    return (
        <>
        <div className="video-review" >
            <div className="button-trigger">
                <Image alt='' src={videobutton} />
            </div>
            <Player
                playsInline
                src={'imgs/Stuttgart City - Vertical Video Timelapse Nightsky.mp4'}
                loop={true}
                controls={true}
                muted={true}
               
                
        
                />
        </div>

            
        </>
    )
}