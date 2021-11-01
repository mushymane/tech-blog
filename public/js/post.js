// Get the post id by the url
const url = document.location.pathname.split('/');
// Avoid potential trailing slash
const last = url.pop() || url.pop()
// Edit or delete post with this value
const postId = last;

const commentHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment').value;

    if (text) {
        const response = await fetch(`/api/posts/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response.statusText)
            alert('Failed to create post')
        }
    }
}

document.querySelector('.new-comment-form').addEventListener('submit', commentHandler);