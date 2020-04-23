//obtain  difference year
export function obtainDiferenceBetweenYear(year) {
  return new Date().getFullYear() - year;
}

// calculation of the total amount to pay
export function calcBrand(brand) {
  let increment;

  switch (brand) {
    case "European":
      increment = 1.3;
      break;

    case "American":
      increment = 1.15;
      break;

    case "Asian":
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}

// Calc secure type
export function obtainPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

// Show first letter in capital letters
export function firstInCapital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
