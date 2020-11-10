import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  TaskList  from './TaskList';
import {Item, AddItem, HandleChange} from './type'
import UserDataForm from './UserForm';







//main goal: list of item to do and check if it is completed or not
//item will be description and done state
//item = {description:string, isDone : boolean}
//items will be store into array
//user is able to create an item
//new item {description: 'user description', isDone:false}
//items.push(new item)


function App() {
	const [todoList, setTodoList] = useState<Item[]>([])
	const [userDescription, setDescription] = useState<string>('')

	function handleChange(e: any): void{
	setDescription(e.target.value);
}
	function addItem(): void {
		const newItem = { description: `${userDescription}`, isDone: false };
		setTodoList([...todoList, newItem])
		setDescription('');
	}
	function toggleIsDone(taskIndex: number): void {
		const newTask = { ...todoList[taskIndex]};
		newTask.isDone = !newTask.isDone;
		const newTodoList = [...todoList]
		newTodoList[taskIndex] = newTask;
		setTodoList(newTodoList);


		//au clic de l'utilisateur
		//récupérer l'element dans todoList
		//changer la valeur de isDone dans un nouvel object 
		//creer une copy de todoList
		//chercher l'index de l element à modifier
		//l'element à l'index est remplacer par le nouvel object
		//setTodoList à la copy de todoList
	}

  return (
    <>
			<TaskList todoList={todoList} toggleIsDone={toggleIsDone}/>
			<UserDataForm isDone={false} description={userDescription} handleChange={handleChange} addItem={addItem}/>
    </>
  );
}

export default App;
