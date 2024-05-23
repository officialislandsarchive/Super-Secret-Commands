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
  const userInputString = userInput.join('');
  if (userInputString.length <= passwordSequence.length) {
    const partialSequence = passwordSequence.slice(0, userInput.length);
    if (userInputString === partialSequence.join('')) {
      if (userInputString === passwordSequence.join('')) {
        alert('Correct password! Redirecting...');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
      }
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
