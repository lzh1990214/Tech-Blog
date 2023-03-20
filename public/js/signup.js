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
        console.log("after response const");
        console.log(response);

        if (response.ok) {
            // alert('Successfully created an account !');
            console.log("inside if block, Successfully created an account !");
            setTimeout(document.location.replace('/'), 1500);
        } else {
            alert('Failed to create account, please try another email or password');
            console.log("inside else block");
        };

    }
};


document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

