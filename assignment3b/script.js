document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons and message container
    const buttons = document.querySelectorAll('.button');
    const messageContainer = document.getElementById('message');

    // Event handler for click event
    function handleClick(event) {
        event.target.style.backgroundColor = 'lightgreen';
    }

    // Event handler for mouseover event
    function handleMouseOver(event) {
        messageContainer.textContent = 'Mouse is over ' + event.target.textContent;
    }

    // Event handler for mouseout event
    function handleMouseOut(event) {
        event.target.style.opacity = '0.5';
        setTimeout(() => event.target.style.opacity = '1', 500); // Reset opacity after 500ms
    }

    // Event handler for dblclick event
    function handleDblClick(event) {
        alert('Double-clicked on ' + event.target.textContent);
    }

    // Attach event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
        button.addEventListener('mouseover', handleMouseOver);
        button.addEventListener('mouseout', handleMouseOut);
        button.addEventListener('dblclick', handleDblClick);
    });
});
