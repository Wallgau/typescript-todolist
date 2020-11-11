import React, {useState} from 'react';
import App from './App';
import { Item } from './type';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
describe('unit test handleChange', () => {
const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: initial => [initial, mockSetState]
}));
   
  
  const mockFunction= (userValue: string): void =>{
	mockSetState(userValue);
  }

test('will return user description onChange', () => {
  const handleChange = mockFunction('go to the gym');


  expect(mockSetState).toHaveBeenCalled();
  expect(mockFunction).toHaveBeenCalled();
});
  expect(mockFunction('go to the gym')).toBe('go to the gym')
});

