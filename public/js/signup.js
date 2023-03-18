
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
            // document.location.replace('/profile');
            document.location.replace('/');
            alert('Successfully created an account !');
            ////text
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
