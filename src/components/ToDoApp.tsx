import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterComponent from "./FilterComponent";
import ToDoAdd from "./ToDoAdd";
import ToDoBoard from "./ToDoBoard";
import ToDoClock from "./ToDoClock";
import { dataType } from "./types/types";

export default function ToDoApp() {
  const [taskData, setTaskData] = useState<dataType[] | []>([]);
  const [isFiltered, setIsFiltered] = useState("all");

  useEffect(() => {
    setTaskData(JSON.parse(localStorage.getItem("taskData") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);

  const [innerHeight, setInnerHeight] = useState(window.innerHeight - 40);

  const resize = () => {
    setInnerHeight(window.innerHeight - 40);
  };

  window.addEventListener("resize", resize);

  const mediaQuery = {
    height: `${innerHeight}px`,
  };
  return (
    <ToDoCon style={window.innerWidth < 481 ? mediaQuery : {}}>
      <ToDoClock />
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
  position: relative;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 360px;
    height: 532px;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin: 0 15px;
  } ;
`;
