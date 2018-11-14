 feature and refactor work like (in process):
* update readme
* focus on single page refactor -- soupkitchens index. 
    * change from jquery to js/fetch 
* then, next page SPA
* Foodpantry add: do it as an redo of all the soupkitchens code. later: refactor. So much overlap. 
find and load foodpantry data
* code for foodpantry controller, and single page index

RIght Now Tasks 
-- DONE Add a new soupkitchen button. 
-- work on Comments button: Why doesn't it work? 
-- then check the other requirements 



    More from soupkitchens.index
    
<!-- <script type="text/javascript" charset="utf-8">

 <!-- moved get form to js file  -->
document.getElementById("js-schedule PLUS data-set").addEventListener('click', getSchedule)

  function getSchedule() {
    const schedule = "WHAT/where is this";

    fetch(schedule)
    .then((res) => res.json())
    .then((data) => {
      // what to do with the data -- put it in class="load-meal-schedule-here"
      let $schedule = document.getElementById("load-meal-schedule-here")
      // $schedule.attr('data-id').what next? 
    })
    .catch((err) => alert("error"));
  }

 

document.getElementById('js-reviews').addEventListener('click', getReviews)

function getReviews() {
  debugger
    reviews = `/soupkitchens/${data-id}/comments `;//fix data-id
    fetch(reviews)
    .then((res) => res.json())
    .then((data) => {
      // what to do with the data
      let $reviews = document.getElementById('load-soupkitchen-comments-here');
      // $reviews.attr('data-id').text = ????
    })
       .catch((err) => alert("error"));    
}
          

          
  //now, what about the initial load of the page?? 
    //should there be an api call for that, too?     
       // $("#soupkitchen-" + id).html(data["id"]);
       // $("#soupkitchen-" + name).html(data["name"]);
       // $("#soupkitchen-" + address).html(data["address"]);



 -->

