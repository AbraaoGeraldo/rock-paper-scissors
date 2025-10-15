playerScore =1;
cpuSccore = 1;

function getComputerChoice() {
    let cpu = parseInt(Math.random() * 10 + 1);
    let cpuChoice = '';

    if (cpu > 5) {
        cpuChoice = 'Scissors';
    } else if (cpu < 5) {
        cpuChoice = 'Rock';
    } else {
        cpuChoice = "Paper";
    }
}

getComputerChoice();
