import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewsHeader from '../ReviewsHeader';
import sampleData from './data/sampleData';

configure({ adapter: new Adapter() });

describe('ReviewsHeader test suite', () => {
  const defaultWidgetWidth = 650;

  it('renders without crashing', () => {
    const container = document.createElement('div');
    const reviews = [];
    ReactDOM.render(<ReviewsHeader 
      reviews={reviews}
      widgetWidth={defaultWidgetWidth}
    />, container);
  });

  it('should render the text \'{number} Reviews\' based on the number of reviews passed in', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ReviewsHeader
      reviews={sampleData}
      widgetWidth={defaultWidgetWidth}
    />, container);
    expect(container.textContent).toMatch('5 Reviews');
  });

  it('should calculate the total average star ratings correctly for one review', () => {
    const firstReviewObj = [sampleData[0]];
    const wrapper = shallow(<ReviewsHeader
      reviews={firstReviewObj}
      widgetWidth={defaultWidgetWidth}
    />);

    const instance = wrapper.instance();

    const actualTotalRating = instance.calculateAverageTotalStarRating();

    expect(actualTotalRating).toBe('56.67');
  });

  it('should calculate the total average star ratings correctly for five reviews', () => {  
    const wrapper = shallow(<ReviewsHeader 
      reviews={sampleData}
      widgetWidth={defaultWidgetWidth}
    />);

    const instance = wrapper.instance();

    const actualTotalRating = instance.calculateAverageTotalStarRating();

    expect(actualTotalRating).toBe('54.00');
  });

  it('should calculate the average criteria star ratings correctly for one review', () => {
    const firstReviewObj = [sampleData[0]];
    const wrapper = shallow(<ReviewsHeader
      reviews={firstReviewObj}
      widgetWidth={defaultWidgetWidth}
    />);

    const instance = wrapper.instance();

    const { 
      accuracy,
      checkin,
      cleanliness,
      communication,
      location,
      value
    } = instance.calculateAverageCriteriaStarRating();

    expect(accuracy).toBe('60.00');
    expect(checkin).toBe('80.00');
    expect(cleanliness).toBe('20.00');
    expect(communication).toBe('100.00');
    expect(location).toBe('40.00');
    expect(value).toBe('40.00');
  });

  it('should calculate the average criteria star ratings correctly for five reviews', () => {
    const wrapper = shallow(<ReviewsHeader 
      reviews={sampleData}
      widgetWidth={defaultWidgetWidth}
    />);

    const instance = wrapper.instance();

    const { 
      accuracy,
      checkin,
      cleanliness,
      communication,
      location,
      value
    } = instance.calculateAverageCriteriaStarRating();

    expect(accuracy).toBe('52.00');
    expect(checkin).toBe('48.00');
    expect(cleanliness).toBe('60.00');
    expect(communication).toBe('60.00');
    expect(location).toBe('64.00');
    expect(value).toBe('40.00');
  });
});
