# README

# feature and refactor work like (in process):
* update readme
* focus on single page refactor -- soupkitchens index. 
    * change from jquery to js/fetch 
* then, next page SPA
* Foodpantry add: do it as an redo of all the soupkitchens code. later: refactor. So much overlap. 
find and load foodpantry data
* code for foodpantry controller, and single page index


# Soupkitchens and Foodpantries Finder

This is a prototype of my Code for Philly food justice project. The original was coded in Rails; this refactor takes it closer to a Single Page Application, for the Rails/Jquery portfolio project at the Flatiron School FulLStack Developer Program. The idea has a winding history, but this iteration comes from a conversation with an official at the Dept of Public Health that went something like, "What we really need is a Yelp for soup kitchens and food pantries." This is the poorest large city in the nation, and nearly 30% of the population relies on institutions like soupkitchens and food pantries. That said, every city or town has people who rely on the kindness of free food donated and prepared by others, in ways that feel dignified and respectful. This app can be adapted for any locale.  The content challenge is to find the local dataset. 



In the web app's current form, you can check out reviews of soup kitchens and foodpantries. If you sign up/sign in, you can add your own. In October 2018 it is being refactored into a Rails API with JavaScript frontend, with several single page renders. Though still in process, it will eventually have an admin button to load local data in CSF format. 




## Installation/Development

Uses Ruby 2.3.1 and Rails 5.2.0.
Fork, copy the files to your local machine, $ bundle install
$ rake db:migrate, and run on localhost:3000.
I plan to deploy to Heroku.

```

```
## Tests
RSpec tests are in process.

## Contributions
Always welcome using pull requests and issues

## License
Soupkitchens uses the MIT License.

 