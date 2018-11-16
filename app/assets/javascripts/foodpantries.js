
class Foodpantry {
  constructor() {
    this.name = name 
    this.address = address
    this.zipcode = zipcode
    this.notes = notes
    // this.created_at = Date.parse(obj.created_at);
    // this.updated_at = Date.parse(obj.updated_at);
  }
  // Foodpantry.prototype.renderFoodPantryHTML = function() {
  //   console.log("XXXX");
  // }
}

// $('#js-foodpantry-button').on("click", 
//     getFoodPantries);
  
function  foodpantriesFetch() {
    clearSoupKitchenDataAndTitle();

    $('#foodpantry-data').append("Coming Soon");
  
    addFoodpantriesTitle();

    // fetch('/foodpantries')
    // .then(response => response.json())
    // .then(console.log("got to 2d promise"))
    // .then(data => console.log(data))
  }
function addFoodpantriesTitle() {
    const foodpantriesTitle = `<h4> Food Pantries </h4>`;
    const $foodpantryTitleDiv = $('#foodpantry-title');
    if ($foodpantryTitleDiv.empty() ) {
      ($foodpantryTitleDiv).prepend(foodpantriesTitle);
    } 
  }

  function clearSoupKitchenDataAndTitle() {
    console.log("got to clearSoupKitchens")
    $('#soupkitchen-title').html("");
    $('#soupkitchen-data').html("");
  }


