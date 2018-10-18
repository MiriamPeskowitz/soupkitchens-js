Rails.application.routes.draw do
  root 'home#index'


  get '/signup', to: 'users#new', as: 'signup'
  get '/signin', to: 'sessions#new', as: "signin"
  post '/signin', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: "logout"
    
  get '/auth/:provider/callback', to: 'sessions#create'

  resources :users

  resources :soupkitchens do 
    resources :comments
  end 

  resources :foodpantries do 
    
  end 
  
  # resources :food_pantries do 
  #   resources :comments
  # end
end
