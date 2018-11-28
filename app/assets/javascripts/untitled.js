
// function newCommentFormFetch(event) {
//     event.preventDefault();
//     // event.stopImmediatePropagation();
//     console.log("got to newCommentFormFetch");
// //goal: put the form on the page. include button to submit to send postNewComment()

// //next -- pull in rails form -- 
//     const id = event.target.attributes[1].value
//    // If rails route, use this: 
//     // const form = `
//     //         <form id="miriams-form" data-id=${id}>
//     //         <p>
//     //             <label for="title">Title: </label>
//     //             <input type="text" name="title" id="title"> 
//     //         </p>
//     //         <p>
//     //             <label for="content">Content: </label>
//     //             <input type="text" name="content" id="content"> 
//     //         </p> 
//     //           <button type="submit" id="comment-submit">  
//     //         </form>
//     //         `
//     // clearSoupKitchenDataAndTitle();
//     // // attachEventListeners();
//     // $('#new-comment-form').html(form);
//    //  let values = $(this).serialize();

//    //what is the correct url? Having trouble figuring that out. 
// //get rails form, add hidden field for soupkitchen id ? 
// // /soupkitchens/${id}/comments/new`,
//     const formForNewComment = new Request(`/comments/new`, {
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
//   clearSoupKitchenDataAndTitle(); 
//    fetch(formForNewComment) 
//    .then((res) => res.json())
//    .then(data => {
    
//       const form = new Comment(data);
  
//       $('#new-comment-form').html(form.renderNewCommentForm);
  
//       attachEventListeners();

//     })
//    // .catch((error) => console.log(`Error:`, error));
//  };
