const submitButtons = document.querySelectorAll('.cmSubmitBtn');

const commentFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();

        const id = event.target.getAttribute('data-id');
        // Collect values from the new comment form
        // const comment_description = document.querySelector(`#commentBox${id}`).value.trim();
        const comment_description = document.querySelector(`#commentBox${id}`).value;

        const post_id = id;
        // console.log(comment_description);

        if (post_id && comment_description) {
            // Send a POST request to the API endpoint
            const response = await fetch('/api/posts/addcomment', {
                method: 'POST',
                body: JSON.stringify({ comment_description, post_id }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                event.preventDefault();
                // If successful, redirect the browser to the home page
                // console.log(response);
                alert('Successfully added a comment !');
                window.location.reload();
                setTimeout(window.location.reload(), 2000);
            } else {
                alert(response.statusText);
            }
        };
    };
}

// apply addEventListener to each submit button
function addEventListenerSubmitBtn() {
    for (let i = 0; i < submitButtons.length; i++) {
        const element = submitButtons[i];
        // console.log(element);
        element.addEventListener('click', commentFormHandler);
    }
};

addEventListenerSubmitBtn();
