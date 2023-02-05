import React from "react";
import styled from "styled-components";
import day from "../assets/day.png";
import night from "../assets/night.jpg";

interface Props {
  clockTime: string;
  dateNumber: string;
  currentHour: number;
}
function ToDoClock({ clockTime, dateNumber, currentHour }: Props) {
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
`;

const ClockCon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  position: absolute;
  right: 6.5%;
  bottom: 12.38%;
`;

const Day = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-family: "Russo One", sans-serif;
  color: #ffffff;
`;

const Hours = styled.div`
  font-size: 48px;
  line-height: 52px;
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
`;
