import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const ReviewEntryHeader = ({ review }) => (
  <div>
    <ProfilePicture
      src={review.userImage}
    />
    {review.username}
    {review.date}
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
