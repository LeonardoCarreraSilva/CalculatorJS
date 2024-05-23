
var isCalculated = false;


function appendChar(value) {
  if (isCalculated) {
    clearDisplay();
    isCalculated = false;
  }
  document.getElementById("display").value += value;
}


function clearDisplay() {
  document.getElementById("display").value = "";
}


function deleteChar() {
  var value = document.getElementById("display").value;
  document.getElementById("display").value = value.substring(0, value.length - 1);
}

function calculate() {
  var value = document.getElementById("display").value;
  document.getElementById("display").value = eval(value);
  isCalculated = true;
}
