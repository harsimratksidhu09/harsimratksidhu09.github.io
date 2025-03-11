// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to display a greeting message based on the time of day
function displayGreeting() {
    const greetingDiv = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetingDiv.innerHTML = "Good Morning!";
    } else if (currentHour < 18) {
        greetingDiv.innerHTML = "Good Afternoon!";
    } else {
        greetingDiv.innerHTML = "Good Evening!";
    }
}

displayGreeting(); // Call the greeting function on page load

// Handle form submission for the Contact page
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Display a confirmation message
    const response = document.getElementById('formResponse');
    response.innerHTML = `
        <p>Thank you for reaching out, ${name}!</p>
        <p>Your message has been received. We will get back to you at ${email} soon.</p>
    `;
    
    // Reset form
    document.getElementById('contactForm').reset();
});
