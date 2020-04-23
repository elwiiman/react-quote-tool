import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultQuote = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid;
  color: #26c6da;
  background-color: #26c6da;
  margin-top: 1rem;
  position: relative;
`;

const Total = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message>Choose brand, year and insurance type</Message>
  ) : (
    <ResultQuote>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={quote}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Total>The total is: $ {quote}</Total>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuote>
  );
};

export default Result;
