import React from "react";
import styled from "styled-components";
import RoundBtnComp from "./RoundBtn";
import trashIcon from "../assets/TrashIcon.svg";

function TaskComponent() {
  return (
    <Task>
      <LeftCon>
        <TaskName>Dinner</TaskName>
        <TaskDate>Today at 8:00 PM</TaskDate>
      </LeftCon>
      <RightCon>
        <RoundBtnComp />
        <TrashBtn>
          <img src={trashIcon} alt="Delete" />
        </TrashBtn>
      </RightCon>
    </Task>
  );
}

export default TaskComponent;

const Task = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const LeftCon = styled.div`
  height: 100%;
  width: auto;
`;

const RightCon = styled.div`
  height: 100%;
  width: auto;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskName = styled.div`
  height: 22px;
  width: auto;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

const TaskDate = styled.div`
  height: 17px;
  font-size: 14px;
  line-height: 17px;
  margin-top: 5px;
  font-family: "Inter", sans-serif;
  color: #888888;
  font-weight: 400;
`;

const TrashBtn = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background: none;
  margin-left: 14px;
`;
