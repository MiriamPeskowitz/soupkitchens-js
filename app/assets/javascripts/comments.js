
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
              <button id="new-comment-form" data-id=${this.soupkitchen}  data-userId="${this.userId}">Add a Review</button>
              </section>`      
    }  

    Comment.prototype.renderNewCommentForm = function() {
      //how do I make the form here? 
    }

//ask Brad:having trouble with the associations, moving data-id through the browser so a comment knows which soupkitchen it belongs to. 

// .data(userId)

function commentsFetch(soupkitchen) {
 
    const id=$(this).data("id");
    const name=$(this).data("name");

    const commentRequest = new Request(' "/soupkitchens/"id"/comments/"', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    clearSoupKitchenDataAndTitle();
    addCommentsTitle();

    fetch(commentRequest)
    .then((res) => res.json())  
    .then(data => {
        const commentData = data;

        // console.log(commentData);
          // console.log(commentData.comments);
        // console.log("SKid:" ${this.soupkitchenId});
        // console.log("userId:" ${this.userId});
        // console.log("got past res.json and commentData = data, ready to take apart the object with forEach");
        
        commentData.forEach(function(comment) {
      // should be just the comments for that soupkitchen: 

        const eachComment = new Comment(comment);
            
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


function addCommentsTitle() {
  //feature: add name to comments-title 
    // const name=$(this).data("name");
    // const commentsTitle = `<h4 id="comments-title"> Reviews of ${name}</h4>`;
    const commentsTitle = `<h4 id="comments-title"> Reviews </h4>`;
    const $titleDiv = $('#comments-data');
    if ($titleDiv.empty() ) {
      $titleDiv.prepend(commentsTitle);
    };
}
   
//NEXT  build out this functionality  fetch GET, send data -- POST     
function newCommentFormFetch(e) {
    e.preventDefault(); 
    console.log("got to newCommentFormFetch")
//goal: put the form on the page. include button to submit to send postNewComment()

  // new comment form -- Comment. new 
  
   //  let values = $(this).serialize();

   // let title = $('title').value;
   // let content = $('content').value;
    const url = 'soupkitchen/:id/comments/new'
    const newCommentForm = new Request('url', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    
   fetch(formForNewComment) 
   .then((res) => res.json())
   .then((data) => console.log(data))
   .then(data => {
      const newCommentForm = data;
      const form = new Comment(soupkitchen)
  
      $('#new-comment-form').append(newCommentForm);
   
      attachEventListeners(); 
    })
   .catch((error) => console.log(`Error:`, error));
 };


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
 

function submitNewComment() {
  // const url = soupkitchens/:id/comments/ ??
  
  const postNewComment = new Request(url, {
      method: 'POST',
      headers:  {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:title, content:content})
   });

  fetch(postNewComment)
  .then((res) => res.json())
  .then()
  .catch(error => console.error('Error:', error));
}
  
        // comments.forEach(function(comment) {

        //   const commentInstance = new Comment(comment);

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

