const password = '12345';
let userInput = '123';

const numberDisplay = document.getElementById('number-display');
const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    userInput += number;
    updateDisplay();
  });
});

function updateDisplay() {
  numberDisplay.textContent = userInput;
}

document.getElementById('clear-btn').addEventListener('click', () => {
  userInput = '';
  updateDisplay();
});

document.getElementById('submit-btn').addEventListener('click', () => {
  if (userInput === password) {
    alert('Correct password! Redirecting...');
    window.location.href = 'dashboard.html'; // Redirect to the dashboard page
  } else {
    userInput = '';
    updateDisplay();
    alert('Incorrect password! Please try again.');
  }
});
