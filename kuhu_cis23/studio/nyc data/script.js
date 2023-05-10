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

    

    // for (let i = 0; i < data.length; i++) {
    //   let borough = data[i];
    //   let boroughName = borough.Borough;
    //   let boroughDensity = borough.Total;
  
      
    //   let boroughElement = $("<div>").addClass("borough");
    //   boroughElement.append($("<h2>").text(boroughName));
    //   boroughElement.append($("<p>").text("Borough Density: " + boroughDensity));
    //   $("body").append(boroughElement);
    // }

  


let ticking = false;
let scrollTop;

window.addEventListener("scroll", function (e) {
  scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      const scrollValue = Math.round(scrollTop);
      const scaledScrollValue = scrollValue * 100;
      document.getElementById("scroll-value").innerHTML = scaledScrollValue;
      ticking = false;
    });

    ticking = true;
  }
});

var scrollPosition = 0;

$(window).scroll(function() {
  scrollPosition = $(this).scrollTop();
});

function updateClasses() {
  var footerHeight = $('footer').outerHeight();
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var scrollValue = (scrollTop + windowHeight - footerHeight) / windowHeight * 100;

  $('path').removeClass('active');

  switch (true) {
    case scrollValue >= 1550849:
      $('path.Queens').addClass('active');
      break;
    case scrollValue >= 2738175:
      $('path.Brooklyn').addClass('active');
      break;
    case scrollValue >= 191555:
      $('path.Statenisland').addClass('active');
      break;
    case scrollValue >= 1960101:
      $('path.Manhattan').addClass('active');
      break;
    case scrollValue >= 1451277:
      $('path.Bronx').addClass('active');
      break;
    default:
      break;
  }

  $('#scroll-value').text(scrollValue.toFixed(1));
}
$(document).ready(function() {
  updateClasses();
});

$(window).on('scroll', function() {
  updateClasses();
});
