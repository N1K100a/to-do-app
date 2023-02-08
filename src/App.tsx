import React, { useState } from "react";
import styled from "styled-components";
import ToDoApp from "./components/ToDoApp";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const resize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", resize);
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
        {width > 799 ? <ToDO>Todo</ToDO> : ""}
        <ToDoApp />
      </div>
    </>
  );
}

const ToDO = styled.h1`
  font-size: 96px;
  color: #007fdb;
  font-family: "Inter", sans-serif;
  @media (max-width: 1400px) {
    font-size: 80px;
  }
`;
