import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToDoApp from "./components/ToDoApp";
import moment from "moment";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";

export default function App() {
  useEffect(() => {
    const interval = setInterval(() => setDateState(moment()), 10000);
    return () => clearInterval(interval);
  }, []);

  const [dateState, setDateState] = useState(moment());
  const clockTime = dateState.format("LT");
  const dateNumber = dateState.format("ddd D");
  const currentHour = parseFloat(dateState.format("H"));
  console.log(dateNumber);

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
        <ToDoApp
          clockTime={clockTime}
          dateNumber={dateNumber}
          currentHour={currentHour}
        />
      </div>
    </>
  );
}

const ToDO = styled.h1`
  font-size: 96px;
  color: #007fdb;
  font-family: "Inter", sans-serif;
`;
