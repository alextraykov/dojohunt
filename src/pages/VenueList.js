import React, { Component } from "react";
import styled from "styled-components";
import GymItem from "../components/GymItem";
import Search from "../components/Search";
import Logo from "../components/Logo";
import Dropdown from "../components/Dropdown";

const Page = styled.div`
  background-color: #f7f8fc;
  height: 2000px;
`;

const OneRow = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`

const PageContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;


class VenueList extends Component {
  

  render() {
    return (
      <div>
        <Page>
          <PageContainer>
   <OneRow>
              <Logo />
            <Search />
            <Dropdown />
   </OneRow>
            <GymItem />
            <GymItem />
            <GymItem />
          </PageContainer>
        </Page>
      </div>
    );
  }
}
export default VenueList;
