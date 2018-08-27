import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 105px;
  width: ${({ widgetWidth }) => widgetWidth}px;
`;

class ReviewCriteriaAverage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        Will contain more average rating information
      </Wrapper>
    );
  }
}

export default ReviewCriteriaAverage;
