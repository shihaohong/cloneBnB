import React from 'react';
import styled from 'styled-components';

const SingleStar = styled.span`
  height: 18px;
  width: 18px;
  padding: 1px;
`;

const FiveStarSpan = styled.span`
  height: 24px;
  width: 100px;
  margin-left: 16px;
  font-size: 18px;
  display: inline-block;
  position:relative;
`;

const FiveStarTop = styled.span`
  height: 24px;
  width: ${({ width }) => width};
  display: inline-block;
  color: #008489;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

const FiveStarBottom = styled.span`
  height: 24px;
  width: 100px;
  display: inline-block;
  color: #D8D8D8;
  z-index: 0;
`;

const FiveStar = ({ averageRating }) => (
  <FiveStarSpan>
    <FiveStarTop width={averageRating}>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
    </FiveStarTop>
    <FiveStarBottom>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
      <SingleStar>
        ★
      </SingleStar>
    </FiveStarBottom>
  </FiveStarSpan>
);

export default FiveStar;
