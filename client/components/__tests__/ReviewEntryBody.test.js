import React from 'react';
import ReactDOM from 'react-dom';

import ReviewEntryBody from '../ReviewEntryBody';
import sampleReviews from './data/sampleReviews';

describe('ReviewEntryBody test suite', () => {
  const { reviewBody } = sampleReviews[0];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewEntryBody 
      reviewBody={reviewBody}
    />, div);
  });
});
