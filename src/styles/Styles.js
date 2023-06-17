import styled from "styled-components";

/**
 * Vinos componente
 */
export const VinosStyles = styled.div`
  width: 100%;
  background-color: #1d1d1b;
  * {
    margin: 0;
    padding: 0;
    color: #fff !important;
    border-color: #fff !important;
    list-style: none;
  }
`;

/**
 * Vinos componente
 */

export const HeaderStyles = styled.header`
  .menu-container {
    width: 100%;
    max-height: 80.8539px;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    height: 100%;
    z-index: 99;
    * {
      overflow: unset;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(7, auto);
      max-width: 1100px;
      margin: 0 auto;
      width: 100%;
      list-style: none;
    }
    .logo {
      display: flex;
      justify-content: end !important;
      align-items: center !important;
      a {
        padding-right: 15px;
        box-sizing: border-box;
      }
      img {
        width: 35px;
        height: 40px;
      }
    }
  }
  .activeMenu {
    a {
      position: relative;
      &:before {
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #fff;
        bottom: 0;
        opacity: 1;
      }
    }
  }
`;
export const CustomLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @keyframes exampleAnimation {
    100% {
      width: 100%;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    height: 100%;
    align-items: center;
    display: flex;
    margin: 0;
    &:after {
      content: "";
      background-image: url(/assets/segmentos/${(props) => props.icon ? `${props.icon}.svg` : ""});
      position: absolute;
      width: 25px;
      height: 25px;
      background-repeat: no-repeat;
      left: -30px;
      top: 5px;
    }
    &:before {
      content: "";
      position: absolute;
      width: 0%;
      height: 1px;
      background-color: #fff;
      bottom: 0;
      opacity: 0;
      //visibility:hidden;
    }
  }
  &:hover {
    a {
      &:before {
        opacity: 1;
        animation-name: exampleAnimation;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }
`;
export const ContainerStyles = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  .block {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-container-txt {
    p {
      margin-bottom: 5px;
      text-align: center;
    }
    h1 {
      font-size: 4rem;
    }
  }
  .list-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    ul {
      margin: 0 5px;
      li {
        position: relative;
        &:before {
          content: "";
          width: 5px;
          height: 5px;
          background-color: #fff;
          display: flex;
          position: absolute;
          left: -10px;
          align-items: center;
          justify-content: center;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 100%;
        }
      }
    }
  }
  .icon-container {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    width: 100%;
    gap: 25px;
  }
  .container {
    display: flex;
    flex-direction: row;
  }

  .container.inverse {
    flex-direction: row-reverse;
  }

  .block {
    display: flex;
    flex-direction: column;
  }

  .block-left {
    width: 40%;
  }

  .block-right {
    width: 50%;
    margin: 0 auto;
    height: 581px;
    background-size: cover;
    background-position: center;
  }

  .icon-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .icon {
    width: 50px; /* Ajusta el tamaño según tus necesidades */
    height: 50px;
    border-radius: 50%;
    border: 4px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
    }
  }

  ul {
    margin-bottom: 25px;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroBackground = styled.div`
  .hero {
    /* width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center; */
    width: 100%;
    height: 758px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    //background-position: 0 -220px;
  }

  .hero-text {
    padding: 20px;
    //border-radius: 10px;
    color: white;
    font-size: 3rem;
  }
`;

export const Container2Styles = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  .block {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: row;
  }

  .container.inverse {
    flex-direction: row-reverse;
    .text-container {
      padding: 0;
    }
  }

  .image-container {
    flex-basis: 60%;
    width: 648px;
    height: 320px;
    margin: 15px 0;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-container {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
    padding-left: 50px;
    h1 {
      font-size: 40px;
      text-transform: uppercase;
      max-width: 150px;
    }
    p {
      white-space: pre-line;
      max-width: 333px;
    }
  }

  .container-title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 27px 0;
    font-size: 80px;
  }
`;

export const FooterStyles = styled.footer`
  width: 100%;
  background: #1d1d1b;
  padding-bottom: 8rem;
  .footer-container {
    width: 100%;
    background-color: rgb(210, 173, 87);
    height: 93px;
  }
  .footer-items {
    width: 100%;
    margin: 0 auto;
    max-width: 1300px;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: center;
    box-sizing: border-box;
    padding-top: 15px;
  }
  ul.footer-list {
    display: flex;
    gap: 10px;
  }
  .social-icons {
    display: flex;
    gap: 4px;
    img {
      height: 22.1503px;
    }
  }
  .footer-tab {
    width: 100%;
    margin: 25px 0;
  }
  .footer-tab-items {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 60px;
  }
`;

export const TabItem = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.6s;
  height: 50px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.6;
  }
  &:before {
    content: "";
    background-image: url(${(props) => props.icon ? `${props.icon}.svg` : ""});
    position: absolute;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
