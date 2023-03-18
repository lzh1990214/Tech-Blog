const postFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the new post form
    const post_title = document.querySelector('#newPostTitle').value.trim();
    const post_description = document.querySelector('#newPostDescription').value.trim();

    console.log(post_title);
    console.log(post_description);

    if (post_title && post_description) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts/addpost', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/api/posts');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#newPostForm').addEventListener('submit', postFormHandler);

