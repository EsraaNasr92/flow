import React from "react";
import lottie from "lottie-web";
import vmobile_4 from './assets/animation/vmobile_4.mp4';
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
               <div className="container">
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
                <div className='container'>
                    <div className='voice-mobile'>
                        <div id='sound-wave-mobile'></div>
                        <p>Try bending your knees and lengthening your spine
                        </p>
                    </div>
                </div>
            </div>   

    );
}

export default VideoMVoice;