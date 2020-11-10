import React, { useState } from 'react';
import {todoList} from '../App'




const TaskList = () => {
	return (
		<ul>
			{todoList.map((item, index) => 

				<li key={index}>
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