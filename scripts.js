document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('response').textContent = `Message Sent: ${data.name} - ${data.message}`;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
