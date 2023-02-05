import React from "react";
import styled from "styled-components";

function ToDoBoard() {
  return (
    <ToDoBoardStyled>
      <Task>
        <LeftCon></LeftCon>
      </Task>
    </ToDoBoardStyled>
  );
}

export default ToDoBoard;

const ToDoBoardStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 29px 54px 29px;
`;

// tasks v

const Task = styled.div`
  width: 100%;
  height: 44px;
  background-color: #89a59c;
  margin-bottom: 24px;
`;

const LeftCon = styled.div`
  height: 100%;
  width: auto;
`;
