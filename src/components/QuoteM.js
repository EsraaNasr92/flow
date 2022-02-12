import React from "react";
import MailchimpForm from "./MailchimpForm";



const QuoteM = () =>{
    return(
        <div className='section' id='subscribe'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12" id="quote-section">
                        <div id='quote-section__text'>
                            <div className='quote-txt'>
                                <p>We have created the closest virtual experience to live classes, 
                                    designed for <span>yogis of all levels</span> who need <span>feedback </span> 
                                    and <span>reassurance</span> on whether they are moving correctly whilst practising.
                                </p>
                            </div>
                        </div>
                        <div className="mobile-txt">Subscribe to get 30 days for free</div>
                        <div className='newsletter' id='quote-section__newsletter'>
                            <MailchimpForm  />
                        </div>
                    </div>
                </div>  
            </div>

            </div>
    )
}

export default QuoteM;