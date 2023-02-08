import React from "react";
import styled from "styled-components";
import CheckboxIcon from "../assets/checkboxIcon";
import { roundBtnProps } from "./types/types";

function RoundBtnComp({ setTaskData, taskData, itemData }: roundBtnProps) {
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
  border-radius: 50%;
  border: 2px solid #20eeb0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1400px) {
    height: 18px;
    width: 18px;
    svg {
      height: 8px;
      width: 8px;
    }
  }
`;
