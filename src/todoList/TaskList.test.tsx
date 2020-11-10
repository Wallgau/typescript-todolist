import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskList from "./TaskList";
import {todoList} from '../App'
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<TaskList />);
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