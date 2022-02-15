import React from "react";
import vmobile_2 from './assets/animation/vmobile_2.mp4';

const VideoM = () => {
    return(
            <div className='section' id='videoM'>
                <div className='container'>
                    <div className='row'>
                        <video
                            src={vmobile_2}
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

export default VideoM;