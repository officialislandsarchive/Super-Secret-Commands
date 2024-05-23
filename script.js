const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let userInput = '';
const correctSequence = '123456789'; // Change this to your desired sequence

const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    userInput += number;
    checkSequence();
  });
});

function checkSequence() {
  if (userInput === correctSequence) {
    alert('Correct sequence! You may proceed.');
    // Redirect to the next page or perform any other action here
  } else if (correctSequence.startsWith(userInput)) {
    // Continue to wait for more input
  } else {
    userInput = ''; // Reset input if incorrect sequence
    alert('Incorrect sequence! Please try again.');
  }
}
