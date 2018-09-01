import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewEntryBodyWrapper = styled.div`
  width: 650px;
  margin-bottom: 15px;
`;

const DisplayLongReview = styled.button`
  color: rgb(0, 132, 137);
  cursor: pointer;
  background: transparent;
  border-width: 0px;
  font: inherit;
  padding: 0px;
  &:hover {
    text-decoration: underline;
  }
`;

class ReviewEntryBody extends React.Component {
  constructor(props) {
    super(props);

    const { reviewBody } = this.props;
    let displayReview;

    if (reviewBody.length < 280) {
      displayReview = true;
    } else {
      displayReview = false;
    }

    this.state = {
      displayReview,
    };

    this.handleDisplayLongText = this.handleDisplayLongText.bind(this);
  }

  handleDisplayLongText() {
    this.setState({
      displayReview: true,
    });
  }

  render() {
    const { reviewBody } = this.props;
    const { displayReview } = this.state;

    if (!displayReview) {
      const reviewText = reviewBody.slice(0, 280);
      return (
        <ReviewEntryBodyWrapper>
          {reviewText}
          ...
          <DisplayLongReview
            onClick={this.handleDisplayLongText}
          >
            Read more
          </DisplayLongReview>
        </ReviewEntryBodyWrapper>
      );
    }

    return (
      <ReviewEntryBodyWrapper>
        {reviewBody}
      </ReviewEntryBodyWrapper>
    );
  }
}

ReviewEntryBody.propTypes = {
  reviewBody: PropTypes.string.isRequired,
};

export default ReviewEntryBody;
