import React, { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserDataForm from ".";
import App from '../App'
import { FormProps } from '../type';
configure({ adapter: new Adapter() });

const props: FormProps = {
  isDone: false,
  description: '',
  handleChange: () => {},
  addItem: () => {},
}
it("renders without crashing", () => {
  shallow(<UserDataForm {...props}/>);
});

it("contains a h1", () => {
  const wrapper = shallow(<UserDataForm {...props} />);
  const title = <h1>TODO LIST</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it("contains input with props", () => {
  const wrapper = shallow(<UserDataForm {...props} />);
  const input = <input value={props.description} onChange={props.handleChange} />;
  expect(wrapper.contains(input)).toEqual(true);
});

it("contains button with props", () => {
  const wrapper = shallow(<UserDataForm {...props} />);
  const button = <button className='addButton' type='button' onClick={props.addItem}>Add Task</button>;
  expect(wrapper.contains(button)).toEqual(true);
});

        



