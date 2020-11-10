import React from 'react';
import logo from './logo.svg';
import './App.css';
import  TaskList  from './todoList/TaskList';
import {Item} from './type'

export const todoList: Item[] = [
	{
		description: 'go to the gym',
		isDone: false
	},
	{
		description: 'go to the grocery',
		isDone: false
	}
]

export function addItem(e:any): void {
	todoList.push({description: e.target.value, isDone: false})
}
//main goal: list of item to do and check if it is completed or not
//item will be description and done state
//item = {description:string, isDone : boolean}
//items will be store into array
//user is able to create an item
//new item {description: 'user description', isDone:false}
//items.push(new item)


function App() {

  return (
    <>
			<TaskList/>
    </>
  );
}

export default App;
