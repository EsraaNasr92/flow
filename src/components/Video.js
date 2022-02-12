import React from "react";
import flow_1 from './assets/animation/flow_1.mp4';

const Video = () =>{
    return(
        <div className='section' id='video-section'>
            <div className='container'>
                <div className='row'>
                    <div className='video-section__video'>
                        <video
                            className='women-video'
                            src={flow_1}
                            data-autoplay
                            muted
                            loop
                            playsInline
                        >
                        </video> 
                    </div>     
                    <div className='video-section__text'>
                        <h1>Next generation motion detection</h1>
                        <p>Move freely with our first-in-class technology <br /> to improve misalignment.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Video;