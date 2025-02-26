# Guess the Number Game

This is a simple command-line "Guess the Number" game built using Node.js. The program generates a random secret number between 1 and 100, and the player has to guess it. The game will provide feedback whether the guess is too high or too low. The player can continue playing until they choose to stop, and the results will be saved in a file.

## Features
- The game generates a random number between 1 and 100.
- The player guesses the number, with feedback on whether the guess is too high or too low.
- The game keeps track of the number of attempts made to guess the number.
- After each game, the results are saved to a file called `gameResults.txt`.
- The player can choose to play again or stop.

## Installation

To play the game, you will need to have Node.js installed on your machine. You can download Node.js from [here](https://nodejs.org/).

1. Clone the repository:

   ```bash
   git clone https://github.com/Erak1t/guess-the-number-game.git
   cd guess-the-number-game
   ```
2.	Install the dependencies:
(In this case, there are no external dependencies required for the game.)
   ```bash
  npm install
   ```
Usage 
To start playing the game, run the following command in your terminal:
  ```bash
  node app.js
```
he game will prompt you to guess a number between 1 and 100. You will continue making guesses until you guess the correct number. Once you win, the number of attempts will be displayed, and the game will ask if you want to play again.

Game Flow
	1.	The game asks you to guess a number between 1 and 100.
	2.	If your guess is too low or too high, the game will give you feedback and ask for another guess.
	3.	If your guess is correct, the game will congratulate you and save the results in the gameResults.txt file.
	4.	You can choose to play again or quit.
Example Output:
  ```bash
	Welcome to the guess number game!
	Guess the number between 1 and 100: 50
	Try higher.
	Guess the number between 1 and 100: 75
	Try lower.
	Guess the number between 1 and 100: 60
	Congratulations! you guessed number in 3 attempts.
	Game is saved.
	try again? type: yes or no : yes

