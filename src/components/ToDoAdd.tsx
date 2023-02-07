import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import addIcon from "../assets/Vector.svg";

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
function ToDoAdd({ setTaskData, taskData }: Props) {
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

  console.log("add");
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
        }}
      />
      <TodoInput
        value={inputValue}
        type="text"
        placeholder="Note"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <AddBtn
        onClick={() => {
          if (inputValue) {
            setTaskData([...taskData, currentAddData]);
            setInputValue("");
            setRoundIsActive(false);
          }
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
`;

const AddBtn = styled.button`
  height: 100%;
  width: 88px;
  border-radius: 5px;
  background-color: #20eeb0;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  flex-shrink: 0;
`;

const RoundBtn = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 2px solid #20eeb0;
  top: 14px;
  left: 45px;
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
