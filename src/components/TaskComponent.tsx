import React from "react";
import styled from "styled-components";
import RoundBtnComp from "./RoundBtn";
import trashIcon from "../assets/TrashIcon.svg";

interface dataType {
  id: number;
  task: string;
  createDate: string;
  isFinished: boolean;
}

interface Props {
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
  itemData: dataType;
}

function TaskComponent({ itemData, taskData, setTaskData }: Props) {
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
  return (
    <Task>
      <LeftCon>
        <TaskName>{itemData.task}</TaskName>
        <TaskDate>{itemData.createDate}</TaskDate>
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
  opacity: 0.5;
`;
