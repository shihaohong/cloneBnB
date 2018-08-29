import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReviewEntryHeader from './ReviewEntryHeader';

const Wrapper = styled.section`
  margin-left: 120px;
  padding: 24px;
  width: ${({ widgetWidth }) => widgetWidth}px;
  height: 180px;
`;

const ReviewsList = ({ reviews }) => (
  <Wrapper>
    {
      reviews.map(review => (
        <div>
          <ReviewEntryHeader
            key={review.id}
            review={review}
          />
          Add review body here
        </div>
      ))
    }
  </Wrapper>
);

ReviewsList.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default ReviewsList;
