import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 15px;
  background: white;
  border: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

export default function VenueButton(props) {
  return (
    <Button onClick={props.onClick}>
      <img src="dojohunt-logo.svg" />
    </Button>
  );
}
