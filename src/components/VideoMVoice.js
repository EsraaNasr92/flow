import React from "react";
import lottie from "lottie-web";
import flow_1 from './assets/animation/flow_1.mp4';
import soundAnimation from './assets/animation/sound-wave.json'

const VideoMVoice = () => {
    // for wave json file
    React.useEffect( () => {
        lottie.loadAnimation({
            container: document.querySelector('#sound-wave-mobile'),
            animationData: soundAnimation,
        });
    }, []);
    return(
            <div className='section' id='videoM'>
               
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
                <div className='container'>
                    <div className='voice-mobile'>
                        <div id='sound-wave-mobile'></div>
                        <p>Good job Emily! Now push your hands down into the floor to create
                            more space between your shoulders and ears.
                        </p>
                    </div>
                </div>
            </div>   

    );
}

export default VideoMVoice;