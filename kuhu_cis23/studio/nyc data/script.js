$.getJSON("data.json", function(data) {
  console.log(data);

  const dataContainerEl = document.querySelector('#data-container');

  data.data.forEach(function(item) {
    const itemEl = `
      <div class="item">
        <div class="borough">
          <h2>${item.Borough}</h2>
          <p>${item.Total}</p>
        </div>
      </div>
    `;

    dataContainerEl.insertAdjacentHTML('beforeEnd', itemEl);
  });
});

let ticking = false;
let scrollTop;

const SCALE_MULTIPLIER = 100;

window.addEventListener("scroll", function (e) {
  scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      document.getElementById("scroll-value").innerHTML = getScaledScrollTopValue();
      ticking = false;
    });

    ticking = true;
  }
});

// Get scalled scroll top value
function getScaledScrollTopValue() {
  const scrollValue = Math.round(scrollTop);
  const scaledScrollValue = scrollValue * SCALE_MULTIPLIER;

  return scaledScrollValue;
}

function updateClasses() {
  const scaledScrollValue = getScaledScrollTopValue();

  // Add class to grouped svg when scaled scroll value reached.
  if (scaledScrollValue >= 191555) {
    $('#layer-staten').addClass('active');
  }
  if (scaledScrollValue >= 1451277) {
    $('#layer-bronx').addClass('active');
  }
  if (scaledScrollValue >= 1550849) {
    $('#layer-queens').addClass('active');
  }
  if (scaledScrollValue >= 1960101) {
    $('#layer-manhattan').addClass('active');
  }
  if (scaledScrollValue >= 2738175) {
    $('#layer-brooklyn').addClass('active');
  }

  // Update text
  $('#scroll-value').text(scaledScrollValue.toFixed(1));
}

$(document).ready(function() {
  $(window).on('scroll', function() {
    updateClasses();
  });

});