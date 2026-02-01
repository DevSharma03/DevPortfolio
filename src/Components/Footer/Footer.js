import React, { useState } from "react";
import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa6";
import MagicButton from './../Sub_Components/MagicButton/MagicButton';
import ContactForm from "./../Sub_Components/ContactForm/ContactFrom";
import "./Footer.css";

const socialMedia = [
  {
    id: 1,
    link: "https://github.com/DevSharma03",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://linkedin.com/in/devsharma09",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="footer-container" id="Contact">

        <div className="footer-content">
          <h1 className="footer-heading">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="footer-subheading">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            onClick={handleOpenModal} 
          />
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            Copyright © 2025 Devashish Sharma
          </p>

          <div className="social-icons-container">
            {socialMedia.map((info) => (
              <a 
                href={info.link} 
                key={info.id} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                {info.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {isModalOpen && <ContactForm onClose={handleCloseModal} />}
    </>
  );
};

export default Footer;