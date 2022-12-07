import React, { useEffect, useRef } from "react";
import { Player } from "video-react";
import Image from "next/image";
import playVideoIntroducesBtn from "../../public/imgs/playVideoIntroducesBtn.svg";
// import posterImg from "../../public/imgs/introduceHeaderImage.png";
// import videoUrl from "../../public/imgs/video.mp4";
// import VisibilitySensor from 'react-visibility-sensor';

export const VideoOkhub = () => {
    let player = useRef();
    let triggerButton = useRef();
    let isPlay = false;

    useEffect(() => {

    });
    let pauseVideo = () => {
        player.current.pause();
        triggerButton.current.style.opacity = 1
        var video = document.querySelector('.introduce__header video');
        video.removeAttribute('controls');
        isPlay = !isPlay
    }

    let playVideo = () => {
        player.current.play();
        var video = document.querySelector('.introduce__header video');
        video.setAttribute('controls', 'true')
        triggerButton.current.style.opacity = 0;
        isPlay = !isPlay
    }
    let handleVisible = (isVisible) => {

        if (isVisible) {
            // playVideo()
            // isPlay =!isPlay
        } else {
            if (isPlay) {

                pauseVideo()
            }
        }
    }
    let handleClick = () => {

        if (isPlay) {
            pauseVideo()
        } else {

            playVideo()
        }
        // isPlay =!isPlay
    }
    let videoOnClick = () => {

    }
    return (
        <div className="introduce__header" onClick={handleClick}>
            <div className="introduce__header--img" ref={triggerButton}>
                {/* <Image src={introduceHeaderImage} alt="" /> */}
                <div className="introduce__header--play-btn">
                    <Image src={playVideoIntroducesBtn} alt="play_icon" />
                </div>
                <div className="introduce__header--text">
                    <p>
                        Luôn hành động với lòng say mê <br></br> sự ca<span>n đảm</span>
                        <br></br> và <span> đôi mắt sáng ngời</span>
                    </p>
                </div>
            </div>
            <div className="introduce__header--video">
                <Player
                    playsInline
                    poster="imgs/introduceHeaderImage.png"
                    src="imgs/video.mp4"
                    loop={true}
                    height={646}
                    ref={player}
                    controls={true}
                    muted={false}
                />
            </div>
        </div>
    )
}