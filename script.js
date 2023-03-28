let screen = document.getElementById('result');
let expression = '';

function addToScreen(value) {
	if (value === 'DEL') {
		expression = expression.slice(0, -1);
		screen.innerHTML = expression;
	} else {
		expression += value;
		screen.innerHTML = expression;
	}
}

function clearScreen() {
	expression = '';
	screen.innerHTML = '';
}

function calculate() {
  let result;
  try {
    result = new Function('return ' + expression)();
    screen.innerHTML = result;
    expression = result.toString();
  } catch (e) {
    screen.innerHTML = 'Error';
    expression = '';
  }
}
