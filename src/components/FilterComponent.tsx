import React from "react";
import styled from "styled-components";
import { filterProps } from "./types/types";

function FilterComponent({ taskData, setIsFiltered, isFiltered }: filterProps) {
  let length;
  if (Array.isArray(taskData)) {
    length = taskData.length;
  }
  let activeLength = taskData.filter((item) => !item.isFinished).length;
  let doneLength = taskData.filter((item) => item.isFinished).length;
  const filterStyle = { borderBottom: "2px solid #20eeb0" };

  return (
    <FilterCon>
      <FilterBtn
        style={isFiltered === "all" ? filterStyle : {}}
        onClick={() => {
          setIsFiltered("all");
        }}>
        All:<BtnNumber>{length}</BtnNumber>
      </FilterBtn>
      <FilterBtn
        style={isFiltered === "active" ? filterStyle : {}}
        onClick={() => {
          setIsFiltered("active");
        }}>
        Active:<BtnNumber>{activeLength}</BtnNumber>
      </FilterBtn>
      <FilterBtn
        style={isFiltered === "done" ? filterStyle : {}}
        onClick={() => {
          setIsFiltered("done");
        }}>
        Done: <BtnNumber>{doneLength}</BtnNumber>
      </FilterBtn>
    </FilterCon>
  );
}

export default FilterComponent;

const FilterCon = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: 5px;
  padding: 0 29px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
`;

const FilterBtn = styled.button`
  font-family: "Inter", sans-serif;
  height: 100%;
  width: auto;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  border: none;
  padding: 0 10px;
  display: flex;
  background: none;
  color: #20eeb0;
  font-weight: 500;
  @media (max-width: 1400px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const BtnNumber = styled.div`
  height: 100%;
  margin-left: 3px;
`;
