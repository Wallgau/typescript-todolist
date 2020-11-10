export interface Item {
  description: string,
  isDone: boolean
}

export interface TaskProps{
	todoList: Item[]
	toggleIsDone: (index:number) => void;
}

export interface FormProps {
  isDone: boolean;
  description: string;
  handleChange: HandleChange;
  addItem: AddItem
}
export type HandleChange = (e:any) => void

export type AddItem = (e: any) => void
