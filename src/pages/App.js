import React, { useEffect, useState } from "react";
import About from "@/components/about";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import Header from "@/components/homepage/Header";
import Offers from "@/components/Offers";
import { Fade } from "react-reveal";
import SplashScreen from "@/components/utils/SlashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-container">
      {showSplash && (
        <div className="splash-screen">
          <SplashScreen />
        </div>
      )}

      {!showSplash && (
        <Fade duration={1500}>
          <section className="screen">
            <Header />
          </section>
          <section className="screen">
            <Offers />
          </section>
          <section className="screen">
            <About />
          </section>
          <section>
            <Footer />
          </section>
        </Fade>
      )}
    </div>
  );
};

export default App;
