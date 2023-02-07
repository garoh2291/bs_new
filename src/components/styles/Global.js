import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  
    :root {
    --scrollerGrey: 219, 219, 219;
    --lightGrey: 227, 227, 227;
    --darkerGrey: 200, 200, 200;
    --tmdbDarkBlue: 3, 37, 65;
    --tmdbLightBlue: 1, 180, 228;
    --tmdbLighterGreen: 192, 254, 207;
    --tmdbLightGreen: 30, 213, 169;
    --tmdbLogoGreen: 144, 206, 161;
    --tmdbLogoOrange: 253, 193, 112;
    --tmdbLogoRed: 217, 59, 99;
    --accountSilver: 149, 149, 149;
    --accountPink: 234, 20, 140;
    --accountPurple: 128, 91, 231;
    --accountGreen: 1, 210, 119;
    --accountTeal: 1, 198, 172;
    --accountLightBlue: 1, 180, 228;
    --accountBlue: 1, 119, 210;
    --accountOrange: 210, 119, 1;
    --accountYellow: 210, 144, 1;
    --accountRed: 212, 2, 66;
    }

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }


    body {
    font-family: "Source Sans Pro", Arial, sans-serif;
    }
`;
