const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const text = document.querySelector('#content').value;

    if (title && text) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText)
            alert('Failed to create post')
        }
    }
}

document.querySelector('new-post-form').addEventListener('submit', newPostHandler);
