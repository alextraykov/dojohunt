import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import RatingComponent from "../components/RatingComponent";

const FullWidthContainer = styled.div`
  width: 100%;
  height: 400px;
  z-index: -1;
  background-image: url("https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 50%;
`;

const Page = styled.div`
  background-color: #f7f8fc;
  height: 2000px;
`;

const PageContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 2;
  transform: translateY(-100px);
  background-color: #fff;
  -webkit-box-shadow: 0px 33px 102px -50px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 33px 102px -50px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 33px 102px -50px rgba(0, 0, 0, 0.5);
`;
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 0;
`;
const MapDiv = styled.div`
  display: flex;
`;

const LeftCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  line-height: 1.5;
`;

const Rating = styled.p`
  font-size: 24px;
  font-weight: 800;
`;
const Location = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const FWImg = styled.img`
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button = styled.button`
  background-color: #f44336;
  padding: 15px 20px 15px 20px;
  color: white;
  border: none;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const SecondaryHead = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;

class VenuePage extends Component {
  getVenueImage = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/";
    axios.get(endPoint);
  };
  render() {
    return (
      <div>
        <Page>
          <FullWidthContainer />
          <PageContainer>
            <DescriptionContainer>
              <LeftCont>
                <HeaderDiv>
                  <Heading>Boxing Gym</Heading>
                  <Rating>4.5 ⭐️</Rating>
                </HeaderDiv>
                <Location> Location 📍</Location>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
                <Button>Contact Gym</Button>
              </LeftCont>
              <MapDiv>
                <img src="https://i.imgur.com/Riyq6PB.png" />
              </MapDiv>
            </DescriptionContainer>
            <SecondaryHead>Gym Ratings</SecondaryHead>
            <RatingComponent />
          </PageContainer>
        </Page>
      </div>
    );
  }
}
export default VenuePage;
