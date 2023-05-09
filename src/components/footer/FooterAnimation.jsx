import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100004654455069" },
  { Social: <FaTwitter />, link: "https://twitter.com/JJKCO225" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/jeanjacqueskouamekouassi/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jean-jacques-kouam%C3%A9-kouassi-5515a5273/" },
  { Social: <FaGithub />, link: "https://github.com/jjkservices225" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
          JJK & CO, © {new Date().getUTCFullYear()} Tous Droits Réservés.
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
