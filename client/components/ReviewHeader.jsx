import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FiveStar from './FiveStar';
import ReviewCriteriaAverage from './ReviewCriteriaAverage';

const Wrapper = styled.section`
  margin-left: 120px;
  padding: 24px;
  background: papayawhip;
  width: ${({ widgetWidth }) => widgetWidth}px;
  height: 180px;
`;

const ReviewHeading = styled.h2`
  border-bottom: 1px solid #EBEBEB !important;
  color: #484848;
  font-weight: bold;
`;

const LeftSideHeader = styled.div`
  background: white;
  display: inline-block;
  width: ${({ widgetWidth }) => (widgetWidth * 0.65)}px;
  height: 56px;
`;

const RightSideHeader = styled.div`
  background: white;
  display: inline-block;
  position: absolute;
  width: ${({ widgetWidth }) => (widgetWidth * 0.35)}px;
  height: 56px;
`;

const AverageReview = styled.span`
  height: 50px;
  display: inline-block;
`;

class ReviewHeader extends React.Component {
  constructor(props) {
    super(props);

    this.calculateAverageStarRating = this.calculateAverageStarRating.bind(this);
  }

  calculateAverageStarRating() {
    const categories = ['accuracy', 'communication', 'cleanliness', 'location', 'checkin', 'value'];
    const { reviews } = this.props;

    let numberOfStars = 0;
    const numberOfReviews = reviews.length * categories.length;

    reviews.forEach((review) => {
      categories.forEach((category) => {
        numberOfStars += review[category];
      });
    });

    const averageRating = numberOfStars / numberOfReviews;
    const averagePercentageRating = `${(averageRating / 5 * 100).toFixed(2)}%`;

    return averagePercentageRating;
  }

  render() {
    const { reviews, widgetWidth } = this.props;
    const averageRating = this.calculateAverageStarRating();
    const numReviews = `${reviews.length} Reviews`;

    return (
      <Wrapper
        widgetWidth={widgetWidth}
      >
        <ReviewHeading>
          <LeftSideHeader
            widgetWidth={widgetWidth}
          >
            <AverageReview>
              { numReviews }
            </AverageReview>
            <FiveStar
              averageRating={averageRating}
              starSize={18}
            />
          </LeftSideHeader>
          <RightSideHeader
            widgetWidth={widgetWidth}
          />
        </ReviewHeading>
        <ReviewCriteriaAverage
          widgetWidth={widgetWidth}
        />
      </Wrapper>
    );
  }
}

ReviewHeader.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default ReviewHeader;
