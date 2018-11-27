
class Comment {
    constructor(attr) {
      this.title = attr.title;
      this.content = attr.content;
      this.id = attr.id;
      this.soupkitchen = attr.soupkitchenId;
      this.userId = attr.userId;
    } 
 } 
    Comment.prototype.renderCommentHTML = function() {
          return `<section> 
              <p>Title: ${this.title} -- 
                Content: ${this.content}
              </p>
              <button id="new-comment-form" data-id=${this.soupkitchenId}  data-userId="${this.userId}">Add a Review</button>
              </section>`      
    }  



// .data(userId)

function commentsFetch() {
 
    const commentRequest = new Request('/soupkitchens/id/comments.json', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    clearSoupKitchenDataAndTitle();
    

    fetch(commentRequest)
    .then((res) => res.json())  
    .then(data => {
        const commentData = data;
        console.log(commentData);
          // console.log(commentData.comments);
        // console.log("SKid:" ${this.soupkitchenId});
        // console.log("userId:" ${this.userId});
         console.log("got past res.json and commentData = data, ready to take apart the object with forEach")
        addCommentsTitle();
        commentData.forEach(function(comment) {
// should be just the comments for that soupkitchen: 

            const eachComment = new Comment(comment);
              //this creates the index of all comments
        console.log(eachComment.id)
        console.log(eachComment.soupkitchenId)
        // see if these get what I need  
            // const title = eachComment[title];
            // const content = eachComment[content]; 
            //  console.log(title - content)
//NEXT -- get the id loading 
             //alert($('#comments-data').data('id'));
    //const id =  $('#comments-button').data('id')
    // const id = $('button[data-id=${this.id}]')

             // console.log(comment.id, comment.comments.title, comment.comments.body);

  
             // if (comments.comment == 0) {
             //    $('#comments-data').append("Leave the first comment.");
             // } else {
             
                $('#comments-data').append(eachComment.renderCommentHTML);
              
            }); 

          attachEventListeners();    
        }); 
    // .catch(error => console.error('Error:', error))
};
//comment.id -- holds the soupkitchen id 
//eachComment.id -- holds the id!!!

function addCommentsTitle() {
  const name = this.name;
  // how do i fix this? 
    // const name = $('#comments-button').data('name');
    const title = `<h4> Reviews of ${name}</h4>`;
    const $titleDiv = $('#comments-title');
    if ($titleDiv.empty() ) {
      $titleDiv.append(title);
    }
}
   
//NEXT  build out this functionality  fetch GET, send data -- POST     
function newCommentFormFetch(e) {
  console.log("got to newCommentFormFetch")
  // $(form).submit(function(event) {
  //     event.preventDefault();
  //     var values = $(this).serialize();
  //     // .serialize == takes form data and serializes it. jquery method 
  //     var posting = $.post('soupkitchens/:id/comments.new', values);
  //     // jquery .post -- pass n url and values
  //     posting.done(function(data) {
  //       // handle response
  //       console.log(data)
  //       var post = data;
  //       $("#commentTitle").text(comment["title"]);
  //       $("#commentBody").text(comment["content"]);
  //     });
  // })
  e.preventDefault(); 
   let title = $('title').value;
   let content = $('content').value;

   fetch (//soupkitchen/:id/comments/new, 
   {
    method: 'POST',
    headers:  new Headers(),
    body: JSON.stringify({title:title, content:content})
   }).then((res) => res.json)
   .then((data) => console.log(data))
   .catch((error) => console.log(error))
 };
 
  
   
//end bracket for commentFetch


// function precommentFetch() {
//     console.log("got to commentFetch");
//  $("#comments-title").append("Comments"); 
// // }
// function commentFetch() {
//     console.log("got to commentFetch");
//   $("#js-comments-data").append("hello"); 

//     const commentRequest = new Request('/comments', {
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
//     clearSoupKitchenDataAndTitle();

//     addCommentsTitle();


//     fetch(commentRequest)
//     .then(console.log("got to commentRequest"))
//     // .then((res) => res.json())
//     // .then(console.log("got to res.json"))
//     // .then(data => {
//     //     const comments = data;

//     //   console.log(comments);
//     //     comments.forEach(function(comment) {

//     //       const commentInstance = new Comment(comment);

//         $("#comments-data").append("hello"); 
//        // NEXT: ADD A COMMENTS DIV
        
//         // $("#comments-data").append(commentInstance.renderCommentHTML()); 
//         // });
//         //clickAddCommentButton(commentInstance.id)
//         // $("#comments-data").append(addComment);
//       // })
  
//     // .catch(error => console.error('Error:', error));
 
// } //end bracket for commentFetch

 // function addCommentsTitle() {
 //    const commentsTitle = `<h4> Comments </h4>`;
 //    const $commentsTitleDiv = $('#comments-title');
 //    if ($commentsTitleDiv .empty() ) {
 //      $title.prepend(commentsTitle);
 //    }
 //  }

// function clickAddCommentButton() {}
// <button data-id=${this.soupkitchenId}  id="new-comment-${this.userId}">Add Comment</button>
  
          


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

