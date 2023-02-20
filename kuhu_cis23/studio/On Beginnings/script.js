

window.addEventListener('load', function(event) {
    // Gather all the buttons.
    var buttons = document.querySelectorAll(".clickable")

    // Attach a click handler to each button.
    // Now each button will respond to "updateStyles()" function defined below.
    buttons.forEach(function(button) {
        button.addEventListener('click', updateStyles)
    })
});


function updateStyles(event) {
    // Element clicked on can be accessed with:
    // console.log(event.target)

    // Gather all other buttons to deactivate the color.
    var buttons = document.querySelectorAll(".clickable")
    buttons.forEach((button) => {
        button.classList.remove('activate-color');
    })

    // Button of interest is updated last, because if it was
    // first it be deactivated like the rest of the buttons
    event.target.classList.add('activate-color');
}

// Get the text element
const textElement = document.querySelector('section.textWrapper p');

// Get all of the clickable images
const images = document.querySelectorAll('img.clickable');

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Set the grayscale to 0%
    image.style.filter = 'grayscale(0%)';
    // Set the text to the new text
    textElement.innerHTML = 'New text to display';
  });
});