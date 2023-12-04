const input1Element = document.getElementById("input1");
const input2Element = document.getElementById("input2");
const resultElement = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let action = "+";

// console.log(resultElement.textContent);

plusBtn.addEventListener("click", () => {
  action = "+";
});
minusBtn.addEventListener("click", () => {
  action = "-";
});

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inputNumber1, inputNumber2, actionSymbol) {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  // if (actionSymbol === "+") {
  //   return number1 + number2;
  // } else if (actionSymbol === "-") {
  //   return number1 - number2;
  // }
  return actionSymbol === "+" ? number1 + number2 : number1 - number2;
}

submitBtn.addEventListener("click", () => {
  const result = computeNumbersWithAction(input1Element, input2Element, action);
  printResult(result);
  // if (action === "+") {
  //   const sum = Number(input1Element.value) + Number(input2Element.value);
  //   printResult(sum);
  // } else if (action === "-") {
  //   const sum = Number(input1Element.value) - Number(input2Element.value);
  //   printResult(sum);
  // }
});

// console.log(typeof sum);
