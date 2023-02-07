import React from "react";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";

interface dataType {
  id: number;
  task: string;
  createDate: string;
  isFinished: boolean;
}

interface Props {
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
}

function ToDoBoard({ taskData, setTaskData }: Props) {
  console.log("board");
  const TaskComps = taskData.map((itemData, index) => (
    <TaskComponent
      setTaskData={setTaskData}
      taskData={taskData}
      key={index}
      id={index}
      itemData={itemData}
    />
  ));
  return <ToDoBoardStyled>{TaskComps}</ToDoBoardStyled>;
}

export default React.memo(ToDoBoard);

const ToDoBoardStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 29px 54px 29px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: left;
`;
