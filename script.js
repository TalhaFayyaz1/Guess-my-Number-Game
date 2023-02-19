
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No Number!';
        }

        // When player wins the game
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent =
                '🥳 Correct Number!';

            //styling the background using css manupulating
            document.querySelector('body').style.backgroundColor =
                '#60b347';

            //hiding the number while guessing
            document.querySelector('.number').textContent = secretNumber

            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        }

        //when guenn is too High
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '📈 Too High';
                score--;
                document.querySelector('.score').textContent =
                    score;
            }
            else {
                document.querySelector('.message').textContent = '💥 you lost the game!';
                document.querySelector('.score').textContent = 0;

                // changing the color on losing the match
                document.querySelector('body').style.backgroundColor =
                    'red';


            }

        }

        //when guenn is too low 
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '📉 Too Low';
                score--;
                document.querySelector('.score').textContent =
                    score;
            }
            else {
                document.querySelector('.message').textContent = '💥 you lost the game!';
                document.querySelector('.score').textContent = 0;

                // changing the color on losing the match
                document.querySelector('body').style.backgroundColor =
                    'red';

            }

        }
    });


//setiing up the again button to play again
document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start quesioning....';
        document.querySelector('.score').textContent = 'score';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })