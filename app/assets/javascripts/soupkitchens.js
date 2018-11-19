$(document).ready(function() {
   listenForReviewButtons();

})

const listenForReviewButtons = function() {
  $('#soupkitchen-button').on('click',
    soupkitchensFetch)
  

  $('#foodpantry-button').on('click', 
    foodpantriesFetch);


  $('#comments-button').on('click', commentsFetch);
}

class Soupkitchen {
    constructor(attr) {
      this.name = attr.name; 
      this.address = attr.address;
      this.zipcode = attr.zipcode;
      this.notes = attr.notes;
      this.id = attr.id;
    }
  }

  Soupkitchen.prototype.formatHTML = function() {
   
     return `<section>
            <p> ${this.name}</p>
            <p> ${this.address}</p>
            <p> ${this.zipcode}</p>
            <p> ${this.notes}</p>
            <button id="comments-button" data-id=${this.id}> See Reviews </button> 
            </section>`
  }
  
 // <button id="comments" data-id=${this.id} id="reviews-${this.id}" > See Reviews </button> 

// $('#soupkitchen-button').on('click', soupkitchensFetch);
//   //doesn't need () because it's already part of a callback function

// $('#foodpantry-button').on('click', 
//    foodpantriesFetch);

// $('#${this.id}').on('click', works()); 


// $('#comments-button').on('click', commentsFetch); 
// soupkitchen/:id/comments

function addCommentsTitle() {
    const commentsTitle = `<h4> Comments </h4>`;
    const $commentsTitleDiv = $('#comments-title');
    if ($commentsTitleDiv .empty() ) {
      $title.prepend(commentsTitle);
    }
  }
//where do I want to put it in the dom
//where do I fetch the data 

function soupkitchensFetch(){
    const indexRequest = new Request('/soupkitchens', {
       headers: new Headers({
      'Content-Type': 'application/json'
        })
     })
    clearFoodpantryDataAndTitle();

    addSoupkitchensTitle();

    fetch(indexRequest) 

      // .then(res => handleStatusCode(res))    
      .then((res) => res.json())
      .then(data => {
        const soupkitchens = data;

        soupkitchens.forEach(function(soupkitchen){

          const kitchen = new Soupkitchen(soupkitchen);  //this creates the instance
          $('#soupkitchen-data').append(kitchen.formatHTML());
          })
        listenForReviewButtons();

        })
      .then($('#comments-button').on('click', commentsFetch)) 
      // try this 

      .catch(error => console.error('Error:', error));
    }; 


function addSoupkitchensTitle() {
  const soupkitchenTitle = `<h4> Soupkitchens </h4>`;
  const $title = $('#soupkitchen-title');
  if ($title.empty() ) {
    $title.prepend(soupkitchenTitle);
  } 
}
 
function clearFoodpantryDataAndTitle() {
    $('#foodpantry-title').html("");
    $('#foodpantry-data').html("");
  }

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


 


