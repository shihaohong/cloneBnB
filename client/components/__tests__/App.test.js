import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import axios from 'axios';

import App from '../App';

describe('App component test suite', () => {
  // dummy scroll function, since JSDOM doesn't have it built in
  window.scroll = () => {};

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should properly set currentPage state on handlePageChange call', () => {
  	const wrapper = shallow(<App />);
  	const instance = wrapper.instance();
  	let { handlePageChange } = instance;

  	expect(instance.state.currentPage).toBe(0);

  	handlePageChange(1);

  	expect(instance.state.currentPage).toBe(1);
  });

  it('should trigger setState when currentPage is set to the same page', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const spy = spyOn(instance, 'setState');

    let { handlePageChange } = instance;

    handlePageChange(1);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not trigger setState when currentPage is set to the same page', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const spy = spyOn(instance, 'setState');

    let { handlePageChange } = instance;

    handlePageChange(0);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
