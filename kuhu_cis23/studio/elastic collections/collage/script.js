const gifContainers = document.querySelectorAll('.gif-container');

gifContainers.forEach(gifContainer => {
  const gif = gifContainer.querySelector('.gif');
  const overlay = gifContainer.querySelector('.overlay');
  const overlayContent = gifContainer.querySelector('.overlay-content');

  gifContainer.addEventListener('click', () => {
    gif.style.transform = 'scale(1.2)';
    overlayContent.style.opacity = '1';
    overlayContent.style.visibility = 'visible';
  });

  overlay.addEventListener('click', event => {
    event.stopPropagation();
    gif.style.transform = '';
    overlayContent.style.opacity = '';
    overlayContent.style.visibility = '';
  });
});
