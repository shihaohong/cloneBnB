import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewEntryBodyWrapper = styled.div`
  width: 650px;
  margin-bottom: 15px;
`;

const ReviewEntryBody = ({ reviewBody }) => (
  <ReviewEntryBodyWrapper>
    {reviewBody}
  </ReviewEntryBodyWrapper>
);

ReviewEntryBody.propTypes = {
  reviewBody: PropTypes.string.isRequired,
};

export default ReviewEntryBody;
