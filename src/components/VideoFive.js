import React from "react";
import flow_5 from './assets/animation/flow_5.mp4';


const VideoFive = () =>{
    return(
        <div className='section' id='video-section-four'>
            <div className='container'>
                <div className='row'>
                    <div className='video-section__video__four'>
                        <video
                                className='women-video'
                                src={flow_5}
                                data-autoplay
                                muted
                                loop
                        >
                        </video>
                    </div>  
                    <div className='video-section__text-four'>
                        <h1>You just need your laptop, tablet or, phone to get  
                            <span> instant and precise </span>feedback
                        </h1>
                    </div>   
                </div>
            </div>
        </div>

    );
}

export default VideoFive;