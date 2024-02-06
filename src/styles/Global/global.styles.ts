import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: 'VT323', monospace;
  overflow: hidden;
}
body, .snake{
  background-color: #414141
}

.food{
  background-color: white;
  border: 4px solid gray;
}

`;
