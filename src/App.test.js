import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';



test('renders learn react link', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  expect(wrapper.render()).toMatchSnapshot();
  //expect(linkElement).toBeInTheDocument();
});


