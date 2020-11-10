import React, { useState } from 'react';
import {Item} from '../type'

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



const TaskList = () => {
	return (
		<ul>
			{todoList.map(item => 

				<li>
					{item.description}
					{item.isDone && (
						<span>✓</span>
					)}
			</li>
			)}
		</ul>
)
}

export default TaskList