import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from './App';

describe('Counter check', () => {
  const wrapper = shallow(<App />);
  
  it('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  it('starts with a count of 0', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current Count: 0');
  })

  it('can increament the count when the button is clicked', () => {
    const increamentBtn = wrapper.find('button.increament');
    increamentBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current Count: 1');
  })

  it('can decreament the count when the button is clicked', () => {
    const decreamentBtn = wrapper.find('button.decreament');
    decreamentBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current Count: 0');
  })
})

// test('renders learn react link', () => {
//   const wrapper = shallow(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );
//   // let header = wrapper.render().find('header');
//   // let righttext = header.find('.text-right').text();
//   // expect(righttext).toBe('User Name');
//   //expect(linkElement).toBeInTheDocument();
// });


