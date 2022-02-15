import React from 'react';
import lottie from "lottie-web";

import hero_m from './assets/hero_section_pic_m.png'
import stars from './assets/stars.png';
import soundAnimation from './assets/animation/sound-wave.json'
import soundAnimation_mobile from './assets/animation/sound-wave.json'
import Header from './Header';


import MailchimpForm from './MailchimpForm';

const BannerM = () =>{

    // for wave json file
    React.useEffect( () => {
        lottie.loadAnimation({
            container: document.querySelector('#sound-wave'),
            animationData: soundAnimation,
        });
    }, []);
    React.useEffect( () => {
        lottie.loadAnimation({
            container: document.querySelector('#sound-wave_mobile'),
            animationData: soundAnimation_mobile,
        });
    }, []);

    return(
            <div id='banner' className='section'>
                <Header />

                <div className="banner-respoansive container" id="mobile-version"> 
                    <div className="row">

                        <div className='col-xxl-6 col-md-6 banner-section_left'>

                            <h2>The first interactive platform to guide,
                                align and reassure that you’re nailing your practice.
                            </h2>

                            <div className='col-xxl-6 col-md-6 banner-section_right'>
                                <div className='banner-image'>
                                    <img src={hero_m} alt='Hero section pic' className='img-fluid' />
                                </div>
                                <div className='voice'>
                                    <div id='sound-wave_mobile'></div>
                                    <p>Good job Emily! Now push your hands down into the floor to create
                                        more space between your shoulders and ears.
                                    </p>
                                </div>
                            </div>

                            <h4>Subscribe to get a 30-day for free</h4>
                            <div className='newsletter'>
                                <MailchimpForm />
                            </div>
                            <div className='rating'>
                                <img src={stars} alt='rating' />
                                <p>4.8 stars [Rated on quality and precision by yoga instructors]</p>
                            </div>
                            <div className='social-media'>
                                <a className='hvr-radial-out' href='https://facebook.com/'>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a className='hvr-radial-out' href='https://twitter.com/'>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a className='hvr-radial-out' href='https://instgram.com/'>
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a className='hvr-radial-out' href='https://linkedin.com/'>
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
        </div>

        

    );
}

export default BannerM;