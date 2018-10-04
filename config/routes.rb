Rails.application.routes.draw do

  # get '/signup', to: 'users#new', as: 'signup'
  # get '/signin', to: 'sessions#new', as: "signin"
  # post '/signin', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy', as: "logout"
  resources :users

  resources :soupkitchens do 
    resources :comments
  end 
  
end
