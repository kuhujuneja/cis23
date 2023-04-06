
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    
    const clickedButtonValue = event.target.getAttribute('data-value');
    let itemsToHide = document.querySelectorAll(`.gif-container:not(.${clickedButtonValue})`);
    let itemsToShow = document.querySelectorAll(`.gif-container.${clickedButtonValue}`);
    console.log(itemsToHide)
   
    itemsToHide.forEach(function(el) {
      el.classList.add('hide');
      el.classList.remove('show');
    });
    itemsToShow.forEach(function(el) {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });
  })
});