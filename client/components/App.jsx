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
    axios.get('/reviews/2')
      .then(({ data }) => {
        this.setState({
          reviews: data,
        });
      })
      .catch(err => {
        console.error('failed', err);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <ReviewHeader
          reviews={reviews}
        />
        <p>
          This is my first paragraph.
        </p>
      </div>
    );
  }
}

export default App;
