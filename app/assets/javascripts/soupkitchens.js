class Soupkitchen {
    constructor() {
      this.name = name; 
      this.address = address;
      this.zipcode = zipcode;
      this.notes = notes;
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
    fetch('/soupkitchens/')
        // .then(console.log("got to fetch"))
    // .then(function(res) {
    //   return res.json();
    // })
    .then(res => res.json())
    .then((data) => console.log(data))
    // .then(text => console.log(text)) //test an error 
    // .then(function(data){
    //   console.log(JSON.stringify(data))
    // })

    // .then(response => response.json() )

  .then(console.log("got to 2d promise-replace this with a function " ))
  .then(data => SoupKitchenData(data))
  .then(console.log("got to putSoupKitchenInDom put in then"))
  .catch(err => console.log(err))
  }

function SoupKitchenData(data) {
  console.log("got to putSoupKitchenInDom")
  let result = `data for each soupkitchen`;
 
    data.forEach(function(soupkitchen) {
      const {name, address, zipcode } = soupkitchen;
      result +=
      `<div>
          <h5> Name: ${name} </h5>
          <ul>   
              <li>Address: ${address} </li>
              <li>Address: Philadelphia, PA ${zipcode} </li>
              <li><button id="js-meal-schedule">Meal Schedule/add id thing</button>Goes to ${notes}</li>
              <li><button id="js-see-reviews">See Reviews (and login to leave your own)${comments}</li>
          </ul>      
            <div id="js-load-meal-schedule"></div>
            <div id="js-load-reviews"></div>
      </div> `
    });


  $('#soupkitchen-data').innerHTML = result;
};


//after this, do reviews,return to home. 
});

// this is closing bracket

