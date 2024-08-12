
const number = 33;
let score = 0; 

const btn = document.querySelector('.check');
const message = document.querySelector('.msg1');
const scoree = document.querySelector('.scoren');


const Guesss = () => {
    
    const guess = parseInt(prompt('Enter your guess:'));


    if (!(guess)) {
        message.textContent = "Invalid input. Please enter a valid number.";

        
        setTimeout(() => {
            message.textContent = "Enter your guess";
        }, 1500);
    } else if (guess === number) {
        message.textContent = "Correct! Good job!";
        score++; 

        scoree.textContent = `Score: ${score}`;
    } else {
        message.textContent = `Wrong! The right answer was ${number}. Try again.`;
    }
};


btn.addEventListener('click', Guesss);
