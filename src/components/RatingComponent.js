import React from "react";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";

const SRWrapper = styled.div`
  background-color: white;
  padding: 20px;
`;

const SRHeading = styled.h2`
  font-size: 18px;
`;
export default class RatingComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <SRWrapper>
        <SRHeading>Cleanliness</SRHeading>
        <p>Rate how friendly are the gym practitioners and coaches</p>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </SRWrapper>
    );
  }
}
