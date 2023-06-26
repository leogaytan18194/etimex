import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Helvetica2';
    src: url('/assets/fonts/Helvetica.ttf');
}
  @font-face {
    font-family: 'HelveticaBold';
    src: url('/assets/fonts/Helvetica-Bold.ttf');
}
  @font-face {
      font-family:'ITCAvantGardeStd-Bold';
      src: url('/assets/ITCAvantGardeStd-Bold.ttf');
    }
  @font-face {
      font-family: 'ITCAvantGardeStd-Demi';
      src: url('/assets/ITCAvantGardeStd-Demi.ttf');
    }
    @font-face {
        font-family: 'ITCAvantGardeStd-Md';
        src: url('/assets/ITCAvantGardeStd-Md.ttf');
  }
  @font-face {
    font-family: 'ITCAvantGardeStd-Bk';
    src: url('/assets/ITCAvantGardeStd-Bk.ttf');
  }
  *{
    font-family: "Helvetica2";
  }
  a{
    text-decoration: none;
  }
  .item-lang-light {
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    box-sizing: border-box;
    padding: 0 14px;
    color: #fff !important;
}
  .item-lang-dark {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    box-sizing: border-box;
    padding: 0 14px;
    color: #000 !important;
}
`;
