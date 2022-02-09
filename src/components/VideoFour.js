import React from "react";
import flow_4 from './assets/animation/flow_4.mp4';


const VideoFour = () =>{
    return(
        <div className='section' id='video-section-four'>
            <div className='container'>
                <div className='row'>
                    <div className='video-section__video__four'>
                        <video
                                className='women-video'
                                src={flow_4}
                                data-autoplay
                                muted
                                loop
                        ></video>
                    </div>   
                </div>
            </div>
        </div>

    );
}

export default VideoFour;