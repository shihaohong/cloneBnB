import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FiveStar from './FiveStar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 162px 162px 162px 162px;
  grid-template-rows: 35px 35px 35px;
  height: 105px;
  width: ${({ widgetWidth }) => widgetWidth}px;
`;

const CriteriaItem = styled.div`
  font-size: 16px;
  color: #484848;
`;

const ReviewCriteriaAverage = ({ averageCriteriaRatings }) => {
  const {
    accuracy,
    checkin,
    cleanliness,
    communication,
    location,
    value,
  } = averageCriteriaRatings;

  return (
    <Wrapper>
      <CriteriaItem>
        Accuracy
      </CriteriaItem>
      <FiveStar
        averageRating={accuracy}
        starSize={16}
      />
      <CriteriaItem>
        Location
      </CriteriaItem>
      <FiveStar
        averageRating={location}
        starSize={16}
      />
      <CriteriaItem>
        Communication
      </CriteriaItem>
      <FiveStar
        averageRating={communication}
        starSize={16}
      />
      <CriteriaItem>
        Check-in
      </CriteriaItem>
      <FiveStar
        averageRating={checkin}
        starSize={16}
      />
      <CriteriaItem>
        Cleanliness
      </CriteriaItem>
      <FiveStar
        averageRating={cleanliness}
        starSize={16}
      />
      <CriteriaItem>
        Value
      </CriteriaItem>
      <FiveStar
        averageRating={value}
        starSize={16}
      />
    </Wrapper>
  );
};

export default ReviewCriteriaAverage;
