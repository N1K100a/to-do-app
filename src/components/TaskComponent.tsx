import React from "react";
import styled from "styled-components";
import RoundBtnComp from "./RoundBtn";
import trashIcon from "../assets/TrashIcon.svg";
import moment from "moment";
import { taskCompProps } from "./types/types";

function TaskComponent({ itemData, taskData, setTaskData }: taskCompProps) {
  const taskRemove = (id: number) => {
    const newArray = taskData
      .filter((item) => {
        return item.id !== id || !item.isFinished;
      })
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setTaskData(newArray);
  };

  const trashActiveStyle = {
    opacity: 1,
    cursor: "pointer",
  };

  const date = moment(itemData.createDate);
  const today = moment().startOf("day");
  const yesterday = moment().startOf("day").subtract(1, "day");
  let outputTitle;

  if (date.isSame(today, "day")) {
    outputTitle = "today";
  } else if (date.isSame(yesterday, "day")) {
    outputTitle = "yesterday";
  } else {
    outputTitle = date.fromNow();
  }

  const outputTime = date.format("LT");
  return (
    <Task>
      <LeftCon>
        <TaskName>{itemData.task}</TaskName>
        <TaskDate>
          {outputTitle} at {outputTime}
        </TaskDate>
      </LeftCon>
      <RightCon>
        <RoundBtnComp
          setTaskData={setTaskData}
          taskData={taskData}
          itemData={itemData}
        />
        <TrashBtn
          style={itemData.isFinished ? trashActiveStyle : {}}
          onClick={() => {
            taskRemove(itemData.id);
          }}>
          <img src={trashIcon} alt="Delete" />
        </TrashBtn>
      </RightCon>
    </Task>
  );
}

export default TaskComponent;

const Task = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1400px) {
    margin-bottom: 20px;
  }
`;

const LeftCon = styled.div`
  height: 100%;
  width: 300px;
  @media (max-width: 1400px) {
    width: 250px;
  }
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
  width: auto;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  word-wrap: break-word;
  @media (max-width: 1400px) {
    line-height: 22px;
    font-size: 15px;
  }
`;

const TaskDate = styled.div`
  height: 19px;
  font-size: 14px;
  line-height: 19px;
  font-family: "Inter", sans-serif;
  color: #888888;
  font-weight: 400;
  @media (max-width: 1400px) {
    height: 15px;
    line-height: 15px;
    font-size: 11px;
  }
`;

const TrashBtn = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background: none;
  margin-left: 14px;
  opacity: 0.5;
  @media (max-width: 1400px) {
    height: 20px;
    width: 20px;
    margin-left: 11px;
  }
`;
