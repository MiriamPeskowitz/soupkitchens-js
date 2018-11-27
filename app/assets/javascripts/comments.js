
//does three things
//1 loads all comments -- commentsFetch
//2 loads form for new comment -- newCommentFormFetch
//3 sends new comment to database -- postComment


class Comment {
    constructor(attr) {
      this.title = attr.title;
      this.content = attr.content;
      this.id = attr.id;
      this.soupkitchenId = attr.soupkitchenId;
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

  //   Comment.prototype.renderNewCommentForm = function() {
  //     //Ask BRAD -- not sure about pattern == how do I make the form here? or use erb? 
  //       return `<form id="miriams-form" data-id=${this.soupkitchenId}>
  //           <p>
  //               <label for="title">Title: </label>
  //               <input type="text" name="title" id="title"> 
  //           </p>
  //           <p>
  //               <label for="content">Content: </label>
  //               <input type="text" name="content" id="content"> 
  //           </p> 
  //             <button type="submit" id="comment-submit">  
  //       </form>`
  
  // }

  //from here - what is the path back to the database? when the comments controller pulls it into create? 

// ask Brad:having trouble with the associations, moving data-id through the browser so a comment knows which soupkitchen it belongs to. 


//1
function commentsFetch(soupkitchenId) {
    // const id=$(this).data("soupkitchen-id");
    // const name=$(this).data("name");
    // console.log(id, name) 
    const id = soupkitchenId.target.attributes[1].value


    clearSoupKitchenDataAndTitle();
    addCommentsTitle();

    const commentRequest = new Request(`/soupkitchens/${id}/comments`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    fetch(commentRequest)
    .then((res) => res.json())  
    .then(data => {
        const commentData = data;
        $('#comments-data').append(commentData.renderCommentHTML);
              
        }); 

          // attachEventListeners();    
        
    // .catch(error => console.error('Error:', error))
};


function addCommentsTitle() {
  //feature: add name to comments-title 
    // const name=$(this).data("name");
    //ASK BRAD -- working on this feature -- 
    const name=$(this).data("name");
    const commentsTitle = `<h4 id="comments-title"> Reviews of ${name}</h4>`;
    // const commentsTitle = `<h4 id="comments-title"> Reviews </h4>`;
    const $titleDiv = $('#comments-data');
    if ($titleDiv.empty() ) {
      $titleDiv.prepend(commentsTitle);
    };
}
   
//2. Getting the new comments form     

function newCommentFormFetch(event) {
    event.preventDefault();
    // event.stopImmediatePropagation();
    console.log("got to newCommentFormFetch");
//goal: put the form on the page. include button to submit to send postNewComment()

//next -- pull in rails form -- 
    const id = event.target.attributes[1].value
   
    const form = `
            <form id="miriams-form" data-id=${id}>
            <p>
                <label for="title">Title: </label>
                <input type="text" name="title" id="title"> 
            </p>
            <p>
                <label for="content">Content: </label>
                <input type="text" name="content" id="content"> 
            </p> 
              <button type="submit" id="comment-submit">  
            </form>
            `
    clearSoupKitchenDataAndTitle();
    // attachEventListeners();
    $('#new-comment-form').html(form);
   //  let values = $(this).serialize();

   //what is the correct url? Having trouble figuring that out. 
//get rails form, add hidden field for soupkitchen id ? 

  //   const formForNewComment = new Request(`/soupkitchens/${id}/comments/new`, {
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     })
  //   })
  // clearSoupKitchenDataAndTitle(); 
  //  fetch(formForNewComment) 
  //  .then((res) => res.json())
  //  .then(data => {
    
  //     const form = new Comment(data);
  
  //     $('#new-comment-form').html(form.renderNewCommentForm);
  //  // form.renderNewCommentForm
  //     attachEventListeners();

  //   })
  //  .catch((error) => console.log(`Error:`, error));
 };

//3 post new comments data from form, plus listener 

function submitNewComment(event) {
  event.preventDefault();
  
  let title = $("input#title").val()
  let content = $("input#content").val()
  // let soupkitchenId = 1;
  var id = this.dataset.id;
 
  const url = `/soupkitchens/:id/comments/:id`
  //how do we find the :id
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

