import React from "react";
import flow_1 from './assets/animation/flow_1.mp4';

const VideoM = () => {
    return(
            <div className='section' id='videoM'>
                <div className='container'>
                    <div className='row'>
                        <video
                            src={flow_1}
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