import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskList from "./index";
import {TaskProps, Item} from '../type'
configure({ adapter: new Adapter() });

	const props:TaskProps = {
		todoList: [],
		toggleIsDone:(index:number)=> {}
	}
it("renders without crashing", () => {
	shallow(<TaskList {...props}/>);
});

it("display element of the list", () => {
	const wrapper = shallow(<TaskList {...props}/>);
  const list = <ul>{props.todoList.map((item, index) => 
				<li key={index}>
					{item.description}
					{item.isDone && (
						<span>✓</span>
					)}
			</li>
			)}</ul>;
  expect(wrapper.contains(list)).toEqual(true);
});