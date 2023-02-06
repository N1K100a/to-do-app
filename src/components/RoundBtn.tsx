import React from "react";
import styled from "styled-components";

interface dataType {
  id: number;
  task: string;
  createDate: string;
  isFinished: boolean;
}

interface Props {
  isFinished: boolean;
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
  itemData: dataType;
}

function RoundBtnComp({ isFinished, setTaskData, taskData, itemData }: Props) {
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
        isFinished
          ? { backgroundColor: "#20eeb0" }
          : { backgroundColor: "white" }
      }>
      <svg
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.77833 5.65701L0.914298 3.72532C0.813857 3.62124 0.677629 3.56276 0.535583 3.56276C0.393538 3.56276 0.25731 3.62124 0.156869 3.72532C0.0564274 3.82941 0 3.97058 0 4.11778C0 4.19067 0.0138534 4.26284 0.040769 4.33018C0.0676846 4.39752 0.107135 4.4587 0.156869 4.51024L2.4023 6.83717C2.6118 7.05428 2.95023 7.05428 3.15973 6.83717L8.84313 0.947483C8.94357 0.843396 9 0.702224 9 0.555023C9 0.407822 8.94357 0.266649 8.84313 0.162562C8.74269 0.0584756 8.60646 0 8.46442 0C8.32237 0 8.18614 0.0584756 8.0857 0.162562L2.77833 5.65701Z"
          fill="white"
        />
      </svg>
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
