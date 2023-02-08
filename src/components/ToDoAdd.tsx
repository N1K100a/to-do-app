import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { AddBoxIcon } from "../assets/checkboxIcon";
import addIcon from "../assets/Vector.svg";
import { addProps } from "./types/types";

function ToDoAdd({ setTaskData, taskData }: addProps) {
  const [roundIsActive, setRoundIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  let length = 0;
  if (Array.isArray(taskData)) {
    length = taskData.length;
  }

  const currentAddData = {
    id: length + 1,
    task: inputValue,
    createDate: moment().format(),
    isFinished: roundIsActive,
  };

  const addFunction = () => {
    if (inputValue) {
      setTaskData([...taskData, currentAddData].sort((a, b) => b.id - a.id));
      setInputValue("");
      setRoundIsActive(false);
    }
  };
  return (
    <AddCon>
      <RoundBtn
        style={
          roundIsActive
            ? { backgroundColor: "#20eeb0" }
            : { background: "none" }
        }
        onClick={() => {
          setRoundIsActive(!roundIsActive);
        }}>
        <AddBoxIcon roundIsActive={roundIsActive} />
      </RoundBtn>
      <TodoInput
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addFunction();
          }
        }}
        value={inputValue}
        type="text"
        placeholder="Note"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <AddBtn
        onClick={() => {
          addFunction();
        }}>
        <img src={addIcon} alt="+" />
      </AddBtn>
    </AddCon>
  );
}

export default React.memo(ToDoAdd);

const AddCon = styled.div`
  height: 49px;
  width: 100%;
  margin-top: 23px;
  padding: 0 29px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  @media (max-width: 1400px) {
    height: 40px;
    margin-top: 20px;
    padding: 0 24px;
    margin-top: 20px;
  }
`;

const TodoInput = styled.input`
  width: 275px;
  height: 100%;
  outline: none !important;
  border: 0;
  border-radius: 5px;
  background-color: #ebeff2;
  padding: 15px;
  padding-left: 48px;
  font-size: 16px;
  line-height: 19px;
  font-family: "Inter", sans-serif;
  @media (max-width: 1400px) {
    width: calc(100% - 82px);
    border-radius: 4px;
    padding: 12px;
    padding-left: 45px;
    line-height: 16px;
    font-size: 14px;
  }
`;

const AddBtn = styled.button`
  height: 100%;
  width: 88px;
  border-radius: 5px;
  background-color: #20eeb0;
  border: none;
  cursor: pointer;
  color: white;
  flex-shrink: 0;
  @media (max-width: 1400px) {
    width: 73px;
    border-radius: 4px;
    img {
      height: 15px;
      width: 15px;
    }
  }
`;

const RoundBtn = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 2px solid #20eeb0;
  left: 45px;
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    left: 38px;
    height: 18px;
    width: 18px;
    svg {
      height: 8px;
      width: 8px;
    }
  }
`;
