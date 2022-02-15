import React from "react";
import vmobile_4 from './assets/animation/vmobile_4.mp4';

const VideoMFrame = () => {
    return(
            <div className='section' id='videoM'>
                <div className='container'>
                    <div className='row'>
                        <video
                            src={vmobile_4}
                            data-autoplay
                            muted
                            loop
                            playsInline
                        >
                        </video> 
                        
                    </div>
                </div>
            </div>   

    );
}

export default VideoMFrame;