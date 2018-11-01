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
    fetch('/soupkitchens')
    .then(response => console.log(response.text()))
    .then(response => response.json())

    .then(console.log("got to 2d promise-replace this with a function "))
    // .then(data => console.log(data))
    .catch(error => console.log(error))
  }

function putSoupKitchenDataInDom() {
  
  $('#soupkitchen-data'). 
}

});

// this is closing bracket

