$(document).ready(function() {
   attachEventListeners();
})

function attachEventListeners() {
  $('#soupkitchen-button').on('click',
    soupkitchensFetch)
  
  $('.comments-button').on('click', commentsFetch);

  $('.add-review-button').on('click', newCommentFormFetch);

  $('.submit-comment-button').on('click', submitNewComment);
  
  $('#foodpantry-button').on('click', foodpantriesFetch);
}

class Soupkitchen {
    constructor(attr) {
      this.name = attr.name; 
      this.address = attr.address;
      this.zipcode = attr.zipcode;
      this.notes = attr.notes;
      this.id = attr.id;
      this.commentsTitle = attr.comments.title;
      this.commentsContent = attr.comments.content;
      this.users = attr.users;
    }
}

Soupkitchen.prototype.formatHTML = function(){
  return `
    <section class="review-data-div">
        <div id="skdata">
          <p> ${this.name}</p>
          <p> ${this.address}</p>
          <p> ${this.zipcode}</p>
          <p> Hours: ${this.notes}</p>
      </div>
        <button class="comments-button" data-id=${this.id} data-name=${this.name} > See Reviews</button> 
    </section>
    `
}

Soupkitchen.prototype.formatCommentsHTML = function() {
      return `
      <section> 
        <p>Title: ${this.commentsTitle}</p>
        <p>Content: ${this.commentsContent}</p>
       
      </section>
      `      
} 

function soupkitchensFetch(){
  $(".soupkitchen-data").show();
    const indexRequest = new Request('/soupkitchens', {
       headers: new Headers({
      'Content-Type': 'application/json'
        })
     })
    clearFoodpantryDataAndTitle();
    clearNewCommentsForm();
    addSoupkitchensTitle();
    clearCommentData()

    fetch(indexRequest)
      // .then(res => handleStatusCode(res))    
    .then((res) => res.json())
    .then(data => {
        const soupkitchens = data;

        soupkitchens.forEach(function(soupkitchen){

            const kitchen = new Soupkitchen(soupkitchen);  //this creates the instance
     
            $('.soupkitchen-data').append(kitchen.formatHTML());    
        })
         attachEventListeners() 
        }) 
      .catch(error => console.error('Error:', error))

    }; 



function addSoupkitchensTitle() {
    const soupkitchenTitle = `<h4 id="soupkitchen-title"> Soupkitchens </h4>`;
    
    const $title = $('.soupkitchen-data');
        if ($title.empty() ) {
        $title.prepend(soupkitchenTitle);
    };
}
 //clear functions
function clearFoodpantryDataAndTitle() {
    $('.foodpantry-data').hide();
}

function clearSoupKitchenDataAndTitle() {
  $(".soupkitchen-data").hide();
}

function clearCommentData() {
   if (!$(".comments-data").empty()) { $('.comments-data').hide();
      }
}

function clearCommentsTitleAndButton() {
   $("#comments-title").hide();
    $(".add-review-button").hide();

}

function clearNewCommentsForm() {
    $(".new-comment-form").hide();
}
// function handleMessages(res) {
//   if (res.ok) {
//     throw Message(res.message) 
//   }  
//   return res;}


 // .then($('.comments-button').on('click', commentsFetch))
