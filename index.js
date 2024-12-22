let choices = document.querySelectorAll('.choices');
let userChoice = document.querySelector('.user-choice');
let score = document.querySelector('.score');
let show = document.querySelector('.btn');
let SelectNotice = document.querySelector('.Select-notice');
let pastrecord = document.querySelector(".past-record");
let ties = 0;
let wins = 0;
let loses = 0;


// getting past records 




choices.forEach(choice => {
    choice.addEventListener('click', () => {
        userChoice.classList.remove("d-none");
        let text = choice.children[1].innerText;
        // console.log(text);
        SelectNotice.classList.add('d-none');
        userChoice.innerHTML = 'You Choice : ' + text;

    })
});


function chooseRandomNumber() {
    let cChoice = ['Rock', 'Paper', 'Scissor'];
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    let compuerChoice = cChoice[randomChoice - 1];
    console.log('Computer Chooses : ' + compuerChoice);
    score.classList.remove('d-none');
    score.children[0].innerHTML = 'Computer Choice : ' + compuerChoice;

    let userChoice = document.querySelector('.user-choice').innerText.replace('You Choice : ', '');
    console.log('You Chooses : ' + userChoice);

    if (compuerChoice === userChoice) {
        score.children[1].innerHTML = "It's A Tie";
        score.children[1].classList.remove('bg-success');
        score.children[1].classList.remove('bg-danger');
        score.children[1].classList.add('bg-secondary');
        ties = ties + 1;
        pastrecord.children[2].innerHTML = 'Ties : ' + ties;
    }
    if (compuerChoice === 'Rock' && userChoice === 'Paper' || compuerChoice === 'Paper' && userChoice === 'Scissor' || compuerChoice === 'Scissor' && userChoice === 'Rock') {
        score.children[1].innerHTML = "Hurray, You Won!";
        score.children[1].classList.add('bg-success');
        score.children[1].classList.remove('bg-danger');
        score.children[1].classList.remove('bg-secondary');
        wins = wins + 1;
        pastrecord.children[0].innerHTML = 'Wins : ' + wins;
    }
    if (compuerChoice === 'Rock' && userChoice === 'Scissor' || compuerChoice === 'Paper' && userChoice === 'Rock' || compuerChoice === 'Scissor' && userChoice === 'Paper') {
        score.children[1].innerHTML = "Oops, Computer Won";
        score.children[1].classList.remove('bg-success');
        score.children[1].classList.add('bg-danger');
        score.children[1].classList.remove('bg-secondary');
        loses = loses + 1;
        pastrecord.children[1].innerHTML = 'Loses : ' + loses;
    }

}


show.onclick = () => {
    if (userChoice.classList.contains('d-none')) {
        SelectNotice.classList.remove('d-none')
        // userChoice.innerHTML = "Please Select Your Choice First!";
    } else {
        chooseRandomNumber();
    }
}

