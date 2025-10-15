playerScore =1;
cpuSccore = 1;

function getComputerChoice() {
    let cpu = parseInt(Math.random() * 10 + 1);
    let cpuChoice = '';

    if (cpu > 5) {
        console.log('Tesoura');
    } else if (cpu < 5) {
        console.log('Pedra');
    } else {
        console.log('Papel')
    }
}

getComputerChoice();
