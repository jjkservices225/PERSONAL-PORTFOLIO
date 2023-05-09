/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+2250103428182",
  email: "jjkservices1@gmail.com",
};

const sliderContent = {
  name: "Jean-Jacques",
  designation: "Full-stack Developer",
  description: `
  Je conçois, optimise les bases de données et gère les serveurs et API. Ma curiosité pour les nouvelles technologies me permet de créer des applications innovantes et adaptées aux besoins de mes clients.`,
  btnText: "Voir mon CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+2250103428182">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">FR</a>
              </li>
              <li>
                <a href="#">EN</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Salut, je suis
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Full-Stack Developer</p>
                    <p className="loop-text lead">MERN Stack dev</p>
                    <p className="loop-text lead">Cross Platform dev</p>
                    <p className="loop-text lead">React JS/React Native dev</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/CV KOUAME.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/Banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
