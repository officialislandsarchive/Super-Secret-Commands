const password = '12345';
let userInput = '';

const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    userInput += number;
    checkPassword();
  });
});

function checkPassword() {
  if (userInput === password) {
    alert('Correct password! You may proceed.');
    // Redirect to the next page or perform any other action here
  } else if (password.startsWith(userInput)) {
    // Continue to wait for more input
  } else {
    userInput = ''; // Reset input if incorrect password
    alert('Incorrect password! Please try again.');
  }
}
