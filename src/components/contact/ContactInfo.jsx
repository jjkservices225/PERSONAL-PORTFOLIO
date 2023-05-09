import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Nous sommes à votre disposition</h4>
        <p>
        N’hésitez pas à me contacter. Je suis toujours disponible pour le freelance. J'aime le challenge et les projets innovants.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              Abobo PK 18 N'dotré, Abidjan Côte d'Ivoire
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">jjkservices1@gmail.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+2250103428182</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
