$.getJSON("NYC Data - kuhu.json", function(data) {
    
    console.log(data); 
  
    for (let i = 0; i < data.length; i++) {
      let borough = data[i];
      let boroughName = borough.borough;
      let boroughDensity = borough.density;
  
      
      let boroughElement = $("<div>").addClass("borough");
      boroughElement.append($("<h2>").text(boroughName));
      boroughElement.append($("<p>").text("Density: " + boroughDensity));
      $("body").append(boroughElement);
    }
  });
  