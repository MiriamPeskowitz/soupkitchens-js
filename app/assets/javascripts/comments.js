$(document).ready(function() {


  class Comments {
    constructor(title, content, soupkitchen_id, user_id) {
      this.title = title 
      this.content = content
      this.soupkitchen_id = soupkitchen_id
      this.user_id = user_id
      // this.created_at = Date.parse(obj.created_at);
      // this.updated_at = Date.parse(obj.updated_at);
    }
  }
    // Comment.prototype.XXXX = function() {
    //   console.log("XXXX");
    // }
// $("#review-button").on('click', alert(event.target.value));

// function commentFetch(event) {
//   event.preventDefault();
//   console.log("got to commentFetch");
//   alert(event.target.value);

//   const commentRequest = new Request('/soupkitchens/soupkitchens_id/comments/:id', {
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   })
 
//   fetch(commentRequest)
//   .then(console.log("got to commentRequest"))
//   .then((resp) => resp.json())
//   .then(console.log("got to resp.json"))
//   .then(data => {

//     const comments = data;
//     const commentTitle = `<h4> Comments: </h4>`;
//     const addComment = `<button id="add-comment-button">Add Comment</button>`
//     console.log(comments);
//     comments.forEach(comment => {

//       const commentEntry = `<p> ${comment.title}<br> ${comment.content}<br>`


//       $("#comments-data").append(commentEntry); 
//     })
//     $("#comments-data").prepend(commentTitle);
//     $("#comments-data").append(addComment);
//   });

 // }
})// final bracket
