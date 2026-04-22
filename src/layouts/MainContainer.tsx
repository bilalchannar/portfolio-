import { PropsWithChildren, useEffect, useState } from "react";
import About from "../pages/About";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Certifications from "../pages/Certifications";
import Cursor from "../components/common/Cursor";
import Landing from "../pages/Landing";
import Navbar from "../components/common/Navbar";
import SocialIcons from "../components/common/SocialIcons";
import WhatIDo from "../pages/WhatIDo";
import Work from "../pages/Work";
import { TextSplitter } from "../utils/textSplitter";

const setSplitText = () => {
  const elements = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  new TextSplitter(Array.from(elements), { type: "chars,lines" });
};

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div className="container-main">
        <Landing>{!isDesktopView && children}</Landing>
        <About />
        <WhatIDo />
        <Education />
        <Work />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
