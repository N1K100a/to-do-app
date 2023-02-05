import React from "react";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";

function ToDoBoard() {
  return (
    <ToDoBoardStyled>
      <TaskComponent />
    </ToDoBoardStyled>
  );
}

export default ToDoBoard;

const ToDoBoardStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 29px 54px 29px;
`;
