$(document).ready(function() {

  class Comment {
    constructor(title, content, soupkitchen_id, user_id) {
      this.title = title 
      this.content = content
      this.soupkitchen_id = soupkitchen_id
      this.user_id = user_id
//     }
//   something like this, except with template literals ${user.name} says ${comment.title} <br> : 
//     Comment.prototype.renderDisplay = function() {
//       var html = "" ;
//       html += "<div class="\'well well-white\"' id=\'comment-\' + comment.id + '\'>" +  "<strong>" + this.user.name + "</strong>" + " says: " + this.content + "</div>";
//   $("#submitted-comments").append(html);
// }

//     Comment.prototype.click = function() {
//       console.log("got to the click");
//     } -- make this the load-reviews, and some formatting 
//   } 

$('#load-reviews').on('click', function(e) {
  e.preventDefault();
  // alert(e.target.value)
  console.log("got to the click");
  });

function test() {
  console.log("got to the click");
}
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
    const addComment = `<button id="add-comment">Add Comment</button>`
    console.log(comments);
    comments.forEach(comment => {

      const commentEntry = `<p> ${comment.title}<br> ${comment.content}</p><br>` 
      
      $("#comments-data").append(commentEntry); 
    });

    $("#comments-data").append(addComment);
  })
  .catch(error => console.error('Error:', error));
 

function addComment() {
  console.log("got here")
}


 function addCommentsTitle() {
    const commentTitle = `<h4> Comments: </h4>`;
    const $title = $('#comments-title');
    if ($title.empty() ) {
      $title.prepend(commentTitle);
    } 
  }
  }
  })
})



// Comment.prototype.renderDisplay = function() {
//   var html = "" ;
//   html += "<div class=\'well well-white\' id=\'comment-\' + comment.id + '\'>" +  "<strong>" + this.user.name + "</strong>" + " says: " + this.content + "</div>";
//   $("#submitted-comments").append(html);
// }

// $(function() {
//   $("form#new_comment").on("submit", function(event) {
//     event.preventDefault();
//     var $form = $(this);
//     var action = $form.attr("action");
//     // in order to process the comment(form data), its need to be converted from an object to a string.
//     var params = $form.serialize();
//     $.ajax({
//       url: action,
//       data: params,
//       dataType: "json",
//       method: "POST"
//     })
//     .success(function(json) {
//       $(".commentBox").val("");
//       var comment = new Comment(json);
//       comment.renderDisplay();

//     })
//   })


// is this what i need to make button work, adding the dataset? 
// $("xxx").on('click', '.js-more', function(e) {
//     e.preventDefault();
//     var id = this.dataset.id;
//     fetch(" + id + ".json", function(data) {
//       $("#content-" + id).html(data.content)
//     });
//     )
//   });