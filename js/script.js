function calculate() {
  const btnCalculate = document.getElementById('calculate');
  btnCalculate.addEventListener('click', updateParagraphsValueWithResults);
}

function updateParagraphsValueWithResults() {
  // Calculate the results
  let results = calculations();

  // Check if there were any errors while calculating the results
  if (!results) {
    return;
  }

  const paragraphsResult = document.querySelectorAll(".result");

  // Loop through the paragraphs and update their text content with the results
  for (let i = 0; i < paragraphsResult.length; i++) {
    paragraphsResult[i].textContent = results[i];
  }
}

function calculations() {
  // Array to store the results
  let result =[];

  // Get the values of the input fields 'number-a' and 'number-b'
  const numberA = Number(document.getElementById('number-a').value);
  const numberB = Number(document.getElementById('number-b').value);

  // Check if either of the inputs is empty or not a number
  if (numberA === null || numberB === null) {
    displayErrorMessage('Please enter valid numbers in both input fields.');
  return null;
  }

  // Perform all the calculations and add the results to the 'results' array
  result.push(sum(numberA,numberB));
  result.push(subtraction(numberA,numberB));
  result.push(subtraction(numberB,numberA));
  result.push(multiplication(numberA,numberB));
  result.push(division(numberA,numberB));
  result.push(division(numberB,numberA));
  result.push(power(numberA, numberB));
  result.push(power(numberB, numberA));
  result.push(squareRoot(numberA));
  result.push(squareRoot(numberB));
  result.push(factorialize(numberA));
  result.push(factorialize(numberB));
  result.push(percentageOfAinRelationToB(numberA,numberB));
  result.push(percentageOfBinRelationToA(numberA,numberB));
  result.push(average(numberA,numberB));
  return result;
}

// Helper function to display an error message
function displayErrorMessage(message) {
  return alert(message);
}

// Functions for mathematical operations

function sum(numberA, numberB) {
  return numberA + numberB;
}

function subtraction(numberA, numberB) {
  let resultA = (numberA) - (numberB);

  // if in one line ternary operation
  resultA = resultA < 0 ? `${resultA}` :resultA

  return resultA;

}

function division(numberA, numberB) {
  return (numberA / numberB).toFixed(2);
}

function multiplication(numberA, numberB) {
  return numberA * numberB;
}

function power (base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(number) {
  return Math.sqrt(number).toFixed(2) ;
}

function factorialize(number) {
  if (number === 0 || number === 1)
  return 1;
  for (var i = number - 1; i >= 1; i--) {
    number *= i;
  }

  return number;
}

function percentageOfAinRelationToB(numberA,numberB) {
  return (numberB *100 /numberA).toFixed(0) + '%';
}
function percentageOfBinRelationToA(numberA,numberB) {
  return (numberA *100 /numberB).toFixed(0) + '%';
}
function average(numberA,numberB) {
  return (numberA + numberB) / 2;
}

calculate();
