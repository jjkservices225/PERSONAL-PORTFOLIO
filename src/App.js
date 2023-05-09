import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeOne from "./views/all-home-version/HomeDarkAnimation";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollToTop />
      <HomeOne/>
    </>
  );
};

export default App;
