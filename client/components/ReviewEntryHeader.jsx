import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EntryWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 570px;
  grid-template-rows: 24px 24px;
  width: 648px;
  height: 48px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  display: inline-block;
  grid-column: 1;
  grid-row: 1 / 2;
  width: 48px;
  height: 48px;
`;

const Username = styled.div`
  font-weight: 600;
  grid-column: 2;
  grid-row: 1;
  width: 570px;
`;

const ReviewDate = styled.div`
  grid-column: 2;
  grid-row: 2;
  width: 570px;
`;

const ReviewEntryHeader = ({ review }) => {
  const date = new Date(review.date);

  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  const formattedDate = `${months[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <EntryWrapper>
      <ProfilePicture
        src={review.userImage}
      />
      <Username>
        {review.username}
      </Username>
      <ReviewDate>
        {formattedDate}
      </ReviewDate>
    </EntryWrapper>
  );
};

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
