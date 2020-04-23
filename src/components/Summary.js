import React from "react";
import styled from "@emotion/styled";
import { firstInCapital } from "../helper";
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") {
    return null;
  }
  return (
    <SummaryContainer>
      <h2>Summary quote</h2>
      <ul>
        <li>Brand: {firstInCapital(brand)} </li>
        <li>Plan: {firstInCapital(plan)}</li>
        <li>Year: {year}</li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Summary;
