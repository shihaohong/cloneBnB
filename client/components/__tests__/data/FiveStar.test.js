import React from 'react';
import ReactDOM from 'react-dom';

import FiveStar from '../FiveStar';

describe('FiveStar test suite' () => {
  it('renders without crashing', () => {
    const container = createElement('div');

    ReactDOM.render(<FiveStar 
      averageRating="50.00"
      starSize={16}
    />, container);
  });

  // check that fiveStarTop has the width that was passed in
    // 50%
    // 100%
});