// $(document).ready(function() {


//   class Comments {
//     constructor(title, content, soupkitchen_id, user_id) {
//       this.title = title 
//       this.content = content
//       this.soupkitchen_id = soupkitchen_id
//       this.user_id = user_id
//       this.created_at = Date.parse(obj.created_at);
//       this.updated_at = Date.parse(obj.updated_at);
//     }
//     // Comment.prototype.XXXX = function() {
//     //   console.log("XXXX");
//     // }

//     Comment.prototype.formatHtml = function() {
//     return `<p> ${soupkitchen.name}<br> ${soupkitchen.address}<br>${soupkitchen.zipcode}<br> ${soupkitchen.notes}<br> <button>Review</button> <br>`
// }
//   }
// })




// From soupkitchens.js 



// class Soupkitchen {
//     constructor(name, address, zipcode, notes) {
//       this.name = name; 
//       this.address = address;
//       this.zipcode = zipcode;
//       this.notes = notes;
//       // this.created_at = Date.parse(obj.created_at);
//       // this.updated_at = Date.parse(obj.updated_at);
//     }
//     // Soupkitchen.prototype.XXXX = function() {
//     //   console.log("XXXX");
//     // } -- can be a formating method 
//   }

// Soupkitchen.prototype.formatHtmlForEntry = function() {
//     `<p> ${soupkitchen.name}<br> ${soupkitchen.address}<br>${soupkitchen.zipcode}<br> ${soupkitchen.notes}<br> <button>Review</button> <br>`
// }

// // const header = new Header(){
// //   "Content-Type": 'application/json'
// // }

// $('#js-soupkitchen-button').on("click", indexFetch);


// function indexFetch(){
//   // console.log("got to index fetch")
//     const request = new Request('/soupkitchens', {
//        headers: new Headers({
//       'Content-Type': 'application/json'
//         })
//      })

//     fetch(request)
//      // .then(console.log("got to fetch"))
//      .then((resp) => resp.json())
//      .then(data => {
//       let soupkitchens = data;
//       let soupkitchenTitle = `<h4> Soupkitchens </h4>`
//       let reviewButton = `<button id="reviewButton">Reviews</button>`

//       soupkitchens.forEach(function(soupkitchen){

//         const entry = `<p> ${soupkitchen.name}<br> ${soupkitchen.address}<br>${soupkitchen.zipcode}<br> ${soupkitchen.notes}<br> <button>Review</button> <br>`

//         $('#soupkitchen-data').append(entry);
//       })
//       $('#soupkitchen-data').prepend(soupkitchenTitle);
//      })
  
  
//     .catch(error => console.error('Error:', error));
//     }; 
//  }); 