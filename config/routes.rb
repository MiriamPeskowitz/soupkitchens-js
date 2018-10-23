Rails.application.routes.draw do
  root 'home#index'
  # namespace :api, :path => "", :constraints => {:subdomain => "api"} do # for making a subdomain on the server, balance load 
  # namespace :api, defaults => {:format => :json} do


      get '/signup', to: 'users#new', as: 'signup'
      get '/signin', to: 'sessions#new', as: "signin"
      post '/signin', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy', as: "logout"
        
      get '/auth/:provider/callback', to: 'sessions#create'

      resources :users

   # tried scope:module :api do.. end  to wrap api versioning around this block 
      resources :soupkitchens do 
        resources :comments
      end

      resources :foodpantries do 
        resources :comments
      end 
      
      # resources :food_pantries do 
      #   resources :comments
      # end
 
end
