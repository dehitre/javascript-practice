const myArr = ['rock', 'paper', 'scissors'];

function getComputerChoice(userChoice) {
    if (!myArr.includes(userChoice)) {
        console.log('Invalid choice! Please choose rock, paper, or scissors.');
        return;
    }
    let randomIndex = Math.floor(Math.random() * myArr.length);
    let computerChoice = myArr[randomIndex];
    if (userChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${userChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
    }
}