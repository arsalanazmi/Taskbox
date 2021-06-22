export interface TodoType {
    title: string;
    completed: boolean;
  }
  
  export interface FormPropsType {
    addTodo: (arg:any) => void;
    applyFilter: (arg:any) => void;
  }
  
  export interface FilterPropsType {
    applyFilter: (arg:any) => void;
  }
  
  export interface FormInputPropsType {
    input: string;
    setInput: (arg:any) => void;
  }
  
  export interface TitlePropsType {
    value: string;
    style?: {};
  }
  