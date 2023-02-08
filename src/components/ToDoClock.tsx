import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import day from "../assets/day.png";
import night from "../assets/night.jpg";

function ToDoClock() {
  useEffect(() => {
    const interval = setInterval(() => setDateState(moment()), 1000);
    return () => clearInterval(interval);
  }, []);

  const [dateState, setDateState] = useState(moment());
  const clockTime = dateState.format("LT");
  const dateNumber = dateState.format("ddd D");
  const currentHour = parseFloat(dateState.format("H"));

  let isNight: Boolean;
  if (currentHour >= 6 && currentHour <= 18) {
    isNight = false;
  } else {
    isNight = true;
  }
  return (
    <ToDoClockStyled>
      <Img src={isNight ? night : day} />
      <ClockCon>
        <Day>{dateNumber}</Day>
        <Hours>{clockTime}</Hours>
      </ClockCon>
    </ToDoClockStyled>
  );
}

export default ToDoClock;

const ToDoClockStyled = styled.div`
  height: 202px;
  width: 100%;
  background-color: red;
  position: relative;
  flex-shrink: 0;
  @media (max-width: 1400px) {
    height: 168px;
  }
`;

const ClockCon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  position: absolute;
  right: 30px;
  bottom: 18px;
  @media (max-width: 1400px) {
    right: 25px;
    bottom: 15px;
  }
`;

const Day = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-family: "Russo One", sans-serif;
  color: #ffffff;
  @media (max-width: 1400px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Hours = styled.div`
  font-size: 48px;
  line-height: 52px;
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
  @media (max-width: 1400px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
`;
