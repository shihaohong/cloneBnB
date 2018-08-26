import React from 'react';
import axios from 'axios';

import ReviewHeader from './ReviewHeader';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('/reviews/2') // TODO: remove hard-coded 2 and set to proper listing id
      .then(({ data }) => {
        this.setState({
          reviews: data,
        });
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <ReviewHeader
          reviews={reviews}
        />
      </div>
    );
  }
}

export default App;
