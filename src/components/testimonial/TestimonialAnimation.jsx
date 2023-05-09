import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `"JJK SERVICES est le choix évident pour améliorer votre présence numérique. Leur approche personnalisée et leur engagement à fournir des résultats de qualité sont exceptionnels. Je recommande leurs services à quiconque cherche à améliorer sa présence en ligne".`,
      reviewerName: "Mariam Ouattara",
      designation: "Community Manager ",
      delayAnimation: "100",
    },
    {
      imageName: "team-2",
      desc: `"SERVICES a transformé mon idée d'application mobile en réalité. Ils ont créé une application fonctionnelle et esthétique en travaillant avec moi tout au long du processus. Je recommande leurs services à toute personne cherchant à créer une application mobile".`,
      reviewerName: "Yves Diarrassouba",
      designation: "Directeur Financier",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: `"Grâce à JJK SERVICES, j'ai lancé mon entreprise en ligne avec succès. Leur équipe m'a aidé à créer une identité visuelle cohérente, un site Web attrayant et une stratégie de marketing numérique efficace. Je recommande fortement leurs services à toute personne cherchant à boosté sa présence en ligne".`,
      reviewerName: "Janiaya Traore",
      designation: "Responsable Marketing",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.png`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
