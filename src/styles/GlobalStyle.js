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
`;
