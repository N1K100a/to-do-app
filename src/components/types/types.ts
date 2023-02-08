export interface dataType {
  id: number;
  task: string;
  createDate: string;
  isFinished: boolean;
}

export interface filterProps {
  taskData: dataType[] | [];
  setIsFiltered: React.Dispatch<React.SetStateAction<string>>;
  isFiltered: string;
}

export interface taskCompProps {
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
  itemData: dataType;
}

export interface roundBtnProps {
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
  itemData: dataType;
}

export interface addProps {
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
}

export interface boardProps {
  setTaskData: React.Dispatch<React.SetStateAction<dataType[] | []>>;
  taskData: dataType[] | [];
  isFiltered: string;
}
