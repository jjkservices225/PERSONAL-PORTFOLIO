import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61550491021183" },
  { Social: <FaTwitter />, link: "https://twitter.com/JJKCO225" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/jjkdevtech/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jean-jacques-kouam%C3%A9-5515a5273/" },
  { Social: <FaGithub />, link: "https://github.com/jjkservices225" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
