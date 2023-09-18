import React from "react";
import Skills from "../skills/Skills";

const educatonContent = [
  {
    passingYear: "2023",
    degreeTitle: "Certifié Front-end Developpeur",
    instituteName: "Sur la plateforme en ligne CODEDAMN",
  },
  {
    passingYear: "2022-2023",
    degreeTitle: "Bootcamp, Front-ernd Developpeur",
    instituteName: "Sur la plateforme en ligne CODEDAMN",
  },
  {
    passingYear: "2019-2021",
    degreeTitle: "Formateur Principale",
    instituteName: "Au Centre de Formation JJK SERVICES",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Domaine de Compétence</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
