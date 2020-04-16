import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label>Brand</label>
        <select>
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
