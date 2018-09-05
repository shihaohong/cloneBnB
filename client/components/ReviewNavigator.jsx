import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
          key="<"
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
          key=">"
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

  const renderTrailingStart = () => {
    const pageButtons = [];

    pageButtons.push((
      <LinkItem
        key={1}
        onClick={() => handlePageChange(1)}
      >
        1
      </LinkItem>
    ));

    pageButtons.push((
      <LinkItem key="<...">
        ...
      </LinkItem>
    ));

    return pageButtons;
  };

  const renderTrailingEnd = () => {
    const pageButtons = [];

    pageButtons.push((
      <LinkItem key=">...">
        ...
      </LinkItem>
    ));

    pageButtons.push((
      <LinkItem
        key={numberOfPages}
        onClick={() => handlePageChange(numberOfPages)}
      >
        {numberOfPages}
      </LinkItem>
    ));

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
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderTrailingEnd());
    } else if (currentPage === 4) {
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderPages(1, currentPage + 1));
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderTrailingEnd());
    } else if (currentPage >= 4 && currentPage <= numberOfPages - 4) {
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderTrailingStart());

      const intermediatePages = renderPages(currentPage - 1, currentPage + 1);
      pageButtonsToDisplay = pageButtonsToDisplay.concat(intermediatePages);

      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderTrailingEnd());
    } else if (currentPage >= (numberOfPages - 3) && (currentPage <= (numberOfPages - 1))) {
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderTrailingStart());

      const intermediatePages = renderPages(currentPage - 1, numberOfPages);
      pageButtonsToDisplay = pageButtonsToDisplay.concat(intermediatePages);
    } else {
      pageButtonsToDisplay = pageButtonsToDisplay.concat(renderTrailingStart());

      const intermediatePages = renderPages(currentPage - 2, numberOfPages);
      pageButtonsToDisplay = pageButtonsToDisplay.concat(intermediatePages);
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

ReviewNavigator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default ReviewNavigator;
