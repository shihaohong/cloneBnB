import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SingleStar = styled.span`
  height: ${({ starSize }) => starSize}px;
  width: ${({ starSize }) => starSize}px;
  padding: 1px;
`;

const FiveStarSpan = styled.span`
  height: ${({ starSize }) => starSize + 6}px;
  width: ${({ starSize }) => (starSize + 2) * 5}px;
  margin-left: 16px;
  font-size: ${({ starSize }) => starSize}px;
  display: inline-block;
  position:relative;
`;

const FiveStarTop = styled.span`
  height: ${({ starSize }) => starSize + 6}px;
  width: ${({ width }) => width}%;
  display: inline-block;
  color: #008489;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

const FiveStarBottom = styled.span`
  height: ${({ starSize }) => starSize + 6}px;
  width: 100%;
  display: inline-block;
  color: #D8D8D8;
  position: absolute;
  z-index: 0;
`;

const FiveStar = ({ averageRating, starSize }) => {
  const generateFiveStars = () => {
    const fiveStarComponents = [];

    for (let i = 0; i < 5; i += 1) {
      fiveStarComponents.push(
        <SingleStar
          starSize={starSize}
          key={i}
        >
        ★
        </SingleStar>,
      );
    }

    return fiveStarComponents;
  };

  return (
    <FiveStarSpan
      starSize={starSize}
    >
      <FiveStarTop
        width={averageRating}
        starSize={starSize}
      >
        { generateFiveStars() }
      </FiveStarTop>
      <FiveStarBottom
        starSize={starSize}
      >
        { generateFiveStars() }
      </FiveStarBottom>
    </FiveStarSpan>
  );
};

FiveStar.propTypes = {
  averageRating: PropTypes.string.isRequired,
  starSize: PropTypes.number.isRequired,
};

export default FiveStar;
