import React from 'react';
import { FooterStyles, TabItem } from '../../styles/Styles';
import { Link } from 'react-router-dom';

const socialIcons = [
  {
    ico: "/assets/svg/in.svg",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/company/etimex/"
},
{
    ico: "/assets/svg/ins.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/etimex.print/"
},
{
    ico: "/assets/svg/fb.svg",
    alt: "Facebook",
    link: "https://www.facebook.com/etimex1/"
}
];
const tabItems = [
  {
    text: "Materials",
    route: "/en/services/materials",
    top: "-5px",
  },
  {
    text: "Embellishment finishes",
    route: "/en/services/embellishments",
    top: "-2px",
  },
  {
    text: "Integral advice",
    route: "/en/services/integral-advises",
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
            <li>Contact: info@etimex.com</li>
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
