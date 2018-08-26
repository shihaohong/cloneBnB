import React from 'react';
import styled from 'styled-components';

import FiveStar from './FiveStar';

const Wrapper = styled.section`
  margin-left: 120px;
  padding: 24px;
  background: papayawhip;
  width: 650px;
  height: 180px;
`;

const ReviewHeading = styled.h2`
  color: #484848;
  font-weight: bold;
`;

const LeftSideHeader = styled.div`
  background: white;
  width: 426px;
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
    const { reviews } = this.props;
    const averageRating = this.calculateAverageStarRating();
    const numReviews = `${reviews.length} Reviews`;

    return (
      <Wrapper>
        <ReviewHeading>
          <LeftSideHeader>
            <AverageReview>
              { numReviews }
            </AverageReview>
            <FiveStar averageRating={averageRating} />
          </LeftSideHeader>
        </ReviewHeading>
      </Wrapper>
    );
  }
}

export default ReviewHeader;
