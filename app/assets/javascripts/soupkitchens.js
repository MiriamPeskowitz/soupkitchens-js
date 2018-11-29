
//
//where do I want to put it in the dom
//where do I fetch the data 

$(document).ready(function() {
   attachEventListeners();
})

const attachEventListeners = function() {
  $('#soupkitchen-button').on('click',
    soupkitchensFetch)
  
  $('#comments-button').on('click', commentsFetch);

  $('#add-review-button').on('click', newCommentFormFetch);

  $('#submit-comment-button').on('submit', submitNewComment)
  
  $('#foodpantry-button').on('click', foodpantriesFetch);

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

Soupkitchen.prototype.formatHTML = function(){
  return `
    <section>
        <p> ${this.name}</p>
        <p> ${this.address}</p>
        <p> ${this.zipcode}</p>
        <p> Hours: ${this.notes}</p>
        <button id="comments-button" data-id=${this.id} data-name=${this.name}> See Reviews </button>   
        <button id="add-review-button" data-id=${this.id}>Add a Review</button> 
    </section>
    `
}
// <button id="new-comment-form" data-id=${this.id}>Add a Review</button> 
// data-id="<%= post.id %> add this instead of ${this.id?}
// <button id="new-comment-form" data-id="<%= soupkitchen.id %>">Add a Review/erb</button> 


function soupkitchensFetch(){
    const indexRequest = new Request('/soupkitchens', {
       headers: new Headers({
      'Content-Type': 'application/json'
        })
     })
    clearFoodpantryDataAndTitle();
    addSoupkitchensTitle();
    clearNewCommentsForm();

    fetch(indexRequest)
      // .then(res => handleStatusCode(res))    
      .then((res) => res.json())
      .then(data => {
        const soupkitchens = data;

        soupkitchens.forEach(function(soupkitchen){

            const kitchen = new Soupkitchen(soupkitchen);  //this creates the instance
            $('#soupkitchen-data').append(kitchen.formatHTML());
        })
        attachEventListeners();
        })
      .then($('#comments-button').on('click', commentsFetch)) 
      .catch(error => console.error('Error:', error));
    }; 

//add title
function addSoupkitchensTitle() {
    const soupkitchenTitle = `<h4 id="soupkitchen-title"> Soupkitchens </h4>`;
    const $title = $('#soupkitchen-data');
        if ($title.empty() ) {
        $title.prepend(soupkitchenTitle);
    };
}
 //clear functions
function clearFoodpantryDataAndTitle() {
    $('#foodpantry-title').html("");
    $('#foodpantry-data').html("");
}

function clearCommentData() {
    $('#comments-title').html("");
    $('#comments-data').html("");
}

//in case user opens form, but doesn't submit
function clearNewCommentsForm() {
    $("#new-comment-form").hide();
}
// function handleMessages(res) {
//   if (res.ok) {
//     throw Message(res.message) 
//   }  
//   return res;}
