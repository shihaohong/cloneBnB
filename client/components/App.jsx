import React from 'react';
import axios from 'axios';

import ReviewsHeader from './ReviewsHeader';
import ReviewsList from './ReviewsList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('/listing/3/reviews') // TODO: remove hard-coded 2 and set to proper listing id
      .then(({ data }) => {
        this.setState({
          reviews: data,
        });
      });
  }

  render() {
    const { reviews } = this.state;
    const widgetWidth = 650;

    return (
      <div>
        <ReviewsHeader
          reviews={reviews}
          widgetWidth={widgetWidth}
        />
        <ReviewsList
          reviews={reviews}
        />
      </div>
    );
  }
}

export default App;
