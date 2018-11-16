
$(document).ready(function() {

class Soupkitchen {
    constructor(attr) {
      this.name = attr.name; 
      this.address = attr.address;
      this.zipcode = attr.zipcode;
      this.notes = attr.notes;
      this.id = attr.id;
    }
    // Soupkitchen.prototype.XXXX = function() {
    //   console.log("XXXX");
    // } -- can be a formating method 
  }

  Soupkitchen.prototype.formatHTML = function() {
   
     return `<p> 
            ${this.name}<br>
            ${this.address}<br>
            ${this.zipcode}<br>
            ${this.notes}<br>
            <button data-id=${this.id} id="reviews-${this.id}" >
                Button
            </button> 
            </p>`
  
 
   //create prototype  for soupkitchenenrty Put all the html into one 
  }


$('#js-soupkitchen-button').on("click", soupkitchensFetch);

function soupkitchensFetch(){

    const indexRequest = new Request('/soupkitchens', {
       headers: new Headers({
      'Content-Type': 'application/json'
        })
     })

    addTitle();

    fetch(indexRequest) 
      // .then(res => handleStatusCode(res))    
      .then((res) => res.json())
      .then(data => {
        const soupkitchens = data;
      ;//make this into a prototype method-- and merge into the soupkitchenentry method


        soupkitchens.forEach(function(soupkitchen){

        const kitchen = new Soupkitchen(soupkitchen)
        //this creates the instance
  

          $('#soupkitchen-data').append(kitchen.formatHTML())
          
            clickReviewButton(kitchen.id);
          })


        })
      
      .catch(error => console.error('Error:', error));
    }; 

   function clickReviewButton(id) {
      $(`#reviews-${id}`).on('click', function(e) {
        e.preventDefault();
        // alert(e.target.value)
    
        console.log("got to the click");

        // add the formating for the comments 
        });

    };


  function addTitle() {
    const soupkitchenTitle = `<h4> Soupkitchens </h4>`;
    const $title = $('#soupkitchen-title');
    if ($title.empty() ) {
      $title.prepend(soupkitchenTitle);
    } 
  }


});     

// function handleMessages(res) {
//   if (res.ok) {
//     throw Message(res.message) 
//   }  
//   return res;
// }
   
//      $('#soupkitchen-data').innerHTML = result;
//   })
//   .catch(err => console.log(`problem at: err`))

// }
//     // .then(function(data){
//     //   console.log(JSON.stringify(data))
//     // })

  



// function SoupKitchenData(data) {
//   console.log("got to putSoupKitchenInDom");
// }; 

// }); 
  // let result = `<h2>Stuff</h2>`;

  //   data.forEach((soupkitchen) => {
  //     const {name, address, zipcode } = soupkitchen;
  //     result +=
  //     `<div>
  //         <h5> Name: ${name} </h5>
  //         <ul>   
  //             <li>Address: ${address} </li>
  //             <li>Address: Philadelphia, PA ${zipcode} </li>
  //             <li><button id="js-meal-schedule">Meal Schedule/add id thing</button>Goes to ${notes}</li>
  //             <li><button id="js-see-reviews">See Reviews (and login to leave your own)${comments}</li>
  //         </ul>      
  //           <div id="js-load-meal-schedule"></div>
  //           <div id="js-load-reviews"></div>
  //     </div> `
  //   });


  // $('#soupkitchen-data').innerHTML = result;


