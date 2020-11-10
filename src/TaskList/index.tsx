import React, { FC, useState } from 'react';
import {TaskProps} from '../type'




const TaskList = ({ todoList, toggleIsDone }: TaskProps) => {

	return (
		<ul>
			{todoList.map((item, index) => 

				<li key={index}>
					<button onClick={() => toggleIsDone(index)}>{item.description}</button>
					{item.isDone && (
						<span>✓</span>
					)}
			</li>
			)}
		</ul>
)
}

export default TaskList