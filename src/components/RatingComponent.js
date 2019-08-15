import React from "react";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";

const SRWrapper = styled.div`
  background-color: white;
  padding: 20px;
  flex-direction: column;
  justify-items: flex-start;
  display: flex;
  margin-right: 15px;
  flex: 1;
`;

const CategoryIcon = styled.p`
  font-size: 40px;
  padding-right: 15px;
`;
// Ask Petar how to conditonally render icon depending of the props value

const SRHeading = styled.h2`
  font-size: 18px;
  padding-bottom: 10px;
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
        <div>
          <SRHeading>{this.props.category}</SRHeading>
        </div>
        <p>{this.props.description}</p>
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
