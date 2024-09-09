// Using getElementById
const mainHeading = document.getElementById('mainHeading');
const myImage = document.getElementById('myImage');

// Using getElementsByClassName
const descriptions = document.getElementsByClassName('description');

// Using querySelector
const firstDescription = document.querySelector('.description');

// Using querySelectorAll
const allDescriptions = document.querySelectorAll('.description');

// Change content of elements
document.getElementById('changeContent').addEventListener('click', function() {
    mainHeading.textContent = 'New Heading Content';
    myImage.src = 'https://via.placeholder.com/300'; // Changing image source
    myImage.alt = 'Updated Placeholder Image';
    firstDescription.textContent = 'Updated first paragraph content.';
});

// Change style of elements
document.getElementById('changeStyle').addEventListener('click', function() {
    mainHeading.style.color = 'red'; // Changing text color of heading

    // Change styles of all description paragraphs
    for (let desc of descriptions) {
        desc.style.fontSize = '20px';
        desc.style.color = 'green';
    }

    // Additional style changes for all paragraphs using querySelectorAll
    allDescriptions.forEach(desc => {
        desc.style.fontWeight = 'bold';
    });
});
