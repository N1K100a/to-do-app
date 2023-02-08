import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
   overflow: hidden;
}
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 .App{
    width: 100%;
    min-height: 100vh;
    background-color: #EEEEEE;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 50px;
    
    @media (max-width: 1400px) {
      padding-top: 20px;
    }
    @media (max-width: 800px) {
      align-items: flex-start;
    }


 }
`;
