//your JS code here. If required.
// Check if there are saved details in local storage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
if (savedUsername && savedPassword) {
  // Show button to login as existing user
  const button = document.createElement('button');
  button.setAttribute('id', 'existing');
  button.textContent = 'Login as existing user';
  document.body.appendChild(button);
}

// Handle submit button click
const form = document.querySelector('form');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('checkbox');
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (rememberMeCheckbox.checked) {
    // Save details to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    // Remove saved details from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  // Show logged in message
  alert('Logged in as ' + username);
});

// Handle existing user button click
const existingButton = document.getElementById('existing');
existingButton.addEventListener('click', function() {
  alert('Logged in as ' + savedUsername);
});
