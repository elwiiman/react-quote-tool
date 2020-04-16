import React from "react";
import styled from "@emotion/styled";

const Header = ({ title }) => {
  const HeaderContainer = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
  `;

  const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: "Slabo 27px", serif;
    text-align: center;
  `;

  return (
    <HeaderContainer>
      <TextHeader>{title}</TextHeader>
    </HeaderContainer>
  );
};

export default Header;
