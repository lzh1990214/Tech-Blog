const deleteButtons = document.querySelectorAll('.deleteBtn');
const saveButtons = document.querySelectorAll('.savePostBtn');

const editPostFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');

        // collect values from the corresponding forms based on the specific "data-id" of the selected post
        const post_title = document.querySelector(`#postTitle${id}`).value.trim();
        const post_description = document.querySelector(`#postDescription${id}`).value.trim();

        if (post_title && post_description) {
            event.preventDefault();
            // Send a PUT request to the API endpoint 
            const response = await fetch(`/api/posts/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify({ post_title, post_description }),
                    headers: { 'Content-Type': 'application/json' },
                });

            if (response.ok) {
                console.log("updated the post successfully");
                // window.location.replace('/api/posts');
                window.location.reload();
                setTimeout(window.location.reload(), 1500);
            } else {
                alert(response.statusText);
            };
        }
        else {
            alert("please fill out all required fields")
        };
    }
};


const delButtonHandler = async (event) => {
    event.preventDefault();
    let result = confirm("Are you sure to delete this post ?");
    // confirm to delete the post
    if (result) {
        event.preventDefault();
        if (event.target.hasAttribute('data-id')) {
            event.preventDefault();
            const id = event.target.getAttribute('data-id');
            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // document.location.replace('/api/posts');
                console.log("Deleted the post successfully");
                window.location.reload();
                setTimeout(window.location.reload(), 1500);
            } else {
                alert('Failed to delete the selected post');
            };

            // window.location.reload(true);
        }
    }
};

// apply addEventListener to each delete button
function addEventListenerDeleteBtn() {
    // console.log(deleteButtons.length);
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        // console.log(element);
        element.addEventListener('click', delButtonHandler);
    }
};

addEventListenerDeleteBtn();

// apply addEventListener to each save button
function addEventListenerSaveBtn() {
    // console.log(deleteButtons.length);
    for (let i = 0; i < saveButtons.length; i++) {
        const element = saveButtons[i];
        // console.log(element);
        element.addEventListener('click', editPostFormHandler);
    }
};

addEventListenerSaveBtn();
