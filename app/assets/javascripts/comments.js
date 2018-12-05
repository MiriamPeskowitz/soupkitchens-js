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
// Comment.prototype.renderCommentHTML = function() {
//       return `
//       <section> 
//         <p>Title: ${this.title}</p>
//         <p>Content: ${this.content}</p>
//         <button class="submit-comment-button" data-id=${this.soupkitchenId}  data-user-id=${this.userId}>Submit</button>

//       </section>
//       `      
// }   

// Comment.prototype.renderAddAReviewButton = function() {
//       return `
//           <button class="add-review-button" data-id=${this.id} data-id=${this.name}>Add a Review</button>
//       `
// }

Comment.prototype.renderNewCommentForm = function() {
    return `
      <div id="new-comment-form"><div>
        <form data-id=${this.soupkitchenId} >

            <p>
                <label for="title">Title: </label>
                <input type="text" name="title" id="title"> 
            </p>
            <p>
                <label for="content">Review: </label>
                <input type="text" name="content" id="content"> 
            </p> 
              <button type="submit" id="submit-comment-button">Submit</button> 
        </form>
      </div>  
      `
}
//1  (2 ways to pull data along, dataset and event.target)event.target.attributes[1].value;
function commentsFetch(event) {
    event.preventDefault();  
    event.stopPropagation();
    
//clear space
    clearSoupKitchenDataAndTitle();
    clearCommentData();


     //this will need work to format the comments on the page, sort into title/content, etc. 
//adds title  
    const commentsTitle = `<h4 id="comments-title"> Reviews of ${name}</h4>`;

// add review button    
    const addReviewButton = `
      <div id="css-review-button">
        <button class="add-review-button" data-id=${id} data-name=${name}data-comments=${comments} >Add a Review </button>
        </div>`;
       const id= $(this).data("id");
    const name=$(this).data("name");
    const comments=$(this).data("comments");
    console.log(comments);

    console.log(id, name, comments, commentsTitle, addReviewButton);

    $('.comments-data').prepend(commentsTitle);
    $('.comments-data').append(comments);
    $('.comments-data').append(addReviewButton);

    attachEventListeners();
    // checkForComments();
};

function newCommentFormFetch(event) {
    event.preventDefault();
    event.stopPropagation();
//clear fields
    clearSoupKitchenDataAndTitle();
    clearCommentData();
    $(".new-comment-form").toggle();

//pull data from <button datasets and create html form (was separate function; this was it has immediate access to const id and name, which is will need to transfer this data to the form submit function >
    const id = $(this).data("id");
    const name = this.dataset.name;
    // two different ways to call data, js and jquery
    const form =  `
      <form data-id=${id} >
        <h3>Leave a Review of ${name}.</h3>
          <p>
              <label for="title">Title: </label>
              <input type="text" name="title" id="title"> 
          </p>
          <p>
              <label for="content">Comment: </label>
              <input type="text" name="content" id="content"> 
          </p> 
              <button type="submit" class="submit-comment-button" data-id="${id}" id="submit-form">Submit</button> 
      </form> `;  
   
  // const button = `<button type="submit" class="submit-comment-button" data-id=${id}id="submit-form">Submit</button> `

    $('.new-comment-form').html(form); 
    console.log(`got to end of form ${id} ${name}  this is: ${this}`);
  const title = $("input#title").val()
  const content = $("input#content").val() 
   
    attachEventListeners(); 
 };

