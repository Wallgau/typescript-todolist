import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskList from "./TaskList";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<TaskList />);
});

it("renders Account header", () => {
  const wrapper = shallow(<TaskList />);
  const welcome = <ul></ul>;
  expect(wrapper.contains(welcome)).toEqual(true);
});