import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EntryWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 570px;
  grid-template-rows: 24px 24px;
  width: 648px;
  height: 48px;
  margin: 15px 0px 15px 0px;
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
  font-size: 14px;
  grid-column: 2;
  grid-row: 2;
  width: 570px;
`;

const ReviewEntryHeader = ({ username, userImage, date }) => {
  const dateObj = new Date(date);

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

  const formattedDate = `${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  return (
    <EntryWrapper>
      <ProfilePicture
        src={userImage}
      />
      <Username>
        {username}
      </Username>
      <ReviewDate>
        {formattedDate}
      </ReviewDate>
    </EntryWrapper>
  );
};

ReviewEntryHeader.propTypes = {
  date: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default ReviewEntryHeader;
