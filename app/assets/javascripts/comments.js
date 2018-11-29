
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
    return `
        <section> 
          <p>Title: ${this.title}</p>
          <p>Content: ${this.content}</p>
          <button id="new-comment-form" data-id=${this.soupkitchenId}  data-user-id=${this.userId}>Add a Review</button>
        </section>
        `      
}  

Comment.prototype.renderNewCommentForm = function() { 
    return `
        <form id="render-form" data-soupkitchen-id=${this.soupkitchenId}>
            <p>
                <label for="title">Title: </label>
                <input type="text" name="title" id="title"> 
            </p>
            <p>
                <label for="content">Content: </label>
                <input type="text" name="content" id="content"> 
            </p> 
              <button type="submit" id="comment-submit">Submit</button> 
        </form>
      `
}


  //from here - what is the path back to the database? when the comments controller pulls it into create? 

// ask Brad:having trouble with the associations, moving data-id through the browser so a comment knows which soupkitchen it belongs to. 


//1
function commentsFetch(soupkitchenId) {
//2 ways to pull data along, dataset and event.target
    const name=$(this).data("name"); //will this be available to addCommentsTitle? 
    const id= soupkitchenId.target.attributes[1].value
//checks values in console
    console.log(id, name); 

    clearSoupKitchenDataAndTitle();
   
//adds soupkitchen name to comments title/was separate function, moved to be in scope
    const commentsTitle = `<h4 id="comments-title"> Reviews of ${name}</h4>`;
    const $titleDiv = $('#comments-data');
    if ($titleDiv.empty() ) {
      $titleDiv.prepend(commentsTitle);
    };
//creates request and headers
    const commentRequest = new Request(`/soupkitchens/${id}/comments`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
//fetcbes data and renders to DOm
    fetch(commentRequest)
    .then((res) => res.json())  
    .then(data => {
        const commentData = data;
        $('#comments-data').append(commentData.renderCommentHTML); 
        attachEventListeners();      
    })     
    .catch(error => console.error('Error:', error))
};
   
//2. Render the new comments form   
//challenge: do it as rails form, or as js form

function newCommentFormFetch(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("got to newCommentFormFetch");

//grabs values for soupkitchen id
    const id = event.target.attributes[1].value;
    console.log(id)

//creates request and header 
    const newCommentForm = new Request(`/soupkitchens/${id}/comments/new.json`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
//fetches and renders
    clearSoupKitchenDataAndTitle(); 
    clearCommentData();
//feature to add : comments-form-title: Review ${name}
    fetch(newCommentForm) 
    .then((res) => res.json())
    .then(data => {
      const form = new Comment(data);
      $('#new-comment-form').append(form.renderNewCommentForm());
      })
    attachEventListeners();

    
   // .catch((error) => console.log(`Error:`, error));
 };

//3 post new comments data from form, plus listener 

//problem -- getting data from params -- how does json/js/rails connect? 
function submitNewComment(event) {
  event.preventDefault();
  event.stopPropagation();

  let title = $("input#title").val()
  let content = $("input#content").val()
  // let soupkitchenId = 1;
  var id = this.dataset.id;
 
  const url = `/soupkitchens/${id}/comments/:id`
  //how do we find the :id? what url: comments/create? 
  const postNewComment = new Request(url, {
      method: 'POST',
      body: JSON.stringify({title:title, content:content}),
      headers:  {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
   })

  fetch(postNewComment)
  .then((res) => res.json())
  // .then()
  .then(data => console.log('Success:', JSON.stringify(data)))
  .catch(error => console.error('Error:', error));
  
 //empty the div 
  $('#new-comment-form').html('')
  attachEventListeners();
}
  

   // If rails route, use this: 
    // const form = `
    //         <form id="miriams-form" data-id=${id}>
    //         <p>
    //             <label for="title">Title: </label>
    //             <input type="text" name="title" id="title"> 
    //         </p>
    //         <p>
    //             <label for="content">Content: </label>
    //             <input type="text" name="content" id="content"> 
    //         </p> 
    //           <button type="submit" id="comment-submit">  
    //         </form>
    //         `
    // clearSoupKitchenDataAndTitle();
    // // attachEventListeners();
    // $('#new-comment-form').html(form);
   //  let values = $(this).serialize();

   //what is the correct url? Having trouble figuring that out. 
//get rails form, add hidden field for soupkitchen id ? 
// /soupkitchens/${id}/comments/new`,
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

