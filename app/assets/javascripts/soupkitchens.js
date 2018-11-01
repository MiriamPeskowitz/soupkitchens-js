class Soupkitchen {
    constructor() {
      this.name = name 
      this.address = address
      this.zipcode = zipcode
      this.notes = notes
      this.created_at = Date.parse(obj.created_at);
      this.updated_at = Date.parse(obj.updated_at);
    }
    // Soupkitchen.prototype.XXXX = function() {
    //   console.log("XXXX");
    // } -- can be a formating method 
  }

$(document).ready(function() {

    $('#js-soupkitchen-button').on("click", 
    getSoupkitchens);
  
  function getSoupkitchens(event) {
    event.preventDefault();
    console.log("got to soupkitchens")
    fetch('/soupkitchens/index')
    .then(response => response.json())
    .then(data => console.log(data))
  }

});

// this is closing bracket