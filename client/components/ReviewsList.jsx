import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReviewEntryHeader from './ReviewEntryHeader';
import ReviewEntryBody from './ReviewEntryBody';

const ReviewEntry = styled.div`
  border-bottom: 1px solid #EBEBEB !important;
`;

const ReviewsList = ({ reviews, currentPage }) => {
  let reviewsToDisplay = [];

  const reviewSliceToDisplay = (currentPage - 1) * 7;
  reviewsToDisplay = reviews.slice(reviewSliceToDisplay, reviewSliceToDisplay + 7);

  return (
    <div>
      {
        reviewsToDisplay.map((review) => {
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
    </div>
  );
};


ReviewsList.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default ReviewsList;
