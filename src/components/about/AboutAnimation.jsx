import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/About.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Développeur</p>
                  <h3>JEAN-JACQUES</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biographie</h3>
                </div>

                <div className="about-text">
                  <p>
                  Je suis un développeur Full-stack freelance avec 1 ans d'expérience. Je suis originaire de Côte d'Ivoire. Je code et crée des interfaces utilisateurs et des applications cross-platform IOS/Android  pour des gens extraordinaires dans le monde entier. J'aime travailler avec de nouvelles personnes, et également partagé de nouvelles expériences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Nom: </label>
                          <span>Jean-Jacques Kouamé</span>
                        </li>
                        <li>
                          <label>Anniversaire: </label>
                          <span>12 Janvier 1992</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>31 ans</span>
                        </li>
                        <li>
                          <label>Addresse: </label>
                          <span>Abidjan, Côte d'Ivoire</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Téléphone: </label>
                          <span>(+225) 0103428182</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>jjkservices1@gamil.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>Ce que je fais</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Il nous ont faits confiance</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
