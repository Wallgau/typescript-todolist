import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskList from "./index";
import {TaskProps, Item} from '../type'
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
	const props:TaskProps = {
		todoList: [],
		toggleIsDone:(index:number)=> {}
	}
	shallow(<TaskList {...props}/>);
});

it("renders Account header", () => {
  const wrapper = shallow(<TaskList />);
  const welcome = <ul>{todoList.map((item, index) => 

				<li key={index}>
					{item.description}
					{item.isDone && (
						<span>✓</span>
					)}
			</li>
			)}</ul>;
  expect(wrapper.contains(welcome)).toEqual(true);
});