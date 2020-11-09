import React, { useState } from 'react';
import { Item } from '../type';

interface Props {
	list: Item[]
}



const TaskList: React.FC<Props> = ({list}) => {
	return (
		<ul>
			{list.map((item:Item) => 

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