import React from "react";
import styled from "styled-components";

interface dataType {
  id: number;
  task: string;
  createDate: string;
  isFinished: boolean;
}

interface Props {
  taskData: dataType[] | [];
  setIsFiltered: React.Dispatch<React.SetStateAction<string>>;
  isFiltered: string;
}

function FilterComponent({ taskData, setIsFiltered, isFiltered }: Props) {
  let length = 0;
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
  height: 24px;
  width: 100%;
  flex-shrink: 0;
  margin-top: 5px;
  padding: 0 29px;
  display: flex;
  justify-content: space-between;
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
`;

const BtnNumber = styled.div`
  height: 100%;
  margin-left: 3px;
`;
