import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Developpeur Mobile",
    descriptions: `Le développement cross-platform avec React Native permet d'économiser du temps et des coûts de développement par rapport au développement natif pour chaque plateforme.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Developpeur Web",
    descriptions: `React JS permet de créer des interfaces utilisateur dynamiques et réactives, qui offrent une expérience utilisateur fluide et agréable.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Marketing Digital",
    descriptions: `Nous sommes spécialisés dans diverses techniques de marketing numérique, notamment le référencement naturel (SEO), la publicité en ligne, les médias sociaux et bien plus encore.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
