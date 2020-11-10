import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserDataForm from ".";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<UserDataForm />);
});

it("renders Account header", () => {
  const wrapper = shallow(<UserDataForm />);
  const welcome = <h1>here your todoList</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
