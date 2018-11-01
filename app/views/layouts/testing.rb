require 'rspec'
shoulda matchers -- google it. 
validation tests is very common -- sm gives us code. 

RSpec.describe Person, type: :model do
  it { should validate_presence_of(:name) }
end

install the gem from the github page: 
group :test do
  gem 'shoulda', '~> 3.5'
  gem 'shoulda-matchers', '~> 2.0'
end

add factory-bot too. google for gem factory_bot


RSpec.describe Person, type: :model do
  subject { FactoryBot.build(:person) }
end

google factory bot rails 
Install, create factory file-- look for Getting started 
mkdir spec/factories
 FactoryBot.define do
  factory :person do
    name { "Miriam" }
    end 
  end 

  person = FactoryBot.build( :person)
  same as Person.new(name: "Miriam"), but more convenient, esp withwn there's more attributes. 

TEst file, using should matchers. There's some config language
we need -- google the error 
go into rails_helper.rb and add this code: 

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails 
   end 
  end 


require 'rails_helper'

RSpec.describe Person, type: :model do
  subject { FactoryBot.build(:person) }

  it {should validate_presence_of(:name)}
end

-- for this test, you'll need this code: 

class Person < ApplicationRecord
  validates :name, presence: true
end 

-- you can also shorten it to (line 49) 
subject {   build(:person)}
and add this code to rails_helper, from factory bot docs: 

about shoulda Matchers, inside the end
config.include FactoryBot::Syntax::Methods 
end 

github.com/jasonswett/podcast_guest_finder -- for the code 

He deploys to production immediately and constantly 
git push heroku master  -- keep the difference between production and depooyment small -- if there's a problem, it's much easier to find it when you've been deploying regularly. 

Now, a features test that fills in a 1-box form, and verifies that the person was created 
Google 'rspec feature test' to get to rspec/rspec-rails/docs/features-specs/feature-spec


1. create spec/features folder
spec/features/create_person_spec.rb
2. Get the code syntax 

RSpec.feature 'Create person', type: :feature do
  scenario 'Creating a person' do
    visit new_person_path
    sleep(5) -- just to slow down the process so you can see it. 
    fill_in "Name", with: "Abraham Lincoln"
    sleep(5)
    click_on "Create Person"
    sleep(5) -- take out the sleeps later
    expect(page).to have_content("Person was successfully created")
  end 
end 

DO a tiny bit of work at a time, to see whether it's working .
Add capybara gem so feature tests will run. 
Test right away, less to dig through. 
Capybara 1 driver is headless, the other shows the browser. Google capybara drivers rails -- then search for selenium_chrome  
  get the gem for that and add it to group development test   
  gem selenium-webdriver 
  (some error messages, try adding chromedriver-helper)

Close your tabs -- not a good idea, distracting. 
 With this, you'll be able to see it on screen. 

 Run whole test suite every tme before you commit. 

 This simple stuff gets the infrastructure in place -- all teh gems are here
so now we can focus on content. 

git commit and git push heroku master
install Devise for sign in functionality 

1.    gem 'devise' 
2. rails g devise:install
3.follow the directions config thing, actionmailer stuff, local host port , 
config/routes.rb, alerts, 
4. rails g devise users
  creates user table , look at migration file, devise migration file,
5. rails db:migrate
6. do a git status -- to see what was put in
7. get rid of pending tests 
  make one that's like the person validation test, but email instead. 

  Up to 3 tests!
restart server 
Install devise
git push heroku master 
  he has a tab for both local host and heroku 



Next: add the show resource
rails g scaffold shows name:string :uniq (chck what uniq is 
t.string :name, null: false
rails db:migrate

The Ruby Testing Podcast -- on itunes 

Change pending, make it like the person and user tests 
subject { build(:show)}
in model, add validates :name, presence: true

create a feature spec 
 use the model form before 

        visit new_show_path
        fill_in "name", with: "The New Show"
        click_on "create show"
        expect(page).to have_content 
        etc etc 

look at thoughtbot/factory_bot

clean out the data from each test. In Rails 5, model tests and feature tests run using transactions (instead of truncations), 

