import React, { Component } from "react";
import styled from "styled-components";
import GymItem from "../components/GymItem";
import Search from "../components/Search";
import Logo from "../components/Logo";

const Page = styled.div`
    background-color: #f7f8fc;
    height: 2000px;
`;

const OneRow = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const PageContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

export default function VenueList(props) {
    return (
        <div>
            <Page>
                <PageContainer>
                    <OneRow>
                        <Logo />
                        <Search />
                    </OneRow>
                    <GymItem test={props.test} />
                    {/* <GymItem />
                    <GymItem /> */}
                </PageContainer>
            </Page>
        </div>
    );
}
