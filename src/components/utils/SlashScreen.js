import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/splash.json";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const SplashScreen = () => {
  return (
    <div className="splashContainer">
      {/* Render the Lottie animation with fade-in effect */}
      <div className="splash">
      <Fade duration={1500} cascade>
        <Fade duration={1500} cascade collapse opposite>
          <Lottie animationData={animationData} />
        </Fade>
      </Fade>
      <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(5)
                  .typeString("Please wait, <br>")
                  .pauseFor(500)
                  .typeString("While we set things up")
                  .pauseFor(500)
                  .start()
              }}
            />
      </div>      
    </div>
  );
};

export default SplashScreen;
