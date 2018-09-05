import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PaginationLinks = styled.ul`
  display: block;
  padding: 0px;
`;

const LinkItem = styled.li`
  color: rgb(0, 132, 137);
  cursor: pointer;
  display: inline-block;
  padding: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const ExpandedItem = styled.li`
  display: inline-block;
  padding: 16px;
`;

const SelectedItem = styled.li`
  background-color: transparent;
  display: inline-block;
  padding: 16px;
`;

const SelectedButton = styled.button`
  display: inline-block;
  font-size: 14px;
  background-color: rgb(0, 132, 137);
  color: rgb(255, 255, 255);
  width: 32px;
  height: 32px;
  border-width: 1px;
  border-style: solid;
  border-color: initial;
  border-image: initial;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ArrowItem = styled.li`
  background-color: transparent;
  display: inline-block;
  padding: 16px;
`;

const ArrowButton = styled.button`
  display: inline-block;
  font-size: 14px;
  color: rgb(0, 132, 137);
  width: 32px;
  height: 32px;
  border-width: 1px;
  border-style: solid;
  border-color: initial;
  border-image: initial;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ReviewNavigator = ({ currentPage, numberOfPages, handlePageChange }) => {
  // Left/Right Navigation Buttons
  const renderLeftNavigationButton = () => {
    if (currentPage !== 1) {
      return (
        <ArrowItem
          key="<"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowButton>
            {'<'}
          </ArrowButton>
        </ArrowItem>
      );
    }

    return undefined;
  };

  const renderRightNavigationButton = () => {
    if (currentPage !== numberOfPages) {
      return (
        <ArrowItem
          key=">"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ArrowButton>
            {'>'}
          </ArrowButton>
        </ArrowItem>
      );
    }

    return undefined;
  };

  const isSelectedPageRender = (currentPage, index) => {
    if (currentPage === index) {
      return (
        <SelectedItem
          key={index}
          onClick={() => handlePageChange(index)}
        >
          <SelectedButton>
            {index}
          </SelectedButton>
        </SelectedItem>
      );
    }

    return (
      <LinkItem
        key={index}
        onClick={() => handlePageChange(index)}
      >
        {index}
      </LinkItem>
    );
  };

  const renderPages = (start, end) => {
    const pageButtons = [];
    for (let i = start; i <= end; i += 1) {
      pageButtons.push(isSelectedPageRender(currentPage, i));
    }

    return pageButtons;
  };

  const renderTrailingStart = () => {
    const pageButtons = [];

    pageButtons.push((
      isSelectedPageRender(currentPage, 1)
    ));

    pageButtons.push((
      <ExpandedItem key="<...">
        ...
      </ExpandedItem>
    ));

    return pageButtons;
  };

  const renderTrailingEnd = () => {
    const pageButtons = [];

    pageButtons.push((
      <ExpandedItem key=">...">
        ...
      </ExpandedItem>
    ));

    pageButtons.push((
      isSelectedPageRender(currentPage, numberOfPages)
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
