import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Banner from './components/Banner';
import Question from './components/Question';
import Program from "./components/Program";
import Video from "./components/Video";
import VideoTwo from './components/VideoTwo';
import VideoThree from './components/VideoThree';
import VideoFive from './components/VideoFive';
import Reward from "./components/Reward";
import Quote from "./components/Quote";
import Contact from "./components/Contact";

// For Mobile Version 
import BannerM from './components/BannerM';
import ProgramM from './components/ProgramM';
import VideoMVoice from './components/VideoMVoice';
import QuoteM from './components/QuoteM';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
/*const pluginWrapper = () => {
  require('./statics/fullpage.fadingEffect.min');
};
*/

class App extends React.Component {

  render() {
    // for the mobile version 
    const isMobile = window.innerWidth <= 800;
      if (isMobile) {
        return (
          <>
          <ReactFullpage 
            fadingEffect
            render={() => {
              return (
                <>
                  <BannerM /> 
                  <ProgramM />  
                  <VideoMVoice /> 
                  <QuoteM /> 
                  <Contact /> 
                </>
              );
            }}
          />


          </>
        );
    } else {
       
      
    // For the desktop version
    return (
      <ReactFullpage

        licenseKey={"1D2C3363-9E204A14-B69CBB27-FE85CA55"}
        fadingEffect
        
        //responsiveWidth={800}
        
       afterLoad={(origin, destination, direction) => {
          console.log("afterLoad event", { origin, destination, direction });
          if(destination.index === 0 || destination.index === 1 || 
             destination.index === 2){
            window.fullpage_api.fadingEffect.turnOff();
          }if(destination.index === 3 || 
            destination.index === 4 || destination.index === 5 ){
            window.fullpage_api.fadingEffect.turnOn();
          }if(destination.index === 6 || destination.index === 7 || 
              destination.index === 8 ||  destination.index === 9){
            window.fullpage_api.fadingEffect.turnOff();
          }
          if((destination.index === 5 && direction === "up")|| (destination.index === 6 && direction === "up")){
            window.fullpage_api.fadingEffect.turnOn();
          }
        }}

        onLeave={(origin, destination, direction) => {
          //console.log("onLeave event", { origin, destination, direction });
          
        }}

        /*afterResponsive={(isResponsive) =>{
          //window.fullpage_api.destroy();
          window.fullpage_api.fadingEffect.turnOff();
        }}*/

        render={({ state, fullpage_api }) => {

          return (
            
            <div id="fullpage-wrapper">

              <Banner />
              <Question />
              <Program />
              <Video />
              <VideoTwo />
              <VideoThree /> 
              <VideoFive />
              <Reward />
              <Quote />
              <Contact />
            </div>
          );
        }}
      />
    );
  }}
}

export default App;
