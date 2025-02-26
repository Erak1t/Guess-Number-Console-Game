/*const fs = require("fs").promises;

fs.readFile("new-task.txt", "utf-8")
  .then((content) => {
    fs.appendFile("tasks.txt", "\n" + content);
  })
  .catch((error) => {
    console.log("Error is occured:", error);
  });*/

/*const args = process.argv.slice(2);
console.log(args);

const sum = args.reduce((total, num) => total + parseFloat(num), 0);
console.log("Sum:", sum);*/

/*const { program } = require("commander");

program
  .version("1.0.0")
  .command("Вітаю <name> <age>")
  .description("привітання")
  .action((name, age) => {
    console.log(`Привіт ${name}, тобі: ${age} років`);
  });

program.parse(process.argv);*/

const readLine = require("readline");

const fs = require("fs").promises;

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minNumber = 1;
const maxNumber = 100;
let secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;

function isValidGuess(guess) {
  return !isNaN(guess) && guess >= minNumber && guess <= maxNumber;
}

function playGame() {
  rl.question(
    `Guess the number between ${minNumber} and ${maxNumber} :`,
    (guess) => {
      if (isValidGuess(guess)) {
        attempts++;
        const guessNumber = parseInt(guess);

        if (secretNumber === guessNumber) {
          console.log(
            `Congratulation! you guessed number in ${attempts} attempts.`
          );
          saveGameResults(`Player won in ${attempts} attempts.`);
        } else if (secretNumber > guessNumber) {
          console.log(`Try higher.`);
          playGame();
        } else if (secretNumber < guessNumber) {
          console.log(`Try lower.`);
          playGame();
        }
      } else {
        console.log(
          `Please enter the valid number between ${minNumber} and ${maxNumber}!`
        );
        playGame();
      }
    }
  );
}
async function saveGameResults(results) {
  try {
    await fs.appendFile("gameResults.txt", `${results}\n`);
    console.log("Game is saved.");
    playAgain();
  } catch (err) {
    console.log("Failed to save game result");
  }
}
console.log("Welcome to the guess number game!");
playGame();

function playAgain() {
  rl.question("try again? type: yes or no :", (answer) => {
    if (answer === "yes") {
      startNewGame();
    } else if (answer === "no") {
      console.log("See you next time!");
      rl.close();
    } else {
      console.log("Please input `yes` or `no` only");
      playAgain();
    }
  });
}
function startNewGame() {
  secretNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  attempts = 0;
  console.log("Welcome to the guess number game!");
  playGame();
}
