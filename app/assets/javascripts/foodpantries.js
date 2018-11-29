
class Foodpantry {
  constructor(attr) {
    this.name = attr.name;
    this.address = attr.address;
    this.zipcode = attr.zipcode;
    this.notes = attr.notes;
    // this.created_at = Date.parse(obj.created_at);
    // this.updated_at = Date.parse(obj.updated_at);
  }
  // Foodpantry.prototype.renderFoodPantryHTML = function() {
  //   console.log("XXXX");
  // }
}

 Foodpantry.prototype.formatHTML = function() {
   
     return `<p> 
            ${this.name}<br>
            ${this.address}<br>
            ${this.zipcode}<br>
            ${this.notes}<br>
            <button data-id=${this.id} id="reviews-${this.id}" >
                Reviews
            </button> 
            </p>`
    }

// $('#js-foodpantry-button').on("click", 
//     getFoodPantries);
  
function  foodpantriesFetch() {
  
    const indexRequest = new Request('/foodpantries', {
       headers: new Headers({
      'Content-Type': 'application/json'
        })
    })

    clearSoupKitchenDataAndTitle();
    clearFoodpantryDataAndTitle();

    addFoodpantriesTitle();

    $('#foodpantry-data').append("Coming Soon");
  
   

    // fetch(indexRequest)
    // .then(res => res.json())
    // .then(console.log("got to res.json"))
    // .then(data => {
      // console.log(data)
      // const foodpantries = data;

      // foodpantries.forEach(function(foodpantry)
      //   ){
      //   const pantry = new Foodpantry(foodpantry)
      // }
      //  $('#foodpantry-data').append(pantry.formatHTML())
      // clickbutton for rviews 
    // })


  } //end bracket for fetch function 
function addFoodpantriesTitle() {
    const foodpantriesTitle = `<h4 id="foodpantry-title"> Food Pantries </h4>`;
    const $foodpantryTitleDiv = $('#foodpantry-data');
    if ($foodpantryTitleDiv.empty() ) {
      ($foodpantryTitleDiv).prepend(foodpantriesTitle);
    } 
}

function clearSoupKitchenDataAndTitle() {
    $('#soupkitchen-title').html("");
    $('#soupkitchen-data').html("");
    $('#comments-title').html("");
}


