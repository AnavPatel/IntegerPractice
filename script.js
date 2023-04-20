function generateEquation() {
	var x = Math.floor(Math.random() * 61) - 30;
	var y = Math.floor(Math.random() * 61) - 30;
	var operator = Math.random() < 0.5 ? "+" : "-";
	var equation = x + " " + operator + " " + y;
	document.getElementById("equation").innerHTML = equation;
	document.getElementById("answer").value = "";
	document.getElementById("result").innerHTML = "";
  }
  
  function checkAnswer() {
	var answer = parseInt(document.getElementById("answer").value);
	var equation = document.getElementById("equation").innerHTML;
	var operands = equation.split(" ");
	var x = parseInt(operands[0]);
	var operator = operands[1];
	var y = parseInt(operands[2]);
	var correctAnswer = operator === "+" ? x + y : x - y;
	if (answer === correctAnswer) {
	  document.getElementById("result").innerHTML = "Correct!";
	} else {
	  document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + correctAnswer;
	}
  }
  
  function newQuestion() {
	generateEquation();
  }
  
  generateEquation();
  