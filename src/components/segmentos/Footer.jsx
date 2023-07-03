import React from 'react';
import { FooterStyles, TabItem } from '../../styles/Styles';
import { Link } from 'react-router-dom';

const socialIcons = [
  {
    ico: "/assets/svg/in.svg",
    alt: "LinkedIn",
    link: "http://www.linkedin.com"
  },
  {
    ico: "/assets/svg/ins.svg",
    alt: "Instagram",
    link: "http://www.instagram.com"
  },
  {
    ico: "/assets/svg/fb.svg",
    alt: "Facebook",
    link: "http://www.facebook.com"
  }
];
const tabItems = [
  {
    ico: "/assets/svg/materiales",
    text: "Materiales",
    route: "/servicios/materiales",
    top: "-5px",
  },
  {
    ico: "/assets/svg/tintas",
    text: "Tintas",
    route: "/servicios/tintas",
    top: "2px",
  },
  {
    ico: "/assets/svg/acabados",
    text: "Acabados de embellecimiento",
    route: "/servicios/acabados",
    top: "-2px",
  },
]
const Footer = ({ theme, heigth }) => {
  return (
    <FooterStyles theme={theme} heigth={heigth}>
      <div className='footer-tab'>
        <div className='footer-tab-items'>
          {
            tabItems.map((tabItem) => (
              <TabItem icon={tabItem.ico} top={tabItem.top} theme={theme}>
                <Link to={tabItem.route}>
                  {tabItem.text}
                </Link>
              </TabItem>
            ))
          }
        </div>
      </div>
      <div className="footer-container">
        <div className='footer-items'>
          <ul className="footer-list">
            <li>Copyright © 2023 Etimex</li>
            <li>Contacto: info@etimex.com</li>
            <li>81 8479 0800</li>
            <li>+52 (81) 3116 6651</li>
            <li>Dir. San Ángel 201, Churubusco, 64590 Monterrey, N.L. México</li>
          </ul>
          <div className="social-icons">
            {socialIcons.map((social, index) => (
              <a href={social.link} target='_blank' rel="noreferrer">
                <img src={social.ico} alt={social.alt} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