//what happens next -- 


 function submitNewComment(event) {
     event.preventDefault();
     event.stopPropagation();

     const title = $("input#title").val()
     const content = $("input#content").val()
     const id = this.dataset.id;

     console.log(`id: ${id} new comment: ${title}, ${content}`);
      var values = $(this).serialize();
      var newComment = (`/soupkitchens/${id}/comments`, values);
    
     

  //here, the params have come in. check pry-- what's next-- rails sends them to the db. 
  // new_soupkitchen_comment_path
  // /soupkitchens/:soupkitchen_id/comments/new
  // comments#new

  const url = `/soupkitchens/${id}/comments.json`
     //how do we find the :id? THAT"s what rails does/backend. what url: comments/create? 
    // var token = $('meta[name="csrf-token"]').attr('content');
     const postNewComment = new Request(url, {
         method: 'POST',
         body: JSON.stringify({title:title, content:content}),
         credentials: 'same-origin',
         // or  credentials: 'include',
         cors:  'no-cors',
         headers:  {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'X-CSRF-Token': token
         },
      })
     fetch(postNewComment)
     .then((res) => res.json())
     .then((data) => console.log(data))
     .then((data) => {
        const comment = data;
        const newComment = new Comment(comment);//creates the instance of Comment
        //now, where do I want to put it? 
        })
      .catch(error => console.error('Error:', error))
     // .then(data => console.log('Success:', JSON.stringify(data)))

//how do I make it into an object 


     // .catch(error => console.error('Error:', error));
    
     //then, what to do with it -- 
    //empty the div 
     clearNewCommentsForm();
     attachEventListeners();
 }


 // const name = event.target.attributes[2].nodeName.value
// function form(id, name) {
 
//   return `
//       <form data-id=${id} >
//         <h3>Leave a Review of ${name}.</h3>
//           <p>
//               <label for="title">Title: </label>
//               <input type="text" name="title" id="title"> 
//           </p>
//           <p>
//               <label for="content">Comment: </label>
//               <input type="text" name="content" id="content"> 
//           </p> 
//               <button type="submit" id="comment-submit">Submit</button> 
//       </form> 
//    ` 
// }


// function checkForComments(id) {
//   const noComments = 
//     `
//     <h3>No reviews yet.</h3>
//     `
//     if($('.comments-data').empty()) {
//     $('.comments-data').append(noComments);
//   }
// } 

    // const $titleDiv = $('.comments-data');
    // if ($titleDiv.empty() ) {
    //   $titleDiv.prepend(commentsTitle);
    // };
//creates request and headers
     
    // const commentRequest = new Request(`/soupkitchens/${this.soupkitchenId}/comments`, {
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
//fetches data and renders to DOM
    // fetch(`/soupkitchens/${id}/comments`)
    // //   , {
    // //   headers: new Headers({
    // //     'Content-Type': 'application/json'
    // //   })
    // // })
    // .then((res) => res.json())  
    // .then(data => {
    //     const commentData = data;
    //     $('.comments-data').append(commentData.renderCommentHTML);         
    //     }) 
    // .catch(error => console.error('Error:', error))
   
 
 

    // const commentRequest = new Request(`/soupkitchens/${id}/comments`, {
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })

//2. Render the new comments form 



    // do I need to create the class of the form? to include the data as it moves to submit? 
    // const formRequest = new Request(url, {
    //    headers: new Headers({
    //   'Content-Type': 'application/json'
    //     })
    //  })

    // console.log("got to newCommentFormFetch");
    // console.log(this);
    // console.log(`data-id: ${this.dataset.soupkitchenId}`);
    // --different ways in have different results 
    // const id = event.target.attributes[1].value;
     // id = $(this).data('id');
     // let id = this.dataset.id;
     // const name=$(this).data("name")
    // let url= `/soupkitchens/${id}/comments/new`
    
    // console.log(`got to const id and url: ${id}, ${url}`);
  
  
    // clearNewCommentsForm()
  

// //another way to grab values for soupkitchen id
//     const id = event.target.attributes[1].value;
//     console.log(id)

// //creates request and header 
//     const newCommentForm = new Request(`/soupkitchens/${id}/comments/new.json`, {
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
// //fetches and renders
//     clearSoupKitchenDataAndTitle(); 
//     clearCommentData();
// //feature to add : comments-form-title: Review ${name}
//     fetch(newCommentForm) 
//     .then((res) => res.json())
//     .then(data => {
//       const form = new Comment(data);
//       $('#new-comment-form').append(form.renderNewCommentForm());
//       })
    // attachEventListeners();

    
   // .catch((error) => console.log(`Error:`, error));


//3 post new comments data from form, plus listener 

//problem -- getting data from params -- how does json/js/rails connect? 

    // fetch(`/soupkitchens/${id}/comments/new`) 
    // .then((res) => res.json())
    // .then(data => {
    //    const form = new Comment(data);
      // $('#load-comment-form').append(tempform);
     

    // .catch(error => console.error('Error:', error))
   

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

