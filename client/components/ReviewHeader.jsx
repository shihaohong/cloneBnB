import React from 'react';

class OverviewHeader extends React.Component {
  constructor(props) {
    super(props);

    this.calculateAverageStarRating = this.calculateAverageStarRating.bind(this);
  }

  calculateAverageStarRating() {
    const categories = ['accuracy', 'communication', 'cleanliness', 'location', 'checkin', 'value'];
    const { reviews } = this.props;

    let numberOfStars = 0;
    const numberOfReviews = reviews.length * categories.length;

    reviews.forEach((review) => {
      categories.forEach((category) => {
        numberOfStars += review[category];
      });
    });

    // return it
    return (numberOfStars / numberOfReviews).toFixed(2);
  }

  render() {
    const { reviews } = this.props;
    const d = "M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z";

    return (
      <div>
        <h1>
          {reviews.length} Reviews {this.calculateAverageStarRating()}

          <span
            style={
              {
                color: "#008489",
              }
            }
          >
            <svg
              viewBox="0 0 1000 1000"
              style={
                {
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }
              }
            >
              <path d={d}></path>
            </svg>
          </span>
        </h1>
      </div>
    );
  }
}

export default OverviewHeader;
