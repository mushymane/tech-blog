// Get the post id by the url
const url = document.location.pathname.split('/');
// Avoid potential trailing slash
const last = url.pop() || url.pop()
// Edit or delete post with this value
const postId = last;

const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const text = document.querySelector('#content').value;
    
    if (title && text) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            // document.location.replace(`/post/${postId}`);
        } else {
            console.log(response.statusText)
            alert('Failed to edit post')
        }
    }
}

const deletePostHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText)
        alert('Failed to delete post')
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);

document.querySelector('#delete-post').addEventListener('click', deletePostHandler);