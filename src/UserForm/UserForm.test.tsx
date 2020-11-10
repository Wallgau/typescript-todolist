import React, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserDataForm from ".";
import { FormProps } from '../type';
configure({ adapter: new Adapter() });

  const props:FormProps = {
  isDone: false,
  description: '',
  handleChange: () => {},
  addItem: () => {},
}
it("renders without crashing", () => {
  shallow(<UserDataForm {...props}/>);
});

it("renders Account header", () => {
  const wrapper = shallow(<UserDataForm {...props}/>);
  const welcome = <h1>here your todoList</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
