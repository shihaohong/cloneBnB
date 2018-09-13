import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import { LinkItem, SelectedItem, ReviewNavigator } from '../ReviewNavigator';

import sampleReviews from './data/sampleReviews';

describe('ReviewNavigator test suite', () => {
  const mockPageChange = () => {};

  it('renders without crashing', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ReviewNavigator 
      currentPage={0}
      numberOfPages={0}
      handlePageChange={mockPageChange}
    />, container);
  });

  describe('less than 7 pages', () => {
    it('should contain a button that navigates to next page', () => {
      const container = document.createElement('div');
      ReactDOM.render(<ReviewNavigator 
        currentPage={2}
        numberOfPages={5}
        handlePageChange={mockPageChange}
      />, container);

      expect(container.textContent).toMatch('<');
    });

    it('should contain a button that navigates to the previous page', () => {
      const container = document.createElement('div');
      ReactDOM.render(<ReviewNavigator 
        currentPage={2}
        numberOfPages={5}
        handlePageChange={mockPageChange}
      />, container);

      expect(container.textContent).toMatch('>');
    });

    it('should not contain button that navigates to next page if at last page', () => {
      const container = document.createElement('div');
      ReactDOM.render(<ReviewNavigator 
        currentPage={5}
        numberOfPages={5}
        handlePageChange={mockPageChange}
      />, container);

      expect(container.textContent).not.toMatch('>');
    });

    it('should not contain button that navigates to previous page if at first page', () => {
      const container = document.createElement('div');
      ReactDOM.render(<ReviewNavigator 
        currentPage={1}
        numberOfPages={5}
        handlePageChange={mockPageChange}
      />, container);

      expect(container.textContent).not.toMatch('<');
    });
  });

  describe('7 or more pages', () => {
    describe('currentPage is between 1 to 3', () => {
      it('should render navigation buttons for pages 1-3 while on page 1', () => {
        const wrapper = mount(<ReviewNavigator 
          currentPage={1}
          numberOfPages={9}
          handlePageChange={mockPageChange}
        />);

        const instance = wrapper.instance();

        const pageItems = wrapper.find(LinkItem);
        const selectedItem = wrapper.find(SelectedItem);

        expect(selectedItem.text()).toBe('1');
        expect(pageItems.at(0).text()).toBe('2');
        expect(pageItems.at(1).text()).toBe('3');
        expect(pageItems.at(2).text()).toBe('9');
      });

      it('should render navigation buttons for pages 1-5 and the last page while on page 3', () => {
        const wrapper = mount(<ReviewNavigator 
          currentPage={3}
          numberOfPages={9}
          handlePageChange={mockPageChange}
        />);

        const pageItems = wrapper.find(LinkItem);
        const selectedItem = wrapper.find(SelectedItem);

        expect(pageItems.at(0).text()).toBe('1');
        expect(pageItems.at(1).text()).toBe('2');
        expect(selectedItem.text()).toBe('3');
        expect(pageItems.at(2).text()).toBe('4');
        expect(pageItems.at(3).text()).toBe('5');
        expect(pageItems.at(4).text()).toBe('9');
      });

    });

    describe('currentPage is 4', () => {
      it('should render navigation buttons for pages 1-5 and the last page', () => {
        const wrapper = mount(<ReviewNavigator 
          currentPage={4}
          numberOfPages={9}
          handlePageChange={mockPageChange}
        />);

        const pageItems = wrapper.find(LinkItem);
        const selectedItem = wrapper.find(SelectedItem);

        expect(pageItems.at(0).text()).toBe('1');
        expect(pageItems.at(1).text()).toBe('2');
        expect(pageItems.at(2).text()).toBe('3');
        expect(selectedItem.text()).toBe('4');
        expect(pageItems.at(3).text()).toBe('5');
        expect(pageItems.at(4).text()).toBe('9');
      });
    });

    // TODO: complete testing for currentPage > 4
  });
});
