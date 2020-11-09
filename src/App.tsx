import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './todoList/TaskList';
import {Item} from './type'

//main goal: list of item to do and check if it is completed or not
//item will be description and done state
//item = {description:string, isDone : boolean}
//items will be store into array
//user is able to create an item
//new item {description: 'user description', isDone:false}
//items.push(new item)


function App() {
	const [list, setList]:Item = useState([])

	const addItem = (e:any) => {
		 setList({...list, description:e.target.value, isDone: false})
	}
  return (
    <>
			<TaskList list={list} addItem={addItem}/>
    </>
  );
}

export default App;
