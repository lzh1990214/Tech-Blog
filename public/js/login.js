const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#emailLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/');
    } else {
      alert("Wrong email or password, please try again.");
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
