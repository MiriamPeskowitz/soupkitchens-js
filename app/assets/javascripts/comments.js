
class Comment {
    constructor(attr) {
      this.title = attr.title;
      this.content = attr.content;
      this.soupkitchenId = attr.soupkitchenId;
      this.userId = attr.userId;
    } 
 } 
    Comment.prototype.renderCommentHTML = function() {
      return `<section>
                <p>
                    ${comment.title}<br>
                    ${comment.content}
                </p>
                <button data-id=${this.soupkitchenId}  id="new-comment-${this.userId}">Add Comment</button>
              </section>`       
        }  


function commentFetch() {
  console.log("got to commentFetch");
  const commentRequest = new Request('/comments', {
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


     
      console.log(comments);
      comments.forEach(comment => {

        renderCommentHTML
       
        
        $("#comments-data").append(commentEntry); 
        });

        // $("#comments-data").append(addComment);
      })
    .catch(error => console.error('Error:', error));
 
} //end bracket for commentFetch

 function addCommentsTitle() {
    const commentTitle = `<h4> Comments: </h4>`;
    const $title = $('#comments-title');
    if ($title.empty() ) {
      $title.prepend(commentTitle);
    }
  }



  
          


// is this what i need to make button work, adding the dataset? 
// $("xxx").on('click', '.js-more', function(e) {
//     e.preventDefault();
//     var id = this.dataset.id;
//     fetch(" + id + ".json", function(data) {
//       $("#content-" + id).html(data.content)
//     });
//     )
//   });
// add to fetch request, 

