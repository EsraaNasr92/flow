import React from "react";
import flow_2 from './assets/animation/flow_2.mp4';


const VideoTwo = () =>{
    return(
        <div className='section' id='video-section-two'>
            <div className='container'>
                <div className='row'>
                    <div className='video-section__video__two'>
                        <video
                                className='women-video'
                                src={flow_2}
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

export default VideoTwo;