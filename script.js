function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  var result = document.getElementById('result').value;
  var calculatedResult;
  
  try {
    calculatedResult = eval(result);
    if (calculatedResult === undefined || isNaN(calculatedResult)) {
      calculatedResult = "Invalid expression";
    }
  } catch (error) {
    calculatedResult = "Error";
  }
  
  document.getElementById('result').value = calculatedResult;
}
