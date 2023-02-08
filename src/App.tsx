import React from "react";
import styled from "styled-components";
import ToDoApp from "./components/ToDoApp";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Russo+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="App">
        <ToDO>Todo</ToDO>
        <ToDoApp />
      </div>
    </>
  );
}

const ToDO = styled.h1`
  font-size: 96px;
  color: #007fdb;
  font-family: "Inter", sans-serif;
`;
