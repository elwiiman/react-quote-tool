import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import styled from "@emotion/styled";
import Summary from "./components/Summary";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const { data } = summary;

  return (
    <Container>
      <Header title={"Insurance Quote Tool"} />
      <FormContainer>
        <Form setSummary={setSummary} />
        <Summary data={data} />
      </FormContainer>
    </Container>
  );
}

export default App;
