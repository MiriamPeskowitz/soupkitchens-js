class Soupkitchen {
    constructor() {
      this.name = name; 
      this.address = address;
      this.zipcode = zipcode;
      this.notes = notes;
      this.created_at = Date.parse(obj.created_at);
      this.updated_at = Date.parse(obj.updated_at);
    }
    // Soupkitchen.prototype.XXXX = function() {
    //   console.log("XXXX");
    // } -- can be a formating method 
  }

$(document).ready(function() {

    $('#js-soupkitchen-button').on("click", 
    function(){

      let url = '/soupkitchens/'
      fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
          let soupkitchens = data;
            return soupkitchens.map(function(soupkitchen){
              let li = createNode('li'), 
                  name = soupkitchen[name],
                  span = createNode('span');
            let x = span.innerHTML = `${name}`
          })
            $("soupkitchen-data").append(li)
        })

       });
      }); 

function createNode(element) {
      return document.createElement(element);
  }

     
  //      fetch('/soupkitchens/')
  //         .then(console.log("got here"))
  //         .then(res => res.json())
  //         .then(console.log("got to res json"))
  //         .then(function(data){
  //            for (var i = 0; i < data.soupkitchens.length; i++) {
  //     var listItem = document.createElement('li');
  //     listItem.innerHTML = '<strong>' + data.soupkitchens[i].Name + '</strong> can be found in ' +
  //                          data.soupkitchens[i].Location +
  //                          '. Cost: <strong>£' + data.soupkitchens[i].Price + '</strong>';
  //     myList.appendChild(listItem);
  //   }
  //         })
  //   });
  // });


  
//   function getSoupkitchens(event) {
//     event.preventDefault();
//             console.log("got to soupkitchens");

//     fetch('/soupkitchens/')
//          .then(console.log("got to fetch"))
//     // .then(function(res) {
//     //   return res.json();
//     // })
//     .then(res => res.json())
//     .then(function(data){   
//       let result = `<h2>Soupkitchens</h2>`
//       console.log(result)
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


