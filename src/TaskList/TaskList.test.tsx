import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskList, {Props} from ".";
configure({ adapter: new Adapter() });

it("renders without crashing", ({todoList, toggleIsDone}:Props) => {
	shallow(<TaskList todoList={todoList} toggleIsDone={toggleIsDone}/>);
});

it("renders Account header", ({todoList, toggleIsDone}:Props) => {
  const wrapper = shallow(<TaskList todoList={todoList} toggleIsDone={toggleIsDone}/>);
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