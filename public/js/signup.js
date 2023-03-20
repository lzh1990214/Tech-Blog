const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Successfully created an account !');
            autoLogIn();
            // document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

// function to login automatically after signup
function autoLogIn() {
    if (email && password) {
        // Send a POST request to the API endpoint
        fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(
                (response) => { console.log(response.json()) })
            .then(document.location.replace('/'))
            .catch((err) => {
                console.error(err);
            });
    }
    else {
        alert("Can't login to your account, please try again.");
    };
}

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

