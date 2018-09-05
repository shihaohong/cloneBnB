import React from 'react';
import styled from 'styled-components';

const PaginationLinks = styled.ul`
  display: block;
  padding: 0px;
`;

const LinkItem = styled.li`
  display: inline-block;
  padding: 8px;
`;

const ReviewNavigator = ({ currentPage, numberOfPages, handlePageChange }) => {
  // Left/Right Navigation Buttons
  const renderLeftNavigationButton = () => {
    if (currentPage !== 1) {
      return (
        <LinkItem
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {'<'}
        </LinkItem>
      );
    }

    return undefined;
  };

  const renderRightNavigationButton = () => {
    if (currentPage !== numberOfPages) {
      return (
        <LinkItem
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {'>'}
        </LinkItem>
      );
    }

    return undefined;
  };

  const renderPages = (start, end) => {
    const pageButtons = [];
    for (let i = start; i <= end; i += 1) {
      pageButtons.push((
        <LinkItem
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </LinkItem>
      ));
    }

    return pageButtons;
  };

  // Main Page Number Navigation Function
  const renderPageButtons = () => {
    let pageButtonsToDisplay = [];

    if (numberOfPages < 7) {
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderPages(1, numberOfPages));
      return pageButtonsToDisplay;
    }

    if (currentPage >= 1 && currentPage <= 3) {
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderPages(1, currentPage + 2));

      pageButtonsToDisplay.push((
        <LinkItem key="...">
          ...
        </LinkItem>
      ));

      pageButtonsToDisplay.push((
        <LinkItem
          key={numberOfPages}
          onClick={() => handlePageChange(numberOfPages)}
        >
          {numberOfPages}
        </LinkItem>
      ));
    } else if (currentPage === 4) {
      // if page 4, render 1 - 5, ... lp
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderPages(1, currentPage + 1));

      pageButtonsToDisplay.push((
        <LinkItem key="...">
          ...
        </LinkItem>
      ));

      pageButtonsToDisplay.push((
        <LinkItem
          key={numberOfPages}
          onClick={() => handlePageChange(numberOfPages)}
        >
          {numberOfPages}
        </LinkItem>
      ));
    } else {
      // page 5 onwards, render 1 ... curr - 1, curr, curr + 1, ... lp OR lp - 1, lp
      pageButtonsToDisplay.push((
        <LinkItem 
          key={1}
          onClick={() => handlePageChange(1)}
        >
          1
        </LinkItem>
      ));

      pageButtonsToDisplay.push((
        <LinkItem key="...">
          ...
        </LinkItem>
      ));

      const intermediatePages = renderPages(currentPage - 1, currentPage + 1);
      pageButtonsToDisplay = pageButtonsToDisplay.concat(intermediatePages);

      pageButtonsToDisplay.push((
        <LinkItem key="...">
          ...
        </LinkItem>
      ));

      pageButtonsToDisplay.push((
        <LinkItem
          key={numberOfPages}
          onClick={() => handlePageChange(numberOfPages)}
        >
          {numberOfPages}
        </LinkItem>
      ));
    }

    return pageButtonsToDisplay;
  };

  return (
    <PaginationLinks>
      {renderLeftNavigationButton()}
      {renderPageButtons()}
      {renderRightNavigationButton()}
    </PaginationLinks>
  );
};

export default ReviewNavigator;
