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
    listing_id: PropTypes.number.isRequired,
    location: PropTypes.number.isRequired,
    review_body: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewEntryHeader;
