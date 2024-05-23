const passwordSequence = ['1', '2', '3', '4', '5'];
let userInput = [];

const numberDisplay = document.getElementById('number-display');
const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    userInput.push(number);
    updateDisplay();
    checkPassword();
  });
});

function updateDisplay() {
  numberDisplay.textContent = userInput.join('');
}

function checkPassword() {
  if (userInput.length === passwordSequence.length) {
    const userInputString = userInput.join('');
    if (userInputString === passwordSequence.join('')) {
      alert('Correct password! Redirecting...');
      window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
      userInput = [];
      updateDisplay();
      alert('Incorrect password! Please try again.');
    }
  }
}

document.getElementById('clear-btn').addEventListener('click', () => {
  userInput = [];
  updateDisplay();
});

document.getElementById('submit-btn').addEventListener('click', () => {
  alert('Please enter the full password sequence.');
});
