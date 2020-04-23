import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import styled from "@emotion/styled";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spiner from "./components/Spiner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  //states
  const [summary, setSummary] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  //

  const { quote, data } = summary;

  return (
    <Container>
      <Header title={"Insurance Quote Tool"} />
      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />

        {loading ? <Spiner /> : null}

        {!loading ? (
          <Fragment>
            <Summary data={data} />
            <Result quote={quote} />
          </Fragment>
        ) : null}
      </FormContainer>
    </Container>
  );
}

export default App;
