import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReviewEntryHeader from './ReviewEntryHeader';
import ReviewEntryBody from './ReviewEntryBody';

const Wrapper = styled.section`
  -webkit-font-smoothing: antialiased;
  font-family: Circular, "Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #484848;
  margin-left: 120px;
  padding: 24px;
  width: ${({ widgetWidth }) => widgetWidth}px;
  height: 180px;
`;

const ReviewEntry = styled.div`
  border-bottom: 1px solid #EBEBEB !important;
`;

const ReviewsList = ({ reviews }) => (
  <Wrapper>
    {
      reviews.map((review) => {
        const {
          username,
          userImage,
          date,
          reviewBody,
        } = review;

        return (
          <ReviewEntry
            key={review.id}
          >
            <ReviewEntryHeader
              username={username}
              userImage={userImage}
              date={date}
            />
            <ReviewEntryBody
              reviewBody={reviewBody}
            />
          </ReviewEntry>
        );
      })
    }
  </Wrapper>
);

ReviewsList.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default ReviewsList;
