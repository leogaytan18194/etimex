import React from 'react';
import { FooterStyles, TabItemSecciones } from '../../styles/Styles';

const socialIcons = [
  {
    ico: "/assets/svg/in.svg",
    alt: "LinkedIn",
    link:"http://www.linkedin.com"
  },
  {
    ico: "/assets/svg/ins.svg",
    alt: "Instagram",
    link:"http://www.instagram.com"
  },
  {
    ico: "/assets/svg/fb.svg",
    alt: "Facebook",
    link:"http://www.facebook.com"
  }
];
const tabItems = [
  {
    ico: "/assets/svg/dot",
    text: "Materias Primas",
    route: "/materias-primas",
    top: "0",
  },
  {
    ico: "/assets/svg/dot",
    text: "ACABADOS BÁSICOS & PREMIUM",
    route: "/acabados-basicos-premium",
    top: "0",
  },
  {
    //MATERIAS PRIMAS   ·      ·    
    ico: "/assets/svg/dot",
    text: "ASESORÍA INTEGRAL",
    route: "/asesoria-integral",
    top: "0",
  },
]
const Footer = ({theme, heigth}) => {
  return (
    <FooterStyles theme={theme} heigth={heigth}>
      <div className='footer-tab'>
        <div className='footer-tab-items'>
          {
            tabItems.map((tabItem) => (
              <TabItemSecciones icon={tabItem.ico} top={tabItem.top} theme={theme}>
                {tabItem.text}
              </TabItemSecciones>
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
