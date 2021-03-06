import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtainDiferenceBetweenYear, calcBrand, obtainPlan } from "../helper";
import PropTypes from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 2rem;

  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setSummary, setLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  //extract states values

  const { brand, year, plan } = data;

  //read form data to put in the state

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //function to handle the sumbit of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    //base price of insurance
    let result = 2000;

    //obtain the year difference
    const difference = obtainDiferenceBetweenYear(year);

    // sustract per year 3% of the car value
    result -= (difference * 3 * result) / 100;

    // each brand has an increment American 15%, Asian 5%, European 30%
    result = calcBrand(brand) * result;

    //Basic 20%  Complete %50
    const incrementPlan = obtainPlan(plan);
    //Total
    result = parseFloat(incrementPlan * result).toFixed(2);

    //set loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSummary({
        quote: Number(result),
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChange}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={handleChange}
        />{" "}
        Complete
      </Field>

      <Button type="submit">Quote</Button>
    </form>
  );
};

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
export default Form;
