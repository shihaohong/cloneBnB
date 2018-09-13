import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ReviewsHeader from './ReviewsHeader';
import ReviewsList from './ReviewsList';
import ReviewNavigator from './ReviewNavigator';

const Wrapper = styled.section`
  -webkit-font-smoothing: antialiased;
  font-family: Circular, "Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #484848;
  margin-left: 120px;
  padding: 24px;
  width: ${({ widgetWidth }) => widgetWidth}px;
  height: 180px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      reviews: [],
      currentPage: 0,
      numberOfPages: 0,
    };

    this.fetchReviews = this.fetchReviews.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const listingId = window.location.pathname.split('/')[2];
    this.fetchReviews(listingId);
  }

  fetchReviews(listingId) {
    axios.get(`/listing/${listingId}/reviews`)
      .then(({ data }) => {
        data.sort((reviewA, reviewB) => new Date(reviewB.date) - new Date(reviewA.date));

        const numberOfPages = Math.ceil(data.length / 7);

        this.setState({
          reviews: data,
          currentPage: 1,
          numberOfPages,
        });
      });
  }

  handlePageChange(newPage) {
    const { currentPage } = this.state;
    if (newPage !== currentPage) {
      this.setState({
        currentPage: newPage,
      });

      window.scroll({
        top: this.myRef,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { reviews, currentPage, numberOfPages } = this.state;
    const widgetWidth = 650;

    return (
      <Wrapper
        widgetWidth={widgetWidth}
      >
        <ReviewsHeader
          reviews={reviews}
          widgetWidth={widgetWidth}
        />
        <ReviewsList
          reviews={reviews}
          currentPage={currentPage}
        />
        <ReviewNavigator
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          handlePageChange={this.handlePageChange}
        />
      </Wrapper>
    );
  }
}

export default App;
