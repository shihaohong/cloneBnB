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

    this.state = {
      reviews: [],
      currentPage: 0,
      numberOfPages: 0,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    axios.get('/listing/3/reviews') // TODO: remove hard-coded 2 and set to proper listing id
      .then(({ data }) => {
        const numberOfPages = Math.ceil(data.length / 7);

        this.setState({
          reviews: data,
          currentPage: 1,
          numberOfPages,
        });
      });
  }

  handlePageChange(newPage) {
    this.setState({
      currentPage: newPage,
    });
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
