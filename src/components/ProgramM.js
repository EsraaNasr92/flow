import React from "react";
import flow_1 from './assets/animation/flow_1.mp4';

const ProgramM = () => {
    return(
            <div className='section' id="program-mobile">
                <div className='container'>
                    <div className='row'>
                        <div id='question'>
                            <div className='container'>
                                <div className='row'>
                                    <div className="question-title">
                                        <h1>You will never ask yourself <span>“Am I doing this right?”</span> ever again</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='video-section__video'>
                        <video
                            className='women-video-Mobile'
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

export default ProgramM;