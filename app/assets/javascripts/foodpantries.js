
$(document).ready(function() {

class Foodpantry {
  constructor() {
    this.name = name 
    this.address = address
    this.zipcode = zipcode
    this.notes = notes
    this.created_at = Date.parse(obj.created_at);
    this.updated_at = Date.parse(obj.updated_at);
  }
  // Foodpantry.prototype.XXXX = function() {
  //   console.log("XXXX");
  // }
}

  $('#js-foodpantry-button').on("click", 
    getFoodPantries);
  
  function  getFoodPantries(event) {
    event.preventDefault();
    console.log("got to foodpantries")
    fetch('/foodpantries')
    .then(response => response.json())
    .then(console.log("got to 2d promise"))
    // .then(data => console.log(data))
  }

});