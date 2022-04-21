
	let userChoice = prompt("Heads or Tails?", "");
	let randomNumber = Math.round(Math.random() * 1);
	let computerChoice = randomNumber
	if (randomNumber === 0) {
		computerChoice = "Heads"
	} else if (randomNumber === 1) {
		computerChoice = "Tails"
	} if (userChoice === computerChoice) {
		alert ("You guessed right! The coin flip landed on " + userChoice);
	} else {
		alert ("Sorry, the coin flip landed on " + computerChoice);
  document.getElementById("demo").innerHTML =
    "";}


	
	let birthYear = prompt("What year were you born?", "");
	const currentYear = 2022
	const age = (currentYear - birthYear);
	if (age <21 ) {
	alert ("Sorry, you are not old enough to drink in the US");
	} else if (age === 21){
		alert ("You are old enough to drink in the US...barely");
	} else if (age > 21) {
		alert ("You are old enough to drink in the US");
	}

