import React, { useEffect, useRef } from "react";
import { Player } from "video-react";
import Image from "next/image";
import posterImg from "../../public/imgs/introduceHeaderImage.png";
// import videoUrl from "../../public/imgs/video.mp4";
// import VisibilitySensor from 'react-visibility-sensor';

export const VideoOkhub = () => {
    const player = useRef();
    const triggerButton = useRef();
    const isPlay = false;
    
    useEffect(() => {

    });
    return (
        <>
            {/* <VisibilitySensor partialVisibility={true} delayedCall> */}
                <Player
                    playsInline
                    poster="../../public/imgs/introduceHeaderImage.png"
                    src="../../public/imgs/video.mp4"
                    loop={true}
                    height={646}
                    ref={player}
                    controls={true}
                    muted={true}
                />
            {/* </VisibilitySensor> */}
        </>
    )
}