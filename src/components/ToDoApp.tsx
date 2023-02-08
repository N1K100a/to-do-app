import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterComponent from "./FilterComponent";
import ToDoAdd from "./ToDoAdd";
import ToDoBoard from "./ToDoBoard";
import ToDoClock from "./ToDoClock";

interface Props {
  clockTime: string;
  dateNumber: string;
  currentHour: number;
}
interface dataType {
  id: number;
  task: string;
  createDate: string;
  isFinished: boolean;
}

export default function ToDoApp({ clockTime, dateNumber, currentHour }: Props) {
  const [taskData, setTaskData] = useState<dataType[] | []>([]);
  const [isFiltered, setIsFiltered] = useState("all");

  useEffect(() => {
    setTaskData(JSON.parse(localStorage.getItem("taskData") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);

  return (
    <ToDoCon>
      <ToDoClock
        clockTime={clockTime}
        dateNumber={dateNumber}
        currentHour={currentHour}
      />
      <ToDoAdd setTaskData={setTaskData} taskData={taskData} />
      <ToDoBoard
        setTaskData={setTaskData}
        taskData={taskData}
        isFiltered={isFiltered}
      />
      <FilterComponent
        taskData={taskData}
        setIsFiltered={setIsFiltered}
        isFiltered={isFiltered}
      />
    </ToDoCon>
  );
}

const ToDoCon = styled.div`
  width: 430px;
  height: 636px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
