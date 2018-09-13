import React from 'react';
import ReactDOM from 'react-dom';

import ReviewEntryHeader from '../ReviewEntryHeader';
import sampleReviews from './data/sampleReviews';

describe('ReviewEntryHeader test suite', () => {
  const defaultProps = {
    'date': '2018-05-19T01:16:04.000Z',
    'userImage': 'https://s3.us-east-2.amazonaws.com/fakebnb-reviews/6.jpg',
    'username': 'Blake Mann Sr.'
  };

  it('renders without crashing', () => {
    const container = document.createElement('div');
    const reviews = [];
    ReactDOM.render(<ReviewEntryHeader {...defaultProps} />, container);
  });
});
