import React from "react";
import vmobile_3 from './assets/animation/vmobile_3.mp4';

const VideoMWomen = () => {
    return(
            <div className='section' id='videoM'>
                 <div className='row'>
                    <video
                            src={vmobile_3}
                            data-autoplay
                            muted
                            loop
                            playsInline
                    >
                    </video> 
                        
                </div>
            </div>   

    );
}

export default VideoMWomen;