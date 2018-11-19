$(document).ready(function() {

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
            <button class="comments" data-id=${this.id}> See Reviews </button> 
            
            </section>`
  }
  
 // <button id="comments" data-id=${this.id} id="reviews-${this.id}" > See Reviews </button> 

$('#soupkitchen-button').on('click', soupkitchensFetch);
  //doesn't need () because it's already part of a callback function

$('#foodpantry-button').on('click', 
   foodpantriesFetch);

$('.comments').on('click', works ); 

function works() {
  console.log('click');
}
// $('#comments-button').on('click', commentsFetch); 
// soupkitchen/:id/comments


function commentsFetch() {
    clearSoupKitchenDataAndTitle();

    addCommentsTitle();

    console.log("got to commentFetch");
     let result =  $('#comments').data('id')
     console.log(result);
    // $("#here").html(result);
    // var id = $('#comments').data('id');
    // console.log(id);
  // $('#js-comments-data').append("hello"); 

  //   const commentRequest = new Request('/comments', {
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     })
  //   })
    clearSoupKitchenDataAndTitle();

    addCommentsTitle();




  //   fetch(commentRequest)
  //   .then(console.log("got to commentRequest"))
    // .then((res) => res.json())
    // .then(console.log("got to res.json"))
    // .then(data => {
    //     const comments = data;

    //   console.log(comments);
    //     comments.forEach(function(comment) {

    //       const commentInstance = new Comment(comment);

        // $("#comments-data").append("hello"); 
       // NEXT: ADD A COMMENTS DIV
        
        // $("#comments-data").append(commentInstance.renderCommentHTML()); 
        // });
        //clickAddCommentButton(commentInstance.id)
        // $("#comments-data").append(addComment);
      // })
  
    // .catch(error => console.error('Error:', error));
 
} //end bracket for commentFetch

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
        })

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

});    //end brackets for document.ready

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


 


