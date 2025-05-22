document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const buttonElement = document.getElementById('myButton');

    if (buttonElement && messageElement) {
        buttonElement.addEventListener('click', () => {
            messageElement.textContent = 'The button was clicked!';
        });
    } else {
        console.error('Could not find button or message element');
    }
});
