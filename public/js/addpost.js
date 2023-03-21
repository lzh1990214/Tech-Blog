const postFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the new post form
    const post_title = document.querySelector('#newPostTitle').value.trim();
    const post_description = document.querySelector('#newPostDescription').value.trim();

    // console.log(post_title);
    // console.log(post_description);

    if (post_title && post_description) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts/addpost', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_description }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            event.preventDefault();
            console.log('before create post');
            // alert('Successfully created a new post !');
            console.log('after create post');
            // window.location.reload(true);
            window.location.reload();
            setTimeout(window.location.reload(), 2000);
        } else {
            alert(response.statusText);
            // window.location.reload(true);
            window.location.reload();
        };
    }
    else {
        alert("please fill out all required fields")
    };
};

document.querySelector('#newPostSubmit').addEventListener('click', postFormHandler);

