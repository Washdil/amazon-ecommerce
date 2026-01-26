import { formatCurrency } from "../scripts/utils/money.js";

console.log("Test Suite: formatCurrency");

console.log("converts cents into dollars");

if (formatCurrency(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("Works with zero");

if (formatCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("for round up cases");

if (formatCurrency(2000.5) === "20.01") {
  console.log("Passed");
} else {
  console.log("Fail");
}

console.log("round off for less than 0.5");
if (formatCurrency(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
