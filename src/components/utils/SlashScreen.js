import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/splash.json";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const SplashScreen = () => {
  return (
    <div className="splashContainer">
      <div className="splash">
        <div className="splash-animation">
          <Fade duration={1500}>
            <Lottie animationData={animationData} />
          </Fade>
        </div>
        <Typewriter
          options={{
            html: "<span style='color: red'></span>",
            cursor: "<span style='color: #fff'>|</span>",
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(35)
              .pauseFor(200)
              .typeString(
                "<span style='color: #fff'>Looking for a new crib?</span>"
              )
              .pauseFor(500)
              .deleteAll()
              .typeString("<span style='color: #fff'>Guess what?</span>")
              .pauseFor(500)
              .deleteAll()
              .typeString(
                "<span style='color: #fff'>You are at the right place?</span>"
              )
              .pauseFor(500)
              .deleteAll()
              .typeString("<span style='color: #fff'>Welcome HOME!</span>")
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
