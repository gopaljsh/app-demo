import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from './App';

describe('Counter check', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const countState = wrapper.state().count;
    expect(countState).toEqual(0);
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


