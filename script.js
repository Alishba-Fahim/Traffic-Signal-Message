function showMessage(event) {
    event.preventDefault();
    
    const color = document.getElementById('colorInput').value.toLowerCase();
    const message = document.getElementById('message');
    
    if (color === 'red') {
        message.textContent = "Stop now!";
        message.style.backgroundColor = 'red';
    } else if (color === 'yellow') {
        message.textContent = "Get ready!";
        message.style.backgroundColor = 'yellow';
    } else if (color === 'green') {
        message.textContent = "Move now!";
        message.style.backgroundColor = 'green';
    } else {
        message.textContent = "Invalid color!";
        message.style.backgroundColor = 'gray';
    }

    // Trigger the fade-in animation
    message.classList.remove('fade-in');
    void message.offsetWidth; // Trigger reflow
    message.classList.add('fade-in');
}

document.getElementById('colorForm').addEventListener('submit', showMessage);
