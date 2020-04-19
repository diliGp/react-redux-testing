import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const setup = () => shallow(<App />);

describe('Root App', () => {
  test('renders learn react link', () => {
    const wrapper = setup();
    expect(wrapper.find('[data-test="container-app"]').length).toBe(1);
  });
});