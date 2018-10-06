1. How to think about all the links, on a single page app. 
2. how do I organize the js -- 
3. what about flash? redo those as js/jquery? 
4. setup docs say to use, in layouts/application.html.erb: 

<%= stylesheet_link_tag "application", media: "all", "data-turbolinks-track" => "reload" %>
<%= javascript_include_tag "application", "data-turbolinks-track" => "reload" %>


User stories
1. a user can login and signup
2. a user can click on a soupkitchen and read the reviews
3. a user can login and leave their own review
4. a user can see their profile. 




8888
<p id="soupkitchen-<%= soupkitchen.id %>-id" ></p>
        <p id="soupkitchen-<%= soupkitchen.name %>-name"</p>
        <p id="soupkitchen-<%= soupkitchen.address %>-address"</p>
