import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
 }
`;
