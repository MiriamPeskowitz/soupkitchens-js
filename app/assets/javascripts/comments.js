$(document).ready(function() {


  class Comment {
    constructor(title, content, soupkitchen_id, user_id) {
      this.title = title 
      this.content = content
      this.soupkitchen_id = soupkitchen_id
      this.user_id = user_id
      // this.created_at = Date.parse(obj.created_at);
      // this.updated_at = Date.parse(obj.updated_at);
    }
  
    // Comment.prototype.click = function() {
    //   console.log("got to the click");
    // }
  } 

$('#load-reviews').on('click', function(e) {
  alert(e.target.value)
  console.log("got to the click");
  });

// function test() {
//   console.log("got to the click");
// }
// alert(event.target.value)
function commentFetch() {
  // event.preventDefault(); // do I need this? How do I decide? 
  console.log("got to commentFetch");
  const commentRequest = new Request('/soupkitchens/soupkitchens_id/comments/:id', {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  
  addCommentsTitle();

  fetch(commentRequest)
  .then(console.log("got to commentRequest"))
  .then((res) => res.json())
  .then(console.log("got to res.json"))
  .then(data => {
    const comments = data;
    const addComment = `<button id="add-comment-button">Add Comment</button>`
    console.log(comments);
    comments.forEach(comment => {

      const commentEntry = `<p> ${comment.title}<br> ${comment.content}</p><br>` 
      
      $("#comments-data").append(commentEntry); 
      });

      // $("#comments-data").append(addComment);
    })
    .catch(error => console.error('Error:', error));
 

 function addCommentsTitle() {
    const commentTitle = `<h4> Comments: </h4>`;
    const $title = $('#comments-title');
    if ($title.empty() ) {
      $title.prepend(commentTitle);
    } 
  }

  }
});// final bracket add toggle to close with button. 

// add to fetch request, 