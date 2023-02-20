

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
