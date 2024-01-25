import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
button {
  border: none;
  }

  @font-face {
    font-family: "Museo Sans Cyrl";
    font-style: normal;
    font-weight: 500;
    src: url("src/fonts/MuseoSansCyrl500.woff") format("woff2"),
      url("src/fonts/MuseoSansCyrl500.woff") format("woff");
  }

html,
body,
 {
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 24px;
  font-weight: 400;
  height: 100%;
  @media (max-width: 426px) {
    body {
      font-size: 20px;
    }
 }
 * {
  box-sizing: border-box;
}
 }
 a {
  all: unset;
}

 .underline {
  color: rgba(88, 14, 162, 1);
text-decoration: underline;
 }

 .no-scroll {
  overflow: hidden;
}
`;
