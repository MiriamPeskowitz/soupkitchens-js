
$(document).ready(function() {

class Soupkitchen {
    constructor(name, address, zipcode, notes) {
      this.name = name; 
      this.address = address;
      this.zipcode = zipcode;
      this.notes = notes;
      // this.created_at = Date.parse(obj.created_at);
      // this.updated_at = Date.parse(obj.updated_at);
    }
    // Soupkitchen.prototype.XXXX = function() {
    //   console.log("XXXX");
    // } -- can be a formating method 
  }

Soupkitchen.prototype.formatHtmlForEntry = function() {
    `<p> ${soupkitchen.name}<br> ${soupkitchen.address}<br>${soupkitchen.zipcode}<br> ${soupkitchen.notes}<br> <button>Review</button> <br>`
}

// const header = new Header(){
//   "Content-Type": 'application/json'
// }

$('#js-soupkitchen-button').on("click", indexFetch);


function indexFetch(){
  // console.log("got to index fetch")
    const request = new Request('/soupkitchens', {
       headers: new Headers({
      'Content-Type': 'application/json'
        })
     })

    fetch(request)
     // .then(console.log("got to fetch"))
     .then((resp) => resp.json())
     .then(data => {
      let soupkitchens = data;
      let soupkitchenTitle = `<h3> Soupkitchens </h3>`
      let reviewButton = `<button id="reviewButton">Reviews</button>`

      soupkitchens.forEach(function(soupkitchen){

        const entry = `<p> ${soupkitchen.name}<br> ${soupkitchen.address}<br>${soupkitchen.zipcode}<br> ${soupkitchen.notes}<br> <button>Review</button> <br>`

        $('#soupkitchen-data').append(entry);
      })
      $('#soupkitchen-data').prepend(soupkitchenTitle);
     })
  
  
    .catch(error => console.error('Error:', error));
    }; 
 }); 
     
// function button() {
//   <button class="Reviews">Reviews of ${this.name}</button>
// }

      //       return soupkitchens.map(function(soupkitchen){
      //         let li = createNode('li'), 
      //             name = soupkitchen[name],
      //             span = createNode('span');
      //       let x = span.innerHTML = `${name}`
      //     })
// function createNode(element) {
//       return document.createElement(element);
//   }

     
  //     var listItem = document.createElement('li');
  //     listItem.innerHTML = '<strong>' + data.soupkitchens[i].Name + '</strong> can be found in ' +
  //                          data.soupkitchens[i].Location +
  //                          '. Cost: <strong>£' + data.soupkitchens[i].Price + '</strong>';
  //     myList.appendChild(listItem);
 

  
//   function getSoupkitchens(event) {
//     event.preventDefault();
//             console.log("got to soupkitchens");

//     data.forEach((soupkitchen) => {
//       let soupkitchen = data.results;
//       result +=
//       `<div>
//           <h5> Name: ${name} </h5>
//           <ul>   
//               <li>Address: ${address} </li>
//               <li>Address: Philadelphia, PA ${zipcode} </li>
//               <li><button id="js-meal-schedule">Meal Schedule/add id thing</button>Goes to ${notes}</li>
//               <li><button id="js-see-reviews">See Reviews (and login to leave your own)${comments}</li>
//           </ul>      
//             <div id="js-load-meal-schedule"></div>
//             <div id="js-load-reviews"></div>
//       </div> `
//     });
//      $('#soupkitchen-data').innerHTML = result;
//   })
//   .catch(err => console.log(`problem at: err`))

// }
//     // .then(function(data){
//     //   console.log(JSON.stringify(data))
//     // })

  



// function SoupKitchenData(data) {
//   console.log("got to putSoupKitchenInDom");
// }; 

// }); 
  // let result = `<h2>Stuff</h2>`;

  //   data.forEach((soupkitchen) => {
  //     const {name, address, zipcode } = soupkitchen;
  //     result +=
  //     `<div>
  //         <h5> Name: ${name} </h5>
  //         <ul>   
  //             <li>Address: ${address} </li>
  //             <li>Address: Philadelphia, PA ${zipcode} </li>
  //             <li><button id="js-meal-schedule">Meal Schedule/add id thing</button>Goes to ${notes}</li>
  //             <li><button id="js-see-reviews">See Reviews (and login to leave your own)${comments}</li>
  //         </ul>      
  //           <div id="js-load-meal-schedule"></div>
  //           <div id="js-load-reviews"></div>
  //     </div> `
  //   });


  // $('#soupkitchen-data').innerHTML = result;


