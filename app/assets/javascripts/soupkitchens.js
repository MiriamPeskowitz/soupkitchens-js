
//  or $(document).ready() {   --- }

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
  $('#soup-kitchen-button').on("click", getSoupkitchens)
  
  function getSoupkitchens(event) {
    event.preventDefault();
    fetch('/soupkitchens/index')
    .then(response => response.json())
    .then(data => console.log(data))
  }



// REVEWS
$('#js-reviews').on("click", function(){
  console.log("got to js-reviews click");
});

function getReview() {
  const reviews =  `/soupkitchens/${data-id}/comments `
  fetch(reviews)
  .then((response) => response.json())
  .then((data))
}
// id="js-reviews" data-id="<%= soupkitchen.id 

//could be Soupkitchen.prototype.getForm = function() { etc }


//should this be its own object? 

  // console.log("ready")

  $('#js-reviews').on("click", getReviews);

function getReviews() {
  console.log("got to getReviews")
  const reviews =  `/soupkitchens/${data-id}/comments `
  fetch(reviews)
  .then((response) => response.json())
  .then((data) => console.log(data))
}
// id="js-reviews" data-id="<%= soupkitchen.id 

//bring the form into the SPA page? 
  $('#js-form').on("click", formFetch)
    // function() {
    //   // console.log("button clicked");
    //   $('#js-form').formFetch
 

  function formFetch() {
    console.log("got to formFetch")
      const formURL = '/soupkitchens/new';
      fetch(formURL)
        .then((response) => response.json())
        .then((data) => console.log(data))

        // $("js-load-form").json(form) 
  }

}); //final brackets
//post form data to API 
    // This will be a fetch "POST "
//       $('form').submit(function(event) {
//         event.preventDefault();
//           console.log("got to submit button")

//            const values = $(this).serialize();
//            const newSoupkitchen = $.post('/soupkitchens', values);
//            newSoupkitchen.done(function(data) {
//             console.log(data);
          
// // the place on the api, that will transfer it to the db. HELP 
//             $("#soupkitchensName").text(data["title"]);
//             $("#soupkitchensAddress").text(data["address"]);
//             $("#soupkitchensComments").text(data["comments"]);
//             $("#soupkitchensNotes").text(data["notes"]);   
//            });
//         });
//     });




//         js-load-new-soup-kitchen-form"
//         catch(error)

//         })
//     }
// $(doc("js-add-new-soupkitchen-form").addEventListener('click', getForm)

//   function getForm() {
//     // console.log(123);
//     //fetch takes a url or a filename soupkitchens/new
//     const newForm =  '/soupkitchens/new'
//     //what is the thing I'm putting on the page? It's erb. 
//     // 'http://localhost:3000/soupkitchens/new'
//     // fetch(newForm)
//     fetch(newForm)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       document.getElementById("#load-new-soup-kitchen-form").text(data) 
//       })
//     //how do I load this? 
//     .catch((error)=> console.log(error))
//     // where do I write the error message? 
//   }
    

