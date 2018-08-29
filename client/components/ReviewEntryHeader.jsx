import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ReviewEntryHeader = ({ review }) => (
  <div>
    Entry Header
  </div>
);

ReviewEntryHeader.propTypes = {
  review: PropTypes.shape({
    accuracy: PropTypes.number.isRequired,
    checkin: PropTypes.number.isRequired,
    cleanliness: PropTypes.number.isRequired,
    communication: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.number.isRequired,
    reviewBody: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewEntryHeader;
