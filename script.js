'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;


const displayGuessMessage = function (message) {
	document.querySelector('.guess-message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {

	// ПРЕОБРАЗОВАНИЕ STRING В NUMBER
	const guessingNumber = Number(document.querySelector('.number-input').value);
	console.log(typeof guessingNumber);

	// ПУСТОЕ ИЛИ НЕВЕРНОЕ ЗНАЧЕНИЕ
	if (!guessingNumber) {
		//document.querySelector('.guess-message').textContent = 'Введите число!'
		displayGuessMessage('Введите число!');

		// ИГРОК ВВЕЛ ЧИСЛА < 1 && > 20
	} else if (guessingNumber > 20 || guessingNumber < 1) {
		//document.querySelector('.guess-message').textContent = 'Введено недопустимое значение'
		displayGuessMessage('Введено недопустимое значение');

		// ИГРОК ВЫИГРАЛ
	} else if (guessingNumber === secretNumber) {
		document.querySelector('.question').textContent = secretNumber;
		document.querySelector('.question').style.fontSize = 50 + 'px';
		//document.querySelector('.guess-message').textContent = 'Правильно!';
		displayGuessMessage('Правильно!');
		document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
		document.querySelector('.question').style.width = '50rem';

		// ЛУЧШИЙ РЕЗУЛЬТАТ
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// ИГРОК ОШИБСЯ
	} else if (guessingNumber !== secretNumber) {
		if (score > 1) {
			//document.querySelector('.guess-message').textContent = guessingNumber > secretNumber ? 'Число меньше' : 'Число больше';
			displayGuessMessage(guessingNumber > secretNumber ? 'Число меньше' : 'Число больше');
			score--;
			document.querySelector('.score').textContent = score;

		} else {
			//document.querySelector('.guess-message').textContent = 'Game over!';
			displayGuessMessage('Game over!');
		}
	}
})

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20 + 1);
	score = 20;

	document.querySelector('.number-input').value = '';
	document.querySelector('.score').textContent = score;
	document.querySelector('.question').textContent = '???';
	displayGuessMessage('Начни угадывать!');
	document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
	document.querySelector('.question').style.width = '25rem';
})













































//let secretNumber = Math.trunc(Math.random() * 20) + 1;

//let score = 20;
//let highscore = 0;

//console.log(secretNumber);



//document.querySelector('.check').addEventListener('click', function () {
//	const guessingNumber = Number(document.querySelector('.number-input').value);
//	console.log(guessingNumber, typeof guessingNumber);

//	// NO INPUT
//	if (!guessingNumber) {
//		document.querySelector('.guess-message').textContent = 'Введите число!';

//		// PLAYER WON
//	} else if (guessingNumber === secretNumber) {
//		document.querySelector('.guess-message').textContent = 'Правильно!';
//		document.querySelector('.question').textContent = secretNumber;
//		document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
//		document.querySelector('.question').style.width = '70rem';
//		if (score > highscore) {
//			highscore = score;
//			document.querySelector('.highscore').textContent = highscore;
//		}

//		// TOO HIGH
//	} else if (guessingNumber < secretNumber) {
//		if (score > 1) {
//			document.querySelector('.guess-message').textContent = 'Число больше';
//			score--;
//			document.querySelector('.score').textContent = score;
//		} else {
//			document.querySelector('.guess-message').textContent = 'Game over!'
//			document.querySelector('.score').textContent = 0;
//		}

//		// TOO LOW
//	} else if (guessingNumber > secretNumber) {
//		if (score > 1) {
//			document.querySelector('.guess-message').textContent = 'Число меньше';
//			score--;
//			document.querySelector('.score').textContent = score;
//		} else {
//			document.querySelector('.guess-message').textContent = 'Game over!'
//			document.querySelector('.score').textContent = 0;
//		}
//	}
//})

//document.querySelector('.again').addEventListener('click', function () {
//	secretNumber = Math.trunc(Math.random() * 20) + 1;
//	score = 20;

//	document.querySelector('.guess-message').textContent = 'Начни угадывать';
//	document.querySelector('.question').textContent = '???';
//	document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
//	document.querySelector('.score').textContent = '20';
//	document.querySelector('.number-input').value = '';
//	document.querySelector('.question').style.width = '25rem';

//})