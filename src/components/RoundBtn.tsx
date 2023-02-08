import React from "react";
import styled from "styled-components";
import CheckboxIcon from "../assets/checkboxIcon";

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

function RoundBtnComp({ setTaskData, taskData, itemData }: Props) {
  const changeRound = (id: number) => {
    const newArray = taskData.map((item) => {
      if (item.id === id) {
        return { ...item, isFinished: !item.isFinished };
      }
      return item;
    });
    setTaskData(newArray);
  };

  return (
    <RoundBtn
      onClick={() => {
        changeRound(itemData.id);
      }}
      style={
        itemData.isFinished
          ? { backgroundColor: "#20eeb0" }
          : { backgroundColor: "white" }
      }>
      <CheckboxIcon />
    </RoundBtn>
  );
}

export default RoundBtnComp;

const RoundBtn = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 2px solid #20eeb0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
