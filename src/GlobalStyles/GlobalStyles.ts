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
   overflow: auto;
    width: 100%;
    height: 100vh;
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
    @media (max-width: 480px){
      padding: 20px 0;
    }


 }
`;
