import React from "react";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";
import { boardProps } from "./types/types";

function ToDoBoard({ taskData, setTaskData, isFiltered }: boardProps) {
  const TaskComps = taskData.map((itemData, index) => {
    const task = (
      <TaskComponent
        setTaskData={setTaskData}
        taskData={taskData}
        key={index}
        itemData={itemData}
      />
    );

    if (isFiltered === "all") return task;
    else if (isFiltered === "active") {
      return !itemData.isFinished ? task : "";
    } else if (isFiltered === "done") {
      return itemData.isFinished ? task : "";
    }
    return [];
  });
  return <ToDoBoardStyled>{TaskComps}</ToDoBoardStyled>;
}

export default React.memo(ToDoBoard);

const ToDoBoardStyled = styled.div`
  margin-top: 31px;
  width: calc(100% - 19px);
  height: 272px;
  padding: 0 5px 0 29px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    width: 100%;
    border-radius: 2.5px;
    background-color: #ececec;
  }
  @media (max-width: 1400px) {
    height: 228px;
    margin-top: 26px;
    width: calc(100% - 13px);
    padding: 0 8px 0 24px;
    ::-webkit-scrollbar {
      width: 3px;
    }

    @media (max-width: 480px) {
      height: calc(100% - 302px);
    }
  }
`;
