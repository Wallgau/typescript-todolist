import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserForm from "./UserForm";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<UserForm />);
});

it("renders Account header", () => {
  const wrapper = shallow(<UserForm />);
  const welcome = <h1>here your todoList</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
