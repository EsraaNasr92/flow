import React from "react";
import flow_3 from './assets/animation/flow_3.mp4';


const VideoThree = () =>{
    return(
        <div className='section' id='video-section-three'>
            <div className='container'>
                <div className='row'>
                    <div className='video-section__video__three'>
                        <video
                                className='women-video'
                                src={flow_3}
                                data-autoplay
                                muted
                                loop
                                playsInline
                        ></video>
                    </div>     
                </div>
            </div>
        </div>

    );
}

export default VideoThree;