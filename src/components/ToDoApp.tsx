import React from "react";
import styled from "styled-components";
import ToDoAdd from "./ToDoAdd";
import ToDoBoard from "./ToDoBoard";
import ToDoClock from "./ToDoClock";

interface Props {
  clockTime: string;
  dateNumber: string;
  currentHour: number;
}

export default function ToDoApp({ clockTime, dateNumber, currentHour }: Props) {
  return (
    <ToDoCon>
      <ToDoClock
        clockTime={clockTime}
        dateNumber={dateNumber}
        currentHour={currentHour}
      />
      <ToDoAdd />
      <ToDoBoard />
    </ToDoCon>
  );
}

const ToDoCon = styled.div`
  width: 430px;
  height: 636px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
